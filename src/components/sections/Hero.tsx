'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="py-12 md:py-20 bg-bg-light dark:bg-bg-dark overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-full px-4 py-1.5 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                <span className="text-xs font-semibold text-slate-light dark:text-slate-lighter tracking-wide">v4.0 — AI Insights now live</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark dark:text-white tracking-tight leading-tight">
                Manage Your Entire Business From<br />
                <span className="text-primary">One Powerful Platform</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-light dark:text-slate-lighter mt-4 max-w-lg">
                ScaleFlow helps teams automate workflows, manage projects, analyze performance, and scale operations faster — all from a single, unified workspace.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/onboarding"
                  className="bg-primary text-white font-semibold px-7 py-3.5 rounded-lg text-sm shadow-sm hover:bg-primary-hover transition"
                >
                  Start Free Trial
                </Link>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="border border-border dark:border-border-dark text-dark dark:text-white font-semibold px-7 py-3.5 rounded-lg text-sm flex items-center gap-2 hover:bg-bg-light dark:hover:bg-bg-dark transition"
                >
                  <span className="text-lg">▶</span> Watch Demo
                </button>
              </div>
              <div className="mt-10 pt-8 border-t border-border dark:border-border-dark">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex -space-x-2">
                    <img src="https://i.pravatar.cc/32?img=1" alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-dark-light" />
                    <img src="https://i.pravatar.cc/32?img=2" alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-dark-light" />
                    <img src="https://i.pravatar.cc/32?img=3" alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-dark-light" />
                    <img src="https://i.pravatar.cc/32?img=4" alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-dark-light" />
                    <span className="w-8 h-8 rounded-full border-2 border-white dark:border-dark-light bg-primary text-white text-xs font-semibold flex items-center justify-center">+2k</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-dark dark:text-white">2,500+</span>
                    <span className="text-sm text-slate-lighter dark:text-slate-lighter"> companies trust ScaleFlow</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-6 mt-4 text-xs font-semibold uppercase text-slate-lighter dark:text-slate-lighter">
                  <span>Linear</span>
                  <span>Notion</span>
                  <span>Stripe</span>
                  <span>Slack</span>
                  <span>Framer</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-xl shadow-lg overflow-hidden">
              <div className="bg-bg-light dark:bg-bg-dark px-4 py-3 border-b border-border dark:border-border-dark flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-xs font-medium text-slate-lighter ml-2">ScaleFlow · Dashboard</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-bg-light dark:bg-bg-dark border border-border dark:border-border-dark rounded-lg p-3">
                    <span className="text-xs text-slate-lighter">Revenue</span>
                    <span className="block text-xl font-bold text-dark dark:text-white">$1.2M</span>
                    <span className="text-xs text-success font-semibold">↑ 18%</span>
                  </div>
                  <div className="bg-bg-light dark:bg-bg-dark border border-border dark:border-border-dark rounded-lg p-3">
                    <span className="text-xs text-slate-lighter">Users</span>
                    <span className="block text-xl font-bold text-dark dark:text-white">85.4k</span>
                    <span className="text-xs text-success font-semibold">↑ 4.2%</span>
                  </div>
                </div>
                <div className="bg-bg-light dark:bg-bg-dark border border-border dark:border-border-dark rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-lighter">Team Activity</span>
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
        </Container>
      </section>

      {isVideoOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-dark-light rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border dark:border-border-dark">
              <h3 className="font-semibold text-dark dark:text-white">ScaleFlow Demo</h3>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="text-slate-lighter hover:text-dark dark:hover:text-white text-2xl transition"
              >
                ✕
              </button>
            </div>
            <div className="p-4 aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="ScaleFlow Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="px-6 py-4 border-t border-border dark:border-border-dark text-sm text-slate-light dark:text-slate-lighter">
              👆 Watch how ScaleFlow helps teams scale faster. Click the video to play.
            </div>
          </div>
        </div>
      )}
    </>
  );
}