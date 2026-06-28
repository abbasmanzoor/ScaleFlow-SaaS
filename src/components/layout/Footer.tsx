export default function Footer() {
  return (
    <footer className="bg-dark dark:bg-dark-light text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-8 border-b border-[#213145] dark:border-border-dark">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl text-primary">⚡</span>
              <span className="text-xl font-bold">ScaleFlow</span>
            </div>
            <p className="text-sm text-slate-lighter dark:text-slate-lighter max-w-xs">
              The modern operating system for growing businesses. Empowering teams with high-velocity data flows and predictive analytics.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white dark:text-white">Product</h4>
            <ul className="space-y-2 text-sm text-slate-lighter dark:text-slate-lighter">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Solutions</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white dark:text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-lighter dark:text-slate-lighter">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white dark:text-white">Company</h4>
            <ul className="space-y-2 text-sm text-slate-lighter dark:text-slate-lighter">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white dark:text-white">Support</h4>
            <ul className="space-y-2 text-sm text-slate-lighter dark:text-slate-lighter">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Status</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 text-center text-sm text-slate-lighter dark:text-slate-lighter">
          &copy; {new Date().getFullYear()} ScaleFlow Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}