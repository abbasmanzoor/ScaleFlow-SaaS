'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    e.currentTarget.reset();
  };

  return (
    <section className="py-12 md:py-20 bg-bg-light dark:bg-bg-dark" id="contact">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            badge="Contact"
            title="Talk to our experts"
            description="Have questions about integrating ScaleFlow? Let's talk."
          />
          <div className="bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-xl p-6 md:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">Work Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">Company Name</label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your needs..."
                  className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-hover transition shadow-sm"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}