export default function handler(req, res) {
  res.status(200).json({
    experiments: 8,
    stack: 'Next.js, React, Tailwind',
    focus: 'UI systems + creative engineering',
  });
}
