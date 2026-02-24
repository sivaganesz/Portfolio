import { useState, useEffect } from 'react';

export const useTypingEffect = (roles: string[], speed = 150, deleteSpeed = 50, delay = 2000) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentRole(prev => fullRole.substring(0, prev.length - 1));
        if (currentRole === '') {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      } else {
        setCurrentRole(prev => fullRole.substring(0, prev.length + 1));
        if (currentRole === fullRole) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex, roles, speed, deleteSpeed, delay]);

  return currentRole;
};
