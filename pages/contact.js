import { useState } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    setFormState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    });

    const data = await response.json();
    setStatus(data.success ? 'success' : data.error || 'error');
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact</h1>
        <p className="text-white/70 mb-8">
          Let&apos;s connect about roles, collaborations, or systems projects. This form uses a simple Next.js API route.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
            className="w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            className="w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={formState.message}
            onChange={handleChange}
            className="w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
            required
          />
          <button
            type="submit"
            className="border border-emerald-400 px-6 py-2 rounded-full uppercase text-sm tracking-wide hover:bg-emerald-500/10 transition"
          >
            Send Message
          </button>
        </form>
        {status ? (
          <p className="mt-4 text-sm text-emerald-300">
            {status === 'loading'
              ? 'Sending...'
              : status === 'success'
                ? 'Message sent successfully.'
                : `Error: ${status}`}
          </p>
        ) : null}
      </main>
    </div>
  );
};

export default ContactPage;
