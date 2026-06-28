const activities = [
  { user: 'Sarah Chen', action: 'pushed 4 commits to feature/auth-refactor', time: '12 minutes ago', initials: 'SC' },
  { user: 'Markus Weber', action: 'resolved issue #492 (Deployment Lag)', time: '1 hour ago', initials: 'MW' },
  { user: 'Elena Rodriguez', action: 'shared a new document: Q1 Scaling Strategy.pdf', time: '3 hours ago', initials: 'ER' },
];

export default function RecentActivity() {
  return (
    <div className="bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-dark dark:text-white text-lg">Recent Activity</h3>
        <a href="#" className="text-xs text-primary font-medium hover:underline">View all</a>
      </div>
      <div className="space-y-3">
        {activities.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
              {item.initials}
            </div>
            <div>
              <p className="text-sm text-dark dark:text-white">
                <span className="font-semibold">{item.user}</span> {item.action}
              </p>
              <span className="text-xs text-slate-lighter dark:text-slate-lighter">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}