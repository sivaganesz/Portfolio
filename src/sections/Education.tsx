import React from 'react';
import { educations } from '../data/constants';
import SectionWrapper from '../components/SectionWrapper';
import EducationCard from '../components/EducationCard';

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" title="Education" subtitle="My Academic Background">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {educations.map((edu) => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
