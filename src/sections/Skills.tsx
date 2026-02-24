import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/constants';
import SectionWrapper from '../components/SectionWrapper';
import SkillBadge from '../components/SkillBadge';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skills[0].id);

  const activeCategory = skills.find((category) => category.id === activeTab) || skills[0];

  return (
    <SectionWrapper id="skills" title="Tech Stack" subtitle="My Skills">
      <div className="flex flex-col gap-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 relative">
          {skills.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`relative px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                activeTab === category.id
                  ? 'text-white'
                  : 'text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary bg-white/5 border border-white/10'
              }`}
            >
              <span className="relative z-10">{category.title}</span>
              {activeTab === category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-dark-primary to-dark-secondary rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {activeCategory.skills.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Background Grid Pattern */}
          <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
