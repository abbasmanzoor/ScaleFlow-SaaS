'use client';

import { motion } from 'framer-motion';
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

export default function AnimatedFeatures() {
  return (
    <section className="py-12 md:py-20 bg-bg-light dark:bg-bg-dark" id="features">
      <Container>
        <SectionTitle
          badge="Features"
          title="Everything you need to scale"
          description="Six powerful modules designed to streamline every aspect of your business operations."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-xl p-6 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-dark dark:text-white text-lg">{feature.title}</h3>
              <p className="text-sm text-slate-light dark:text-slate-lighter mt-1">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}