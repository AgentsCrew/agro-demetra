const crypto = require('crypto');

const ALLOWED_ADMINS = ['emil9030@gmail.com', 'agents.crew.ai@gmail.com'];
const AUTH_SECRET = process.env.ADMIN_AUTH_SECRET || 'agro-demetra-resend-otp-secret-2026';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) {}
    }
    const { email, customApiKey } = body || {};
    const normalizedEmail = (email || '').trim().toLowerCase();

    if (!normalizedEmail || !ALLOWED_ADMINS.includes(normalizedEmail)) {
      return res.status(403).json({
        success: false,
        error: 'Имейл адресът няма администраторски права. Разрешени са само emil9030@gmail.com и agents.crew.ai@gmail.com.'
      });
    }

    // Generate 6-digit OTP code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 15 * 60 * 1000; // 15 minutes

    // Create HMAC signature
    const hmac = crypto.createHmac('sha256', AUTH_SECRET);
    hmac.update(`${normalizedEmail}:${code}:${expiresAt}`);
    const token = hmac.digest('hex');

    // Attempt to send email via Resend
    const resendApiKey = customApiKey || process.env.RESEND_API_KEY;
    let emailSent = false;
    let resendError = null;

    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey.trim()}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Agro Demetra <onboarding@resend.dev>',
            to: [normalizedEmail],
            subject: `${code} е вашият код за вход в Agro Demetra Admin`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; padding: 28px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
                <div style="text-align: center; margin-bottom: 24px;">
                  <span style="font-size: 24px; font-weight: 900; color: #15803d; letter-spacing: -0.5px;">AGRO DEMETRA</span>
                  <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #64748b; margin-top: 4px; letter-spacing: 1px;">Административен Панел</div>
                </div>
                <p style="font-size: 15px; color: #1e293b; line-height: 1.5; margin-bottom: 12px;">Здравейте,</p>
                <p style="font-size: 14px; color: #475569; line-height: 1.6; margin-bottom: 20px;">
                  Получихме заявка за вход в административния панел на <strong>agrodemetra.bg</strong> с вашия профил.
                </p>
                <div style="margin: 28px 0; text-align: center;">
                  <span style="display: inline-block; font-size: 34px; font-weight: 900; letter-spacing: 8px; color: #0f172a; background-color: #f8fafc; padding: 14px 28px; border-radius: 12px; border: 2px dashed #cbd5e1; font-family: monospace;">
                    ${code}
                  </span>
                </div>
                <p style="font-size: 13px; color: #64748b; line-height: 1.5;">
                  Този код за сигурност е валиден за следващите <strong>15 минути</strong>. Ако не сте заявили вход, моля игнорирайте този имейл.
                </p>
                <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 24px 0;">
                <div style="font-size: 11px; color: #94a3b8; text-align: center;">
                  Agro Demetra &copy; 2026 · Лицензирана Агроаптека № 1042-ПРЗ · Пловдив
                </div>
              </div>
            `
          })
        });

        if (resendRes.ok) {
          emailSent = true;
        } else {
          const errData = await resendRes.json().catch(() => ({}));
          resendError = errData.message || resendRes.statusText;
          console.warn('Resend API response warning:', resendError);
        }
      } catch (err) {
        resendError = err.message;
        console.warn('Resend network error:', err);
      }
    }

    return res.status(200).json({
      success: true,
      email: normalizedEmail,
      expiresAt,
      token,
      emailSent,
      hasResendKey: Boolean(resendApiKey),
      resendError,
      devCode: !emailSent ? code : undefined,
      message: emailSent
        ? `Кодът за сигурност е изпратен успешно до ${normalizedEmail} през Resend!`
        : (resendApiKey 
            ? `Resend грешка (${resendError}). За вход ползвайте тестовия код: ${code}` 
            : `Кодът е генериран: ${code} (За автоматично изпращане въведете RESEND_API_KEY в Vercel или в Настройки).`)
    });

  } catch (error) {
    console.error('send-admin-code internal error:', error);
    return res.status(500).json({ success: false, error: 'Възникна сървърна грешка при генериране на кода.' });
  }
};
