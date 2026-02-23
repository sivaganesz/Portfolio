import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <Loader2 className="w-8 h-8 text-dark-primary animate-spin" />
  </div>
);

const AppContent: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother scroll handling
      let ticking = false;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0c] transition-colors duration-300 overflow-x-hidden selection:bg-dark-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </Suspense>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-xl bg-dark-primary text-white shadow-glow hover:scale-110 active:scale-95 transition-transform"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Optimized Background Decorative Gradient - Using radial gradients instead of blur filters for better performance */}
      <div className="fixed inset-0 -z-50 pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)]" />
      </div>
    </div>
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
