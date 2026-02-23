import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, ChevronDown } from 'lucide-react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { Bio } from '../data/constants';
import Button from '../components/Button';
import { scrollToSection } from '../utils/helpers';

const TypingEffect = memo(({ roles }: { roles: string[] }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[roleIndex];
      if (isDeleting) {
        setCurrentRole(prev => fullRole.substring(0, prev.length - 1));
        setTypeSpeed(50);
      } else {
        setCurrentRole(prev => fullRole.substring(0, prev.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && currentRole === fullRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex, roles, typeSpeed]);

  return (
    <div className="h-12 flex items-center justify-center will-change-contents">
      <p className="text-xl md:text-3xl font-mono text-dark-text-secondary flex items-center gap-3">
        <span className="text-white font-bold pr-2">
          {currentRole}
        </span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="w-1 h-8 bg-dark-primary"
        />
      </p>
    </div>
  );
});

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <SiGithub size={24} />,   href: Bio.github,   label: "GitHub" },
    { icon: <SiLinkedin size={24} />, href: Bio.linkedin, label: "LinkedIn" },
    { icon: <FaXTwitter size={24} />, href: Bio.twitter,  label: "Twitter/X" },
    { icon: <SiInstagram size={24} />,href: Bio.insta,    label: "Instagram" },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden bg-[#050508] [content-visibility:auto]">
      {/* Optimized Background Glow - Using radial gradient instead of blur filter for better performance */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10 pb-24 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 will-change-transform"
        >
          <span className="text-dark-primary font-mono font-bold tracking-[0.2em] uppercase text-sm">
            Welcome to my portfolio
          </span>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight tracking-tight">
            I'm <span className="gradient-text">{Bio.name}</span>
          </h1>

          <TypingEffect roles={Bio.roles} />

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-sans">
            {Bio.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button
              variant="primary"
              onClick={() => scrollToSection('contact')}
              icon={<Send className="w-5 h-5" />}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              href={Bio.resume}
              icon={<Download className="w-5 h-5" />}
            >
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-16">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1, color: '#6366f1' }}
                className="text-dark-text-secondary hover:text-white transition-all duration-300 will-change-transform"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Simple Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity will-change-transform"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="w-6 h-6 text-white mt-10" />
      </motion.div>
    </section>
  );
};

export default Hero;
