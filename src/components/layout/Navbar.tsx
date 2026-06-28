import { useState } from 'react';
import LoginModal from '../ui/LoginModal';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
  { label: 'Dashboard', href: '/dashboard' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-dark-light/90 backdrop-blur-sm border-b border-border dark:border-border-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl text-primary">⚡</span>
            <span className="text-xl font-bold tracking-tight text-dark dark:text-white">ScaleFlow</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-light dark:text-slate-lighter hover:text-primary dark:hover:text-primary transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="text-sm font-medium text-slate-light dark:text-slate-lighter hover:text-dark dark:hover:text-white transition"
            >
              Log In
            </button>
            <a
              href="/onboarding"
              className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-hover transition shadow-sm"
            >
              Start Free Trial
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-dark dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white dark:bg-dark-light border-t border-border dark:border-border-dark px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-base font-medium text-dark dark:text-white hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsLoginOpen(true);
              }}
              className="block text-base font-medium text-slate-light dark:text-slate-lighter hover:text-dark dark:hover:text-white transition"
            >
              Log In
            </button>
            <a
              href="/onboarding"
              className="block text-center bg-primary text-white font-semibold py-2.5 rounded-lg hover:bg-primary-hover transition shadow-sm"
            >
              Start Free Trial
            </a>
          </div>
        )}
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}