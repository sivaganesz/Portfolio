import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Terminal, Download, Sparkles, Code, Rocket } from 'lucide-react';
import { Bio } from '../data/constants';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import profileImg from '/portfolio.webp';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 text-dark-primary" />,
      title: 'Frontend Developer',
      desc: 'Crafting pixel-perfect, responsive UIs with React and Tailwind.'
    },
    {
      icon: <Terminal className="w-6 h-6 text-dark-secondary" />,
      title: 'Backend Developer',
      desc: 'Building robust APIs and scalable microservices with Node.js and Go.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-dark-accent" />,
      title: 'ML Enthusiast',
      desc: 'Exploring deep learning and computer vision to solve real-world problems.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-dark-primary" />,
      title: 'AI Tools & Agents',
      desc: 'Fast-forwarding development with AI coding assistants and autonomous workflows.'
    }
  ];

  return (
    <SectionWrapper id="about" title="About Me" subtitle="Who I Am">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Image/Illustration */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center items-center lg:-mt-16"
          >
            {/* Main Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dark-primary/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-10px] rounded-full border border-dashed border-dark-secondary/20 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Image Wrapper */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/10 shadow-glow bg-dark-surface p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-dark-primary/20 to-dark-secondary/20 flex items-center justify-center">
                  <img
                    src="/portfolio-350.webp"
                    srcSet="/portfolio-350.webp 350w, /portfolio-700.webp 700w"
                    sizes="(max-width: 768px) 100vw, 350px"
                    alt={Bio.name}
                    width={350}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 right-0 md:right-10 glass p-3 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center text-yellow-400">
                <Code size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold dark:text-white">Full Stack</span>
                <span className="text-[10px] text-dark-text-secondary">Developer</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 left-0 md:left-10 glass p-3 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-lg bg-dark-accent/20 flex items-center justify-center text-dark-accent">
                <Rocket size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold dark:text-white">Fast & Modern</span>
                <span className="text-[10px] text-dark-text-secondary">UI/UX Solutions</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              { label: 'Years Exp', value: '1+' },
              { label: 'Projects', value: '4+' },
              { label: 'Tech Stacks', value: '2+' },
            ].map((stat, idx) => (
              <div key={idx} className="glass p-4 rounded-2xl border border-white/5 text-center flex flex-col items-center justify-center gap-1 group hover:border-dark-primary/30 transition-colors">
                <span className="text-2xl font-extrabold text-white font-mono group-hover:text-dark-primary transition-colors">{stat.value}</span>
                <span className="text-[10px] font-mono text-dark-text-secondary uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
              Dedicated to delivering <span className="text-dark-primary">high-quality</span> results.
            </h3>
            <p className="text-dark-text-secondary text-lg leading-relaxed">
              {Bio.description}
            </p>
            <p className="text-dark-text-secondary text-lg leading-relaxed">
              I specialize in the MERN stack, NestJS, and Go. My journey in tech is driven by a constant curiosity to learn and implement the latest industry standards to build efficient applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-5 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="mb-3">{item.icon}</div>
                <h4 className="font-bold text-light-text-primary dark:text-dark-text-primary mb-1">{item.title}</h4>
                <p className="text-sm text-dark-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <Button
              variant="primary"
              size="md"
              href={Bio.resume}
              icon={<Download className="w-4 h-4" />}
            >
              Download My CV
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
