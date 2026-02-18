import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { Heart, Send } from 'lucide-react';
import { Bio } from '../data/constants';
import { scrollToSection } from '../utils/helpers';
import Button from './Button';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <SiGithub size={20} />,   href: Bio.github,   label: "GitHub" },
    { icon: <SiLinkedin size={20} />, href: Bio.linkedin, label: "LinkedIn" },
    { icon: <FaXTwitter size={20} />, href: Bio.twitter,  label: "Twitter/X" },
    { icon: <SiInstagram size={20} />,href: Bio.insta,    label: "Instagram" },
  ];

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
  ];

  return (
    <footer className="relative bg-white/5 dark:bg-dark-bg/80 border-t border-white/10 backdrop-blur-xl pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Left Col */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dark-primary to-dark-secondary flex items-center justify-center font-bold text-white text-xl">
              SG
            </div>
            <span className="text-xl font-display font-extrabold text-light-text-primary dark:text-dark-text-primary">
              {Bio.name}
            </span>
          </div>
          <p className="text-dark-text-secondary text-sm max-w-sm leading-relaxed">
            Building digital experiences that combine modern technology with exceptional design. Let's create something amazing together.
          </p>
          <div className="flex gap-4 mt-2">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#6366f1' }}
                className="text-dark-text-secondary transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Center Col */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold text-light-text-primary dark:text-dark-text-primary">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-dark-text-secondary text-sm hover:text-dark-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-dark-primary/50 group-hover:w-3 transition-all" />
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Col */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold text-light-text-primary dark:text-dark-text-primary">Let's Connect</h4>
          <p className="text-dark-text-secondary text-sm">
            Have a project in mind? Reach out and let's discuss how I can help.
          </p>
          <Button
            href={`mailto:${Bio.email}`}
            variant="outline"
            size="md"
            icon={<Send className="w-4 h-4" />}
            className="w-fit mt-2"
          >
            Say Hello
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-dark-text-secondary">
        <p>© {new Date().getFullYear()} {Bio.shortName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
