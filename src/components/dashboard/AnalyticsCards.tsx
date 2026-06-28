interface CardProps {
  title: string;
  value: string | number;
  change: string;
  icon: string;
  trend: 'up' | 'down';
}

const cards: CardProps[] = [
  { title: 'Revenue', value: '$1.2M', change: '+18%', icon: '💰', trend: 'up' },
  { title: 'Active Users', value: '85,432', change: '+4.2%', icon: '👥', trend: 'up' },
  { title: 'New Customers', value: '+1,200', change: '+12%', icon: '🆕', trend: 'up' },
  { title: 'Growth Rate', value: '24%', change: '+2.5%', icon: '📈', trend: 'up' },
];

export default function AnalyticsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-xl p-5 hover:border-primary transition-shadow shadow-sm hover:shadow-md"
        >
          <div className="flex items-start justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-lighter dark:text-slate-lighter">
              {card.title}
            </span>
            <span className="text-2xl">{card.icon}</span>
          </div>
          <p className="text-2xl font-bold text-dark dark:text-white mt-2">{card.value}</p>
          <div className="flex items-center gap-1 mt-1">
            <span className={`text-sm font-semibold ${card.trend === 'up' ? 'text-success' : 'text-error'}`}>
              {card.change}
            </span>
            <span className="text-xs text-slate-lighter dark:text-slate-lighter">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}