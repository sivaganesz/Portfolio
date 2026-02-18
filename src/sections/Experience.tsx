import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/constants';
import SectionWrapper from '../components/SectionWrapper';
import TimelineCard from '../components/TimelineCard';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Work Experience" subtitle="My Journey">
      <div className="relative flex flex-col items-center">

        
        {/* Currently Working Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-12 bg-dark-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold shadow-glow mb-12 md:mb-0 z-20 tracking-widest"
        >
          PRESENT
        </motion.div>
        
        {/* Central Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute left-1/2 -translate-x-1/2 top-4 bottom-0 w-px bg-gradient-to-b from-dark-primary via-dark-secondary/50 to-transparent hidden md:block opacity-30"
        />

        {/* Experience List */}
        <div className="w-full mt-4 md:mt-0">
          {experiences.map((exp, index) => (
            <TimelineCard 
              key={exp.id} 
              experience={exp} 
              isLeft={index % 2 === 0} 
            />
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Experience;
