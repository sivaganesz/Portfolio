// import React from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, GraduationCap } from 'lucide-react';
// import type { Education } from '../types';
// import CompanyAvatar from './CompanyAvatar';

// interface EducationCardProps {
//   education: Education;
// }

// const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10 hover:border-dark-primary/30 transition-all duration-300 relative overflow-hidden backdrop-blur-md"
//     >
//       {/* Grade Badge */}
//       <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-dark-primary/10 border border-dark-primary/20 text-dark-primary font-bold text-xs">
//         {education.grade}
//       </div>

//       <div className="flex-shrink-0">
//         <CompanyAvatar name={education.school} img={education.img} size={70} />
//       </div>

//       <div className="flex flex-col flex-grow">
//         <div className="flex flex-col mb-3">
//           <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary group-hover:text-dark-primary transition-colors pr-20">
//             {education.school}
//           </h3>
//           <div className="flex items-center gap-1.5 text-dark-primary font-medium mt-1">
//             <GraduationCap className="w-4 h-4" />
//             {education.degree}
//           </div>
//         </div>

//         <div className="flex items-center gap-1.5 text-xs font-mono text-dark-text-secondary mb-4">
//           <Calendar className="w-3.5 h-3.5 text-dark-primary" />
//           {education.date}
//         </div>

//         <p className="text-dark-text-secondary text-sm leading-relaxed italic">
//           {education.desc}
//         </p>
//       </div>

//       {/* Decorative Glow */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-dark-primary/20 to-transparent pointer-events-none transition-opacity duration-500" />
//     </motion.div>
//   );
// };

// export default EducationCard;

import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin } from 'lucide-react';
import type { Education } from '../types';

interface Props {
  education: Education;
}

const EducationCard: React.FC<Props> = ({ education }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative p-8 rounded-xl border border-light-border dark:border-white/10 bg-light-surface dark:bg-white/5 backdrop-blur-sm shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-none hover:border-light-primary/25 dark:hover:bg-dark-primary/10 transition-all duration-300 overflow-hidden"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Top Section: Logo + Degree */}
        <div className="flex items-start gap-4 mb-6">
          {education.img && (
            <img
              src={education.img}
              alt={education.school}
              className="w-14 h-14 object-contain rounded-md border border-light-border dark:border-white/10 bg-light-surface2 dark:bg-white/10 p-2"
            />
          )}

          <div>
            <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-1">
              {education.degree}
            </h3>

            <p className="text-sm text-dark-text-secondary">
              {education.school}
            </p>
          </div>
        </div>

        {/* Year + Grade */}
        <div className="flex gap-2 text-sm mb-4">
          <span className="text-dark-text-secondary">
            {education.date}
          </span>

          <div className="flex items-center gap-1 text-dark-primary font-medium">
            <Award className="w-4 h-4" />
            {education.grade}
          </div>
        </div>

        {/* City */}
        <div className="flex items-center gap-2 text-xs text-dark-text-secondary">
          <MapPin className="w-3.5 h-3.5 text-dark-primary" />
          {education.city}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;