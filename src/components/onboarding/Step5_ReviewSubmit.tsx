interface Step5Props {
  data: any;
  onSubmit: () => void;
  onBack: () => void;
}

export default function Step5_ReviewSubmit({ data, onSubmit, onBack }: Step5Props) {
  const getPlanName = (planId: string) => {
    switch (planId) {
      case 'starter': return 'Starter';
      case 'professional': return 'Professional';
      case 'enterprise': return 'Enterprise';
      default: return '—';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-dark dark:text-white mb-2">Review & Submit</h2>
      <p className="text-slate-light dark:text-slate-lighter mb-6">Please review your information before submitting.</p>

      <div className="bg-bg-light dark:bg-bg-dark border border-border dark:border-border-dark rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="text-slate-lighter dark:text-slate-lighter font-semibold">Full Name</span>
          <span className="text-dark dark:text-white">{data.step1?.fullName || '—'}</span>

          <span className="text-slate-lighter dark:text-slate-lighter font-semibold">Email</span>
          <span className="text-dark dark:text-white">{data.step1?.email || '—'}</span>

          <span className="text-slate-lighter dark:text-slate-lighter font-semibold">Company</span>
          <span className="text-dark dark:text-white">{data.step2?.companyName || '—'}</span>

          <span className="text-slate-lighter dark:text-slate-lighter font-semibold">Company Size</span>
          <span className="text-dark dark:text-white">{data.step2?.companySize || '—'}</span>

          <span className="text-slate-lighter dark:text-slate-lighter font-semibold">Industry</span>
          <span className="text-dark dark:text-white">{data.step2?.industry || '—'}</span>

          <span className="text-slate-lighter dark:text-slate-lighter font-semibold">Team Size</span>
          <span className="text-dark dark:text-white">{data.step3?.teamSize || '—'}</span>

          <span className="text-slate-lighter dark:text-slate-lighter font-semibold">Role</span>
          <span className="text-dark dark:text-white">{data.step3?.role || '—'}</span>

          <span className="text-slate-lighter dark:text-slate-lighter font-semibold">Plan</span>
          <span className="text-dark dark:text-white font-medium capitalize">
            {getPlanName(data.step4?.plan)}
          </span>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          type="button"
          onClick={onBack}
          className="w-1/2 py-3 border border-border dark:border-border-dark text-dark dark:text-white font-semibold rounded-lg hover:bg-bg-light dark:hover:bg-bg-dark transition"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="w-1/2 bg-success text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition shadow-sm"
        >
          ✓ Submit
        </button>
      </div>
    </div>
  );
}