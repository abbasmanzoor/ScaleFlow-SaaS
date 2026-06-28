const tasks = [
  { title: 'Review Q4 performance audit', priority: 'HIGH', time: '2h left' },
  { title: 'Team syncing: ScaleFlow Beta', priority: 'MEDIUM', time: 'Tomorrow' },
  { title: 'Update documentation assets', priority: 'LOW', time: 'Friday' },
];

const priorityColors = {
  HIGH: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
  MEDIUM: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
  LOW: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
};

export default function UpcomingTasks() {
  return (
    <div className="bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-dark dark:text-white text-lg">Upcoming Tasks</h3>
        <a href="#" className="text-xs text-primary font-medium hover:underline">View all</a>
      </div>
      <div className="space-y-3">
        {tasks.map((task, idx) => (
          <div key={idx} className="p-3 bg-bg-light dark:bg-bg-dark border border-border dark:border-border-dark rounded-lg hover:border-primary transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                {task.priority}
              </span>
              <span className="text-xs text-slate-lighter dark:text-slate-lighter">{task.time}</span>
            </div>
            <p className="text-sm font-medium text-dark dark:text-white mt-1">{task.title}</p>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 border border-border dark:border-border-dark text-primary font-semibold text-sm rounded-lg hover:bg-bg-light dark:hover:bg-bg-dark transition">
        View All Tasks
      </button>
    </div>
  );
}