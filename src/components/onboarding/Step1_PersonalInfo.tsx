'use client';

import { useState } from 'react';

interface Step1Props {
  onNext: (data: any) => void;
  defaultValues?: any;
}

export default function Step1_PersonalInfo({ onNext, defaultValues = {} }: Step1Props) {
  const [formData, setFormData] = useState({
    fullName: defaultValues.fullName || '',
    email: defaultValues.email || '',
    password: defaultValues.password || '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
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
      <h2 className="text-2xl font-bold text-dark dark:text-white mb-2">Personal Information</h2>
      <p className="text-slate-light dark:text-slate-lighter mb-6">Let's start by getting to know you.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">
            Work Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@scaleflow.com"
            className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">
            Password
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="••••••••"
            className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          <p className="text-xs text-slate-lighter dark:text-slate-lighter mt-1">Minimum 8 characters</p>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-hover transition shadow-sm"
        >
          Next Step →
        </button>
      </form>
    </div>
  );
}