import { TypedObject } from "sanity";

export interface PortableTextBlock extends TypedObject {
  _type: string;
  children?: {
    _type: string;
    text: string;
  }[];
}

export interface SanityImage {
  url: string;
  alt?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle?: string;
}

export interface TechItem {
  tech: string;
  category?: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  summary: PortableTextBlock[];
  description?: TypedObject[];
  challenge?: TypedObject[];
  solution?: TypedObject[];
  impact?: TypedObject[];
  role?: string;
  client?: string;
  duration?: string;
  accentColor?: string;
  isFeatured: boolean;
  layoutSize?: 'small' | 'medium' | 'large';
  stack: TechItem[];
  projectLinks?: {
    live?: string;
    github?: string;
  };
  gallery?: SanityImage[];
}

export interface Profile {
  name: string;
  tagline: string;
  bio: TypedObject[];
  location: string;
  email: string;
  avatarUrl?: string;
  socials: SocialLink[];
  openToWork: boolean;
  resumeUrl?: string;
}

export interface Experience {
  _id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  location: string;
  description: TypedObject[];
  highlights?: string[];
  stack?: string[];
  order: number;
}

export interface Homepage {
  title: string;
  heroSection: {
    heading: string;
    subheading: string;
  };
  featuredProjects: Project[];
}
