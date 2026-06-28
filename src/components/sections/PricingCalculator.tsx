'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const basePrices = {
  starter: 29,
  professional: 99,
  enterprise: 0,
};

export default function PricingCalculator() {
  const [users, setUsers] = useState(10);
  const [plan, setPlan] = useState<'starter' | 'professional' | 'enterprise'>('professional');
  const [isYearly, setIsYearly] = useState(false);

  const calculatePrice = () => {
    if (plan === 'enterprise') return 'Custom';
    let price = basePrices[plan];
    if (plan === 'starter' && users > 10) {
      price += (users - 10) * 2;
    }
    if (plan === 'professional' && users > 50) {
      price += (users - 50) * 1.5;
    }
    if (isYearly) {
      price = price * 12 * 0.8;
      return `$${Math.round(price)}/year`;
    }
    return `$${Math.round(price)}/mo`;
  };

  const getPlanDescription = () => {
    switch (plan) {
      case 'starter':
        return 'Best for small teams starting out. Includes up to 10 users.';
      case 'professional':
        return 'Most popular. Includes up to 50 users with advanced features.';
      case 'enterprise':
        return 'Custom solutions for large organizations. Contact us for pricing.';
    }
  };

  return (
    <section className="py-12 md:py-20 bg-bg-light dark:bg-bg-dark" id="pricing-calculator">
      <Container>
        <SectionTitle
          badge="Pricing Calculator"
          title="Find Your Perfect Plan"
          description="Adjust the sliders below to see real-time pricing for your team."
        />

        <div className="max-w-3xl mx-auto bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-xl p-6 md:p-8 shadow-sm">
          {/* Plan Selection */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-dark dark:text-white block mb-2">
              Select Plan
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['starter', 'professional', 'enterprise'].map((p) => (
                <button
                  key={p}
                  onClick={() => setPlan(p as any)}
                  className={`py-2 px-3 rounded-lg border text-sm capitalize transition ${
                    plan === p
                      ? 'border-primary bg-primary/10 text-primary font-semibold'
                      : 'border-border dark:border-border-dark text-slate-light dark:text-slate-lighter hover:border-primary'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-lighter dark:text-slate-lighter mt-2">{getPlanDescription()}</p>
          </div>

          {/* Users Slider */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-dark dark:text-white">
                Number of Users
              </label>
              <span className="text-lg font-bold text-primary">{users}</span>
            </div>
            <input
              type="range"
              min={1}
              max={500}
              value={users}
              onChange={(e) => setUsers(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary mt-2"
            />
            <div className="flex justify-between text-xs text-slate-lighter dark:text-slate-lighter">
              <span>1</span>
              <span>500+</span>
            </div>
          </div>

          {/* ✅ پرفیشنل ٹوگل – بالکل پرائسنگ سیکشن جیسا */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-semibold text-dark dark:text-white">Billing Cycle</span>
            <div className="flex items-center gap-4">
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
                    <style>{`
                      button[role="switch"] {
                        background-color: ${isYearly ? '#2563EB' : 'var(--track-bg, #e2e8f0)'};
                      }
                      .dark button[role="switch"] {
                        --track-bg: ${isYearly ? '#2563EB' : '#334155'};
                      }
                    `}</style>

                    <span
                      className={`absolute top-1 left-1 w-6 h-6 bg-white dark:bg-white rounded-full shadow-md transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                        isYearly ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    >
                      <span
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                          isYearly ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </span>
                    </span>

                    <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/10 dark:bg-white/5" />
                  </button>
                </div>

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
          </div>

          {/* Price Display */}
          <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-lg p-4 text-center mt-2">
            <p className="text-sm text-slate-lighter dark:text-slate-lighter">Your estimated price</p>
            <p className="text-3xl font-bold text-primary mt-1">{calculatePrice()}</p>
            {plan === 'enterprise' && (
              <a href="#contact" className="text-sm text-primary font-semibold hover:underline mt-2 inline-block">
                Contact sales for custom quote →
              </a>
            )}
          </div>

          {/* CTA */}
          <button className="w-full mt-4 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-hover transition shadow-sm">
            {plan === 'enterprise' ? 'Contact Sales' : 'Get Started with This Plan'}
          </button>
        </div>
      </Container>
    </section>
  );
}