import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { Bio } from '../data/constants';
import { scrollToSection } from '../utils/helpers';
import ThemeToggle from './ThemeToggle';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: <SiGithub size={20} />,   href: Bio.github,   label: "GitHub" },
    { icon: <SiLinkedin size={20} />, href: Bio.linkedin, label: "LinkedIn" },
    { icon: <FaXTwitter size={20} />, href: Bio.twitter,  label: "Twitter/X" },
    { icon: <SiInstagram size={20} />,href: Bio.insta,    label: "Instagram" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Efficient section detection
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/10 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-white/10 shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <img
            src="/logo.svg"
            alt="Siva Muthu Logo"
            width={80}
            height={40}
            fetchPriority="high"
            decoding="async"
            className="w-20 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.id ? 'text-dark-primary' : 'text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary'
                  }`}
                >
                  {link.name}
                </button>
                {activeSection === link.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dark-primary rounded-full"
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-white/10" />

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('contact')}
            >
              Hire Me
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-dark-text-primary dark:text-dark-text-primary"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-[60px] bg-light-bg dark:bg-dark-bg z-40 flex flex-col items-center justify-center gap-8 p-8 overflow-hidden backdrop-blur-xl bg-opacity-95 dark:bg-opacity-95"
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-2xl font-display font-bold text-light-text-primary dark:text-dark-text-primary hover:text-dark-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center gap-6 mt-8"
            >
              <div className="flex items-center gap-6">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-dark-text-secondary hover:text-dark-primary transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleNavClick('contact')}
                className="w-full"
              >
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
