import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

export default function ProductOverview() {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-bg-dark" id="solutions">
      <Container>
        <SectionTitle
          badge="Product Overview"
          title="Engineered for modern teams"
          description="ScaleFlow consolidates your entire tech stack into one unified workspace — reducing overhead and accelerating delivery."
        />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-bg-light dark:bg-bg-dark border border-border dark:border-border-dark rounded-xl overflow-hidden shadow-sm">
              <div className="bg-white dark:bg-dark-light px-4 py-3 border-b border-border dark:border-border-dark flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-xs font-medium text-slate-lighter ml-2">ScaleFlow · Analytics</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-lg p-3">
                    <span className="text-xs text-slate-lighter dark:text-slate-lighter">Revenue</span>
                    <span className="block text-lg font-bold text-dark dark:text-white">$1.2M</span>
                  </div>
                  <div className="bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-lg p-3">
                    <span className="text-xs text-slate-lighter dark:text-slate-lighter">Users</span>
                    <span className="block text-lg font-bold text-dark dark:text-white">85.4k</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-lighter dark:text-slate-lighter">Team Activity</span>
                    <Link
                      to="/dashboard"
                      className="text-xs text-primary font-medium hover:underline transition"
                    >
                      View all
                    </Link>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center text-xs font-bold">SC</span>
                      <span className="text-dark dark:text-white">Sarah pushed 4 commits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-lighter flex items-center justify-center text-xs font-bold">MW</span>
                      <span className="text-dark dark:text-white">Markus resolved #492</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center text-2xl">⚡</div>
              <div>
                <h3 className="font-semibold text-dark dark:text-white text-lg">Unified Data Architecture</h3>
                <p className="text-sm text-slate-light dark:text-slate-lighter">Eliminate silos with a single source of truth for all your business data.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center text-2xl">🛡️</div>
              <div>
                <h3 className="font-semibold text-dark dark:text-white text-lg">Enterprise-Grade Security</h3>
                <p className="text-sm text-slate-light dark:text-slate-lighter">SOC2 Type II compliant with end-to-end encryption and granular RBAC.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center text-2xl">🚀</div>
              <div>
                <h3 className="font-semibold text-dark dark:text-white text-lg">Lightning-Fast Performance</h3>
                <p className="text-sm text-slate-light dark:text-slate-lighter">12ms average query response time, built for high-velocity teams.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border dark:border-border-dark">
              <div>
                <span className="text-2xl font-bold text-dark dark:text-white">99.9%</span>
                <p className="text-xs text-slate-lighter dark:text-slate-lighter">Uptime SLA</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-dark dark:text-white">40%</span>
                <p className="text-xs text-slate-lighter dark:text-slate-lighter">Faster delivery</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-dark dark:text-white">50k+</span>
                <p className="text-xs text-slate-lighter dark:text-slate-lighter">Active users</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}