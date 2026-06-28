'use client';

import { useState } from 'react';

interface Step3Props {
  onNext: (data: any) => void;
  onBack: () => void;
  defaultValues?: any;
}

export default function Step3_TeamSetup({ onNext, onBack, defaultValues = {} }: Step3Props) {
  const [formData, setFormData] = useState({
    teamSize: defaultValues.teamSize || '',
    role: defaultValues.role || '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.teamSize) newErrors.teamSize = 'Please select team size';
    if (!formData.role) newErrors.role = 'Please select your role';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext(formData);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-dark dark:text-white mb-2">Team Setup</h2>
      <p className="text-slate-light dark:text-slate-lighter mb-6">Help us understand your team structure.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">
            Team Size
          </label>
          <select
            value={formData.teamSize}
            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
            className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
          >
            <option value="">Select team size...</option>
            <option value="1-5">1-5 members</option>
            <option value="6-15">6-15 members</option>
            <option value="16-50">16-50 members</option>
            <option value="51-200">51-200 members</option>
            <option value="200+">200+ members</option>
          </select>
          {errors.teamSize && <p className="text-red-500 text-xs mt-1">{errors.teamSize}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">
            Your Role
          </label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
          >
            <option value="">Select your role...</option>
            <option value="CEO">CEO / Founder</option>
            <option value="CTO">CTO / Engineering Lead</option>
            <option value="Product">Product Manager</option>
            <option value="Marketing">Marketing Lead</option>
            <option value="Sales">Sales Lead</option>
            <option value="Operations">Operations Manager</option>
            <option value="Other">Other</option>
          </select>
          {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
        </div>

        <div className="flex gap-3">
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
            Next Step →
          </button>
        </div>
      </form>
    </div>
  );
}