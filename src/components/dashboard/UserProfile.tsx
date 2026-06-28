import { Link } from 'react-router-dom';

export default function UserProfile() {
  return (
    <div className="bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-xl p-5 flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
        JD
      </div>
      <div className="flex-1">
        <p className="font-semibold text-dark dark:text-white">James Dalton</p>
        <p className="text-sm text-slate-light dark:text-slate-lighter">Administrator</p>
        <p className="text-xs text-slate-lighter dark:text-slate-lighter">james@scaleflow.com</p>
      </div>
      <div className="text-right">
        <span className="text-xs bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold">Pro Plan</span>
        <p className="text-xs text-slate-lighter dark:text-slate-lighter mt-1">Next billing: Jan 12</p>
        <Link to="/profile" className="text-xs text-primary hover:underline mt-1 inline-block">Edit Profile</Link>
      </div>
    </div>
  );
}