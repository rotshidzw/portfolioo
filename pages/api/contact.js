export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ success: false, error: 'Missing required fields' });
    return;
  }

  res.status(200).json({ success: true });
}
