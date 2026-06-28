'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const plans = [
  {
    name: 'Starter',
    desc: 'For small teams getting started.',
    monthly: 29,
    yearly: 23,
    features: ['Up to 10 users', 'Core PM tools', 'Basic reporting', '5GB storage'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    desc: 'Power tools for scaling orgs.',
    monthly: 99,
    yearly: 79,
    features: ['Unlimited users', 'Advanced automations', 'Custom analytics', 'AI assistant', '50GB storage'],
    cta: 'Choose Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    desc: 'Custom solutions for big teams.',
    monthly: null,
    yearly: null,
    features: ['Dedicated manager', 'Custom integrations', 'SSO & SAML', '24/7 priority support', 'Unlimited storage'],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-bg-dark" id="pricing">
      <Container>
        <SectionTitle
          badge="Pricing"
          title="Scalable plans for every stage"
          description="Choose the plan that fits your team — upgrade or downgrade anytime."
        />

        {/* ✅ پرفیشنل ٹوگل – لائٹ اور ڈارک دونوں میں بہترین */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={`text-sm font-semibold transition-all duration-300 ${
              !isYearly
                ? 'text-primary dark:text-primary'
                : 'text-slate-400 dark:text-slate-500'
            }`}
          >
            Monthly
          </span>

          <div className="relative">
            {/* ٹوگل کا کنٹینر – ہوور اور فوکس ایفیکٹس کے ساتھ */}
            <div className="relative p-0.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 dark:from-primary/10 dark:to-transparent">
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-14 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 dark:focus:ring-offset-dark-light cursor-pointer"
                role="switch"
                aria-checked={isYearly}
                aria-label="Toggle billing cycle"
                style={{
                  backgroundColor: isYearly
                    ? '#2563EB'
                    : '#e2e8f0',
                }}
              >
                {/* ڈارک موڈ میں ٹریک کا رنگ */}
                <style>{`
                  button[role="switch"] {
                    background-color: ${isYearly ? '#2563EB' : 'var(--track-bg, #e2e8f0)'};
                  }
                  .dark button[role="switch"] {
                    --track-bg: ${isYearly ? '#2563EB' : '#334155'};
                  }
                `}</style>

                {/* سلائیڈر (ball) – صاف، چمکدار، اور ہموار */}
                <span
                  className={`absolute top-1 left-1 w-6 h-6 bg-white dark:bg-white rounded-full shadow-md transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    isYearly ? 'translate-x-6' : 'translate-x-0'
                  }`}
                >
                  {/* سلائیڈر کے اندر چھوٹا سا ڈاٹ – ایکٹو ہونے پر */}
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      isYearly ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                </span>

                {/* ہوور پر چمک */}
                <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/10 dark:bg-white/5" />
              </button>
            </div>

            {/* سیونگ بیج – سالانہ منتخب ہونے پر ظاہر */}
            <div
              className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-success bg-success/10 dark:bg-success/20 px-2 py-0.5 rounded-full whitespace-nowrap transition-all duration-300 ${
                isYearly ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              Save 20%
            </div>
          </div>

          <span
            className={`text-sm font-semibold transition-all duration-300 ${
              isYearly
                ? 'text-primary dark:text-primary'
                : 'text-slate-400 dark:text-slate-500'
            }`}
          >
            Yearly
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, idx) => {
            const price = isYearly ? plan.yearly : plan.monthly;
            return (
              <div
                key={idx}
                className={`border rounded-xl p-6 bg-white dark:bg-dark-light transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                  plan.popular ? 'border-primary shadow-lg relative' : 'border-border dark:border-border-dark hover:border-primary'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wide shadow-md">
                    Most Popular
                  </div>
                )}
                <h3 className="font-semibold text-dark dark:text-white text-lg">{plan.name}</h3>
                <p className="text-sm text-slate-light dark:text-slate-lighter mt-1">{plan.desc}</p>
                <div className="mt-4">
                  {price ? (
                    <>
                      <span className="text-3xl font-bold text-dark dark:text-white">${price}</span>
                      <span className="text-sm text-slate-lighter dark:text-slate-lighter">/mo</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-dark dark:text-white">Custom</span>
                  )}
                </div>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-light dark:text-slate-lighter">
                      <span className="text-primary text-base">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`block text-center mt-6 py-2.5 font-semibold text-sm rounded-lg transition ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary-hover shadow-sm'
                      : 'border border-border dark:border-border-dark text-dark dark:text-white hover:bg-primary hover:text-white hover:border-primary'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}