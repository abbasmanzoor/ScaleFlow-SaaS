'use client';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const STORAGE_KEY = 'onboardingData';

export default function ProfilePage() {
  const [formData, setFormData] = useState<any>({
    step1: { fullName: '', email: '', password: '' },
    step2: { companyName: '', companySize: '', industry: '' },
    step3: { teamSize: '', role: '' },
    step4: { plan: 'professional' },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.formData) {
          setFormData(parsed.formData);
        }
      } catch (error) {
        console.error('Failed to load profile data:', error);
      }
    }
    setIsLoading(false);
  }, []);

  const handleChange = (step: string, field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      // Update localStorage
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        parsed.formData = formData;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      } else {
        // If no existing data, create new
        const newData = {
          currentStep: 5,
          formData: formData,
          isComplete: true,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      }
      showToast('Profile updated successfully!', 'success');
      navigate('/dashboard');
    } catch (error) {
      showToast('Failed to update profile.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-slate-light dark:text-slate-lighter">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-dark dark:text-white">Edit Profile</h1>
          <button
            onClick={() => navigate('/dashboard')}
            className="text-sm text-primary hover:underline"
          >
            ← Back to Dashboard
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-xl p-6 md:p-8 shadow-sm">
          {/* Personal Information */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-dark dark:text-white mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.step1?.fullName || ''}
                  onChange={(e) => handleChange('step1', 'fullName', e.target.value)}
                  className="w-full px-4 py-2 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">Email</label>
                <input
                  type="email"
                  value={formData.step1?.email || ''}
                  onChange={(e) => handleChange('step1', 'email', e.target.value)}
                  className="w-full px-4 py-2 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-dark dark:text-white mb-4">Company Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">Company Name</label>
                <input
                  type="text"
                  value={formData.step2?.companyName || ''}
                  onChange={(e) => handleChange('step2', 'companyName', e.target.value)}
                  className="w-full px-4 py-2 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">Company Size</label>
                <select
                  value={formData.step2?.companySize || ''}
                  onChange={(e) => handleChange('step2', 'companySize', e.target.value)}
                  className="w-full px-4 py-2 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
                >
                  <option value="">Select size...</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">Industry</label>
                <select
                  value={formData.step2?.industry || ''}
                  onChange={(e) => handleChange('step2', 'industry', e.target.value)}
                  className="w-full px-4 py-2 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
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
              </div>
            </div>
          </div>

          {/* Team Setup */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-dark dark:text-white mb-4">Team Setup</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">Team Size</label>
                <select
                  value={formData.step3?.teamSize || ''}
                  onChange={(e) => handleChange('step3', 'teamSize', e.target.value)}
                  className="w-full px-4 py-2 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
                >
                  <option value="">Select team size...</option>
                  <option value="1-5">1-5 members</option>
                  <option value="6-15">6-15 members</option>
                  <option value="16-50">16-50 members</option>
                  <option value="51-200">51-200 members</option>
                  <option value="200+">200+ members</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter block mb-1">Your Role</label>
                <select
                  value={formData.step3?.role || ''}
                  onChange={(e) => handleChange('step3', 'role', e.target.value)}
                  className="w-full px-4 py-2 border border-border dark:border-border-dark rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white dark:bg-dark-light text-dark dark:text-white"
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
              </div>
            </div>
          </div>

          {/* Plan */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-dark dark:text-white mb-4">Plan</h2>
            <div className="grid grid-cols-3 gap-2">
              {['starter', 'professional', 'enterprise'].map((plan) => (
                <button
                  key={plan}
                  type="button"
                  onClick={() => handleChange('step4', 'plan', plan)}
                  className={`py-2 px-3 rounded-lg border text-sm capitalize transition ${
                    formData.step4?.plan === plan
                      ? 'border-primary bg-primary/10 text-primary font-semibold'
                      : 'border-border dark:border-border-dark text-slate-light dark:text-slate-lighter hover:border-primary'
                  }`}
                >
                  {plan}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-border dark:border-border-dark">
            <button
              type="submit"
              disabled={isSaving}
              className="flex-1 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-hover transition shadow-sm disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="flex-1 border border-border dark:border-border-dark text-dark dark:text-white font-semibold py-3 rounded-lg hover:bg-bg-light dark:hover:bg-bg-dark transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}