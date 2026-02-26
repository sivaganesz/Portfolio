import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { projects } from '../data/constants';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'professional' | 'academic'>('professional');

  const categories = [
    { id: 'all', name: 'All Work', icon: null },
    { id: 'professional', name: 'Professional', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'academic', name: 'Academic', icon: <GraduationCap className="w-4 h-4" /> },
  ];

  const professionalProjects = projects.filter(p => p.type === 'professional');
  const academicProjects = projects.filter(p => p.type === 'academic');

  const displayedProjects = projects.filter((project) =>
    filter === 'all' ? true : project.type === filter
  );

  return (
    <SectionWrapper id="projects" title="Portfolio" subtitle="My Work">
      <div className="flex flex-col gap-16">

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${filter === cat.id
                ? 'bg-dark-primary text-white shadow-glow scale-105'
                : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-white bg-light-surface2 dark:bg-white/5 border border-light-border dark:border-white/10'
                }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dynamic Project Layout */}
        <div className="flex flex-col gap-20">

          {/* Professional Section */}
          {(filter === 'all' || filter === 'professional') && (
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-dark-primary/10 text-dark-primary">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-light-text-primary dark:text-white">Professional Projects</h3>
                  <p className="text-sm text-dark-text-secondary font-mono">Enterprise-grade systems & real-time deployments</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-dark-primary/30 to-transparent ml-4 hidden md:block" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {professionalProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Academic Section */}
          {(filter === 'all' || filter === 'academic') && (
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-dark-secondary/10 text-dark-secondary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-light-text-primary dark:text-white">Academic & Personal</h3>
                  <p className="text-sm text-dark-text-secondary font-mono">Foundational learning & experimental builds</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-dark-secondary/30 to-transparent ml-4 hidden md:block" />
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {academicProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}

        </div>

        {displayedProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 opacity-50">
            <span className="text-xl font-mono text-white">No projects found.</span>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
