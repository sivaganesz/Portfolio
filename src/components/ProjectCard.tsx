import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import type { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(({ project }, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group bg-white/5 dark:bg-white/5 rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 backdrop-blur-md flex flex-col h-full hover:border-dark-primary/30 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-4">
            <Button
              href={project.github}
              size="sm"
              variant="primary"
              icon={<Github className="w-4 h-4" />}
            >
              GitHub
            </Button>
            {project.webapp && (
              <Button
                href={project.webapp}
                size="sm"
                variant="outline"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-dark-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
          {project.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-dark-text-secondary text-xs mb-3 font-mono uppercase tracking-tighter">
          <Calendar className="w-3.5 h-3.5 text-dark-primary" />
          {project.date}
        </div>
        <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary mb-3 group-hover:text-dark-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-dark-text-secondary text-sm line-clamp-3 mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/10 dark:bg-white/5 border border-white/10 text-dark-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
