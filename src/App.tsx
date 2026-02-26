import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { ChevronUp, Loader2 } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';

// Lazy load sections below the fold
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Education = lazy(() => import('./sections/Education'));
const Contact = lazy(() => import('./sections/Contact'));

const LoadingSpinner = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <Loader2 className="w-8 h-8 text-light-primary dark:text-dark-primary animate-spin" />
  </div>
);

const AppContent: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // High-performance scroll detection using IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollTop(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-light-bg dark:bg-[#0a0a0c] transition-colors duration-300 overflow-x-hidden">
        <Navbar />

        <main>
          <div ref={heroRef}>
            <Hero />
          </div>
          <Suspense fallback={<LoadingSpinner />}>
            {/* Band-tinted even sections in light mode for visual rhythm */}
            <About />
            <div className="bg-light-surface2 dark:bg-transparent">
              <Skills />
            </div>
            <Projects />
            <div className="bg-light-surface2 dark:bg-transparent">
              <Experience />
            </div>
            <Education />
            <div className="bg-light-surface2 dark:bg-transparent">
              <Contact />
            </div>
          </Suspense>
        </main>

        <Footer />

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <m.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 p-4 rounded-xl bg-dark-primary text-white shadow-glow hover:scale-110 active:scale-95 transition-transform"
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </m.button>
          )}
        </AnimatePresence>

        {/* Optimized Background Decorative Gradient */}
        <div className="fixed inset-0 -z-50 pointer-events-none opacity-20 dark:opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)]" />
        </div>
      </div>
    </LazyMotion>
  );
};


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
