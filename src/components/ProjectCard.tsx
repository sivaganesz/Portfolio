import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import type { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project }, ref) => {
    const isProfessional = project.type === 'professional';

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -10 }}
        className={`relative group bg-white/5 dark:bg-white/5 rounded-3xl overflow-hidden border backdrop-blur-md flex flex-col h-full transition-all duration-500 ${isProfessional
          ? 'border-dark-primary/30 hover:border-dark-primary/60 shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]'
          : 'border-white/10 hover:border-dark-secondary/40'
          }`}
      >
        {/* Hover Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="flex gap-3 w-full">
            {/* Bottom Right Code Button */}
            {project.github && (
              <div className={`absolute bottom-4 ${project.webapp ? 'right-16' : 'right-4'} z-20`}>
                <Button
                  href={project.github}
                  size="sm"
                  variant="primary"
                  className="!p-3 !rounded-full"
                  icon={<Github className="w-4 h-4" />} />
              </div>
            )}
            {project.webapp && (
              <div className="absolute bottom-4 right-4 z-20">
                <Button
                  href={project.webapp}
                  size="sm"
                  variant="outline"
                  className="!p-2.5 !rounded-full"
                  icon={<ExternalLink className="w-4 h-4" />} />
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow relative z-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-dark-text-secondary text-[10px] font-mono uppercase tracking-tight">
              <Calendar className="w-3.5 h-3.5 text-dark-primary" />
              {project.date}
            </div>

            {isProfessional ? (
              <Briefcase size={14} className="text-dark-primary/50" />
            ) : (
              <GraduationCap size={14} className="text-white/20" />
            )}
          </div>

          <h3
            className={`text-xl font-bold mb-3 transition-colors ${isProfessional
              ? 'text-white group-hover:text-dark-primary'
              : 'text-dark-text-primary group-hover:text-dark-secondary'
              }`}
          >
            {project.title}
          </h3>

          <p className="text-dark-text-secondary text-sm line-clamp-4 mb-6 flex-grow leading-relaxed italic">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[9px] font-mono px-2.5 py-1 rounded-lg border transition-colors ${isProfessional
                  ? 'bg-dark-primary/5 border-dark-primary/10 text-dark-primary/80 group-hover:border-dark-primary/30'
                  : 'bg-white/5 border-white/10 text-dark-text-secondary'
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;