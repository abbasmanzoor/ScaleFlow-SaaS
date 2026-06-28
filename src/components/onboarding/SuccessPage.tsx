interface SuccessPageProps {
  data: any;
}

export default function SuccessPage({ data }: SuccessPageProps) {
  return (
    <div className="text-center py-8">
      <div className="w-20 h-20 bg-success/20 dark:bg-success/30 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-5xl">🎉</span>
      </div>
      <h2 className="text-3xl font-bold text-dark dark:text-white mb-2">Welcome to ScaleFlow!</h2>
      <p className="text-slate-light dark:text-slate-lighter mb-6">
        Your account has been successfully created. We're excited to have you on board!
      </p>
      <div className="bg-bg-light dark:bg-bg-dark border border-border dark:border-border-dark rounded-lg p-6 max-w-md mx-auto text-left">
        <p className="text-sm font-semibold text-dark dark:text-white mb-2">Quick Summary</p>
        <div className="space-y-1 text-sm">
          <p>
            <span className="font-medium text-dark dark:text-white">Name:</span>{' '}
            <span className="text-slate-light dark:text-slate-lighter">{data.step1?.fullName || '—'}</span>
          </p>
          <p>
            <span className="font-medium text-dark dark:text-white">Email:</span>{' '}
            <span className="text-slate-light dark:text-slate-lighter">{data.step1?.email || '—'}</span>
          </p>
          <p>
            <span className="font-medium text-dark dark:text-white">Company:</span>{' '}
            <span className="text-slate-light dark:text-slate-lighter">{data.step2?.companyName || '—'}</span>
          </p>
          <p>
            <span className="font-medium text-dark dark:text-white">Plan:</span>{' '}
            <span className="text-slate-light dark:text-slate-lighter capitalize">{data.step4?.plan || '—'}</span>
          </p>
        </div>
      </div>
      <a
        href="/dashboard"
        className="inline-block mt-6 bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-hover transition shadow-sm"
      >
        Go to Dashboard →
      </a>
    </div>
  );
}