import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const features = [
  { icon: '📋', title: 'Project Management', description: 'High-fidelity task tracking with dependencies, resource allocation, and timeline views.' },
  { icon: '👥', title: 'Team Collaboration', description: 'Real-time multiplayer editing and integrated communication across every object.' },
  { icon: '⚙️', title: 'Workflow Automation', description: 'No-code builder to automate repetitive tasks and cross-functional processes.' },
  { icon: '🧠', title: 'AI Insights', description: 'Predictive forecasting and executive summaries powered by proprietary LLM models.' },
  { icon: '📊', title: 'Analytics Dashboard', description: 'Customizable BI dashboards with deep-drill capabilities and real-time data.' },
  { icon: '🔒', title: 'Secure Cloud Platform', description: 'Granular RBAC, audit logs, and compliance shielding for enterprise workloads.' },
];

export default function Features() {
  return (
    <section className="py-12 md:py-20 bg-bg-light" id="features">
      <Container>
        <SectionTitle
          badge="Features"
          title="Everything you need to scale"
          description="Six powerful modules designed to streamline every aspect of your business operations."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-xl p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 text-primary flex items-center justify-center text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-dark text-lg">{feature.title}</h3>
              <p className="text-sm text-slate-light mt-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}