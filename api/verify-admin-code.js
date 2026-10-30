const crypto = require('crypto');

const ALLOWED_ADMINS = [
  'emil9030@gmail.com',
  'agents.crew.ai@gmail.com',
  'agrodemetra@abv.bg',
  'iliyanasavcheva91@gmail.com'
];
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
    const { email, code, expiresAt, token } = body || {};
    const normalizedEmail = (email || '').trim().toLowerCase();
    const normalizedCode = (code || '').trim();

    if (!normalizedEmail || !ALLOWED_ADMINS.includes(normalizedEmail)) {
      return res.status(403).json({ success: false, error: 'Неоторизиран имейл адрес.' });
    }

    if (!normalizedCode || normalizedCode.length !== 6) {
      return res.status(400).json({ success: false, error: 'Моля, въведете валиден 6-цифрен код.' });
    }

    if (!expiresAt || Date.now() > Number(expiresAt)) {
      return res.status(400).json({ success: false, error: 'Кодът за сигурност е изтекъл. Моля, заявите нов код.' });
    }

    // Verify HMAC
    const hmac = crypto.createHmac('sha256', AUTH_SECRET);
    hmac.update(`${normalizedEmail}:${normalizedCode}:${expiresAt}`);
    const expectedToken = hmac.digest('hex');

    if (expectedToken !== token) {
      return res.status(400).json({ success: false, error: 'Грешен код за достъп. Моля, проверете и опитайте отново.' });
    }

    // Issue session token valid for 24h
    const sessionExpiresAt = Date.now() + 24 * 60 * 60 * 1000;
    const sessionHmac = crypto.createHmac('sha256', AUTH_SECRET);
    sessionHmac.update(`${normalizedEmail}:session:${sessionExpiresAt}`);
    const sessionToken = sessionHmac.digest('hex');

    return res.status(200).json({
      success: true,
      email: normalizedEmail,
      sessionToken,
      sessionExpiresAt,
      message: 'Успешен администраторски вход!'
    });

  } catch (error) {
    console.error('verify-admin-code internal error:', error);
    return res.status(500).json({ success: false, error: 'Възникна сървърна грешка при верификацията.' });
  }
};
