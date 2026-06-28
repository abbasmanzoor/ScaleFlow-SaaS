import OnboardingLayout from '../components/onboarding/OnboardingLayout';

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark py-12 px-4">
      <div className="text-center mb-8">
        <a href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-dark dark:text-white">
          <span className="text-primary">⚡</span> ScaleFlow
        </a>
        <p className="text-slate-light dark:text-slate-lighter mt-1">Complete your onboarding to get started</p>
      </div>
      <OnboardingLayout />
    </div>
  );
}