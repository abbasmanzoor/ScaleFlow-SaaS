'use client';

import { useState, useEffect, useCallback } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, NexaCorp',
    avatar: 'https://i.pravatar.cc/44?img=6',
    text: 'ScaleFlow transformed how our engineering and product teams collaborate. The speed of the UI is unmatched.',
  },
  {
    name: 'Marcus Thorne',
    role: 'Director of Product, Orbit',
    avatar: 'https://i.pravatar.cc/44?img=7',
    text: 'The automation engine alone saved us hundreds of manual hours every month. It\'s essential to our stack.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'VP Operations, CloudScale',
    avatar: 'https://i.pravatar.cc/44?img=8',
    text: 'Enterprise security is often a trade-off. ScaleFlow is the first platform that doesn\'t compromise on either.',
  },
  {
    name: 'James Wilson',
    role: 'CEO, TechFlow Inc.',
    avatar: 'https://i.pravatar.cc/44?img=9',
    text: 'We scaled from 10 to 500 employees using ScaleFlow. The platform grew with us seamlessly.',
  },
  {
    name: 'Priya Sharma',
    role: 'Product Lead, InnovateHub',
    avatar: 'https://i.pravatar.cc/44?img=10',
    text: 'The AI insights feature gave us predictive analytics that we never had before. Game changer!',
  },
  {
    name: 'Michael Torres',
    role: 'Engineering Manager, DataCore',
    avatar: 'https://i.pravatar.cc/44?img=11',
    text: 'Finally a tool that actually understands how engineering teams work. The workflow automation is incredible.',
  },
  {
    name: 'Aisha Khan',
    role: 'COO, GrowthStack',
    avatar: 'https://i.pravatar.cc/44?img=12',
    text: 'We reduced our operational costs by 30% within the first month. ScaleFlow paid for itself immediately.',
  },
  {
    name: 'David Park',
    role: 'Head of Product, CloudNova',
    avatar: 'https://i.pravatar.cc/44?img=13',
    text: 'The real-time collaboration features have completely changed how our distributed team works together.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      let next = prev + direction;

      if (next >= testimonials.length) {
        setDirection(-1);
        return prev;
      }

      if (next < 0) {
        setDirection(1);
        return prev;
      }

      return next;
    });
  }, [direction]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      let next = prev - 1;
      if (next < 0) {
        setDirection(1);
        return 0;
      }
      return next;
    });
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <section className="py-12 md:py-20 bg-bg-light dark:bg-bg-dark" id="testimonials">
      <Container>
        <SectionTitle
          badge="Testimonials"
          title="Trusted by global leaders"
          description="See what our customers say about scaling with ScaleFlow."
        />

        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex text-yellow-500 mb-4 text-lg">
                      {'⭐'.repeat(5)}
                    </div>
                    <p className="text-base md:text-lg text-dark dark:text-white leading-relaxed italic">
                      “{t.text}”
                    </p>
                    <div className="flex items-center gap-4 mt-6 pt-4 border-t border-bg-light dark:border-bg-dark">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full border-2 border-primary/20"
                      />
                      <div>
                        <div className="text-base font-semibold text-dark dark:text-white">
                          {t.name}
                        </div>
                        <div className="text-sm text-slate-light dark:text-slate-lighter">
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-dark dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-dark dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* ✅ لائٹ موڈ میں ڈاٹس زیادہ نمایاں */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {testimonials.map((_, i) => {
              const isActive = i === currentIndex;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    if (i < currentIndex) setDirection(-1);
                    else if (i > currentIndex) setDirection(1);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-4 h-4 bg-gray-700 scale-110 shadow-md shadow-primary/50'
                      : 'w-3 h-3 bg-gray-400 dark:bg-primary/30 border border-primary/30 dark:border-primary/40 hover:bg-primary/50 dark:hover:bg-primary/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}