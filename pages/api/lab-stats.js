export default function handler(req, res) {
  res.status(200).json({
    experiments: 7,
    stack: 'Next.js, React, Tailwind',
    focus: 'UI systems + creative engineering',
  });
}
