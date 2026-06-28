'use client';

import { useState } from 'react';

interface Step2Props {
  onNext: (data: any) => void;
  onBack: () => void;
  defaultValues?: any;
}

export default function Step2_CompanyDetails({ onNext, onBack, defaultValues = {} }: Step2Props) {
  const [formData, setFormData] = useState({
    companyName: defaultValues.companyName || '',
    companySize: defaultValues.companySize || '',
    industry: defaultValues.industry || '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.companySize) newErrors.companySize = 'Please select company size';
    if (!formData.industry) newErrors.industry = 'Please select industry';
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
      <h2 className="text-2xl font-bold text-dark dark:text-white mb-2">Company Details</h2>
      <p className="text-slate-light dark:text-slate-lighter mb-6">Tell us about your organization.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">
            Company Name
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="Acme Inc."
            className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
          />
          {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">
            Company Size
          </label>
          <select
            value={formData.companySize}
            onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
            className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
          >
            <option value="">Select size...</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="500+">500+ employees</option>
          </select>
          {errors.companySize && <p className="text-red-500 text-xs mt-1">{errors.companySize}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">
            Industry
          </label>
          <select
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
          >
            <option value="">Select industry...</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Retail">Retail</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Other">Other</option>
          </select>
          {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
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