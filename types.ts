export interface ProjectData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  businessPerspective: string;
  technologies: string[];
  workflow: string[];
  analysisAreas: string[];
  accentColor: string;
  githubUrlPlaceholder: string;
  notebookUrlPlaceholder: string;
  datasetInfo: {
    source: string;
    description: string;
    keyAttributes: string[];
  };
  objective: string;
  dataCleaningSteps: string[];
  edaSteps: string[];
  visualizationsCreated: string[];
  keyInsights: string[];
  businessTakeaways: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  badge?: string;
  details?: string;
  coursework?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badgeCode: string;
  iconName: string;
  skillsCovered: string[];
  verifyUrl?: string;
  issueDate?: string;
}

export interface CompactProject {
  title: string;
  categoryTag: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
  icon: string;
  badge?: string;
}
