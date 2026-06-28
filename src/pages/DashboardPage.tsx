import { Link } from 'react-router-dom';
import AnalyticsCards from '../components/dashboard/AnalyticsCards';
import RecentActivity from '../components/dashboard/RecentActivity';
import UpcomingTasks from '../components/dashboard/UpcomingTasks';
import UserProfile from '../components/dashboard/UserProfile';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-dark dark:text-white hover:text-primary transition">
            <span className="text-primary">⚡</span> ScaleFlow
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/profile" className="text-sm text-primary hover:underline flex items-center gap-1">
              ✎ Edit Profile
            </Link>
            <Link to="/" className="text-sm text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-dark dark:text-white">Global Performance Dashboard</h1>
          <p className="text-slate-light dark:text-slate-lighter">Real-time overview of your operational metrics and team productivity.</p>
        </header>

        <AnalyticsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
          <div>
            <UpcomingTasks />
          </div>
        </div>

        <div className="mt-6">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}