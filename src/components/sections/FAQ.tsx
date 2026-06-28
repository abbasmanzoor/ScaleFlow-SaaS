'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const faqs = [
  {
    q: 'How secure is my company\'s data?',
    a: 'We use AES-256 encryption at rest and TLS 1.3 in transit. Our infrastructure is hosted in SOC2 Type II certified data centers with regular third-party audits.',
  },
  {
    q: 'Can we import data from our existing tools?',
    a: 'Yes, ScaleFlow provides native importers for Jira, Trello, Monday.com, and Asana. You can also use our public API for custom migrations.',
  },
  {
    q: 'Is there a mobile application available?',
    a: 'ScaleFlow offers native iOS and Android applications that provide the full desktop experience optimized for mobile workflows.',
  },
  {
    q: 'What kind of support is included?',
    a: 'All plans include 24/5 email support. Professional and Enterprise plans include 24/7 live chat and priority response times.',
  },
  {
    q: 'Do you offer discounts for non-profits?',
    a: 'Yes, we offer a 50% discount for registered non-profit organizations and educational institutions. Contact our sales team for details.',
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Absolutely. You can cancel your subscription at any time from your account settings. You will retain access until the end of your billing cycle.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-bg-dark" id="faq">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            badge="FAQ"
            title="Frequently asked questions"
            description="Quick answers to common questions about ScaleFlow."
          />
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border border-border dark:border-border-dark rounded-xl bg-white dark:bg-dark-light overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-bg-light dark:hover:bg-bg-dark transition"
                  >
                    <span className="font-semibold text-dark dark:text-white text-sm md:text-base">{faq.q}</span>
                    <span className="text-slate-lighter dark:text-slate-lighter text-2xl flex-shrink-0 ml-4 transition-transform duration-300">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 px-6 pb-4' : 'max-h-0 px-6'}`}>
                    <p className="text-sm text-slate-light dark:text-slate-lighter">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}