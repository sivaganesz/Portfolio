import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/constants';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web app', 'ml'];

  const filteredProjects = projects.filter((project) => 
    filter === 'all' ? true : project.category.toLowerCase() === filter.toLowerCase()
  );

  return (
    <SectionWrapper id="projects" title="Featured Work" subtitle="My Projects">
      <div className="flex flex-col gap-10">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-xl font-bold transition-all duration-300 capitalize ${
                filter === category
                  ? 'bg-dark-primary text-white shadow-glow'
                  : 'text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary bg-white/5 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 opacity-50">
            <span className="text-xl font-mono">No projects found for this category.</span>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
