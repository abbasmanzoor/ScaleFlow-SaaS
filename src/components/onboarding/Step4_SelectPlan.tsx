'use client';

import { useState } from 'react';

interface Step4Props {
  onNext: (data: any) => void;
  onBack: () => void;
  defaultValues?: any;
}

const plans = [
  { id: 'starter', name: 'Starter', price: '$29/mo', desc: 'For small teams getting started.' },
  { id: 'professional', name: 'Professional', price: '$99/mo', desc: 'Power tools for scaling orgs.', popular: true },
  { id: 'enterprise', name: 'Enterprise', price: 'Custom', desc: 'Custom solutions for big teams.' },
];

export default function Step4_SelectPlan({ onNext, onBack, defaultValues = {} }: Step4Props) {
  const [selectedPlan, setSelectedPlan] = useState(defaultValues.plan || 'professional');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) {
      setErrors({ plan: 'Please select a plan' });
      return;
    }
    onNext({ plan: selectedPlan });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-dark dark:text-white mb-2">Select Your Plan</h2>
      <p className="text-slate-light dark:text-slate-lighter mb-6">Choose the plan that best fits your needs.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                selectedPlan === plan.id
                  ? 'border-primary bg-primary/5 dark:bg-primary/10'
                  : 'border-border dark:border-border-dark hover:border-primary/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-dark dark:text-white">{plan.name}</span>
                    {plan.popular && (
                      <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">Popular</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-light dark:text-slate-lighter">{plan.desc}</p>
                </div>
                <span className="font-bold text-dark dark:text-white">{plan.price}</span>
              </div>
            </div>
          ))}
          {errors.plan && <p className="text-red-500 text-xs mt-1">{errors.plan}</p>}
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="w-1/2 py-3 border border-border dark:border-border-dark text-dark dark:text-white font-semibold rounded-lg hover:bg-bg-light dark:hover:bg-bg-dark transition"
          >
            ← Back
          </button>
          <button
            type="submit"
            className="w-1/2 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-hover transition shadow-sm"
          >
            Review & Submit →
          </button>
        </div>
      </form>
    </div>
  );
}