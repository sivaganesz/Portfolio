import React from 'react';
import { motion } from 'framer-motion';
import type { SkillItem } from '@/types';

interface SkillBadgeProps {
  skill: SkillItem;
  index?: number;
}

const SkillBadge = ({ skill, index = 0 }: SkillBadgeProps) => {
  const IconComponent = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{
        y: -6,
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="group relative flex flex-col items-center justify-center gap-2
                 p-4 rounded-xl cursor-default
                 bg-light-surface dark:bg-white/5
                 border border-light-border dark:border-white/10
                 shadow-sm dark:shadow-none
                 hover:shadow-md dark:hover:shadow-none
                 hover:border-light-primary/40 dark:hover:border-white/20
                 transition-all duration-300"
      style={{
        // Glow color on hover using brand color
        ['--glow-color' as string]: skill.color,
      } as React.CSSProperties}
    >
      {/* Glow backdrop on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)` }}
      />

      {/* Icon */}
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        {IconComponent ? (
          <IconComponent
            size={36}
            color={skill.color}
            style={{ filter: `drop-shadow(0 0 8px ${skill.color}40)` }}
          />
        ) : (
          // Fallback: colored initial letter
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold font-mono"
            style={{ background: `${skill.color}20`, color: skill.color }}
          >
            {skill.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Name */}
      <span className="relative z-10 text-xs font-mono text-center leading-tight
                       text-light-text-secondary dark:text-gray-400
                       group-hover:text-light-text-primary dark:group-hover:text-white
                       transition-colors duration-300 max-w-[80px] truncate">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillBadge;
