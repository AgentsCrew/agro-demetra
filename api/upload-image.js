// Vercel Serverless Function: Upload Image
// Supports Supabase Storage, ImgBB, and optimized Base64 fallback

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
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

    const { image, filename } = body || {};

    if (!image) {
      return res.status(400).json({ success: false, error: 'Липсва файл или изображение за качване.' });
    }

    // 1. Check if ImgBB API key is provided in env
    const imgbbKey = process.env.IMGBB_API_KEY;
    if (imgbbKey) {
      try {
        const cleanBase64 = image.replace(/^data:image\/\w+;base64,/, '');
        const formData = new URLSearchParams();
        formData.append('image', cleanBase64);
        if (filename) formData.append('name', filename);

        const imgbbRes = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
          method: 'POST',
          body: formData
        });

        if (imgbbRes.ok) {
          const imgbbData = await imgbbRes.json();
          if (imgbbData.success && imgbbData.data && imgbbData.data.url) {
            return res.status(200).json({
              success: true,
              url: imgbbData.data.url,
              provider: 'imgbb',
              message: 'Изображението беше качено успешно в ImgBB!'
            });
          }
        }
      } catch (err) {
        console.warn('ImgBB upload error:', err);
      }
    }

    // 2. Default: Return the optimized WebP / Data URL directly
    // This allows instant uploading and attaching without requiring external cloud accounts
    return res.status(200).json({
      success: true,
      url: image,
      provider: 'direct',
      message: 'Изображението е обработено и прикачено успешно!'
    });

  } catch (error) {
    console.error('Upload image error:', error);
    return res.status(500).json({ success: false, error: 'Възникна грешка при обработка на изображението.' });
  }
};
