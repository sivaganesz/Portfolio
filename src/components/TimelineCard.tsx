import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import type { Experience } from '../types';
import CompanyAvatar from './CompanyAvatar';

interface TimelineCardProps {
  experience: Experience;
  isLeft: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ experience, isLeft }) => {
  return (
    <div className={`flex w-full mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center justify-center relative`}>
      {/* Connector Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-primary shadow-[0_0_10px_#6366f1] z-10 hidden md:block" />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`w-full md:w-[45%] group glass p-6 rounded-2xl relative border border-white/10 hover:border-dark-primary/30 transition-all duration-300 ${
          isLeft ? 'md:mr-auto' : 'md:ml-auto'
        }`}
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <CompanyAvatar name={experience.company} img={experience.img} size={50} />
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary group-hover:text-dark-primary transition-colors">
              {experience.role}
            </h3>
            <span className="text-dark-text-secondary font-medium">{experience.company}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-xs font-mono text-dark-text-secondary mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-dark-primary" />
            {experience.date}
          </div>
          {experience.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-dark-primary" />
              {experience.location}
            </div>
          )}
        </div>

        <p className="text-dark-text-secondary text-sm mb-6 leading-relaxed">
          {experience.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="text-[10px] font-mono px-2 py-1 rounded-md bg-dark-primary/10 border border-dark-primary/20 text-dark-primary"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Indicator Arrow */}
        <div className={`absolute top-6 ${isLeft ? '-right-2' : '-left-2'} w-4 h-4 glass border-white/10 rotate-45 hidden md:block border-t border-r`} />
      </motion.div>
    </div>
  );
};

export default TimelineCard;
