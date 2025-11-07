import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white py-20 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-geist text-3xl font-semibold tracking-tight md:text-4xl">Let’s Collaborate</h2>
            <p className="mt-2 max-w-2xl text-black/70">Open for commissions and collaborations in design, motion, and creative direction.</p>
          </div>
          <div className="hidden h-1 w-24 rounded bg-red-600 md:block" />
        </div>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-red-600">
              <Mail className="h-5 w-5" />
              <span className="font-medium">hello@zarmanstudio.com</span>
            </div>
            <p className="text-sm text-black/70">Prefer email? Reach out directly or use the form — I typically reply within 24 hours.</p>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-black/70">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none ring-red-200 focus:ring"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-black/70">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none ring-red-200 focus:ring"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-black/70">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none ring-red-200 focus:ring"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-white transition hover:bg-red-500">
              {sent ? 'Message Sent' : 'Send Message'} <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
