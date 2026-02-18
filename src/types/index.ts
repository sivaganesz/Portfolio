import React from 'react';

export interface SkillItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

export interface SkillCategory {
  id: number;
  title: string;
  skills: SkillItem[];
}

export interface Experience {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  location?: string;
  desc: string;
  skills: string[];
}

export interface Education {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  webapp?: string;
  type?: 'professional' | 'academic';
  member?: { name: string; img: string }[];
}

export type Theme = 'dark' | 'light';

export interface BioType {
  name: string;
  shortName: string;
  roles: string[];
  description: string;
  github: string;
  resume: string;
  linkedin: string;
  twitter: string;
  insta: string;
  email: string;
}
