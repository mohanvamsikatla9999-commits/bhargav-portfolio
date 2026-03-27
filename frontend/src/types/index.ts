export interface Project {
  id: string
  title: string
  tagline: string
  problem: string
  architecture: string
  tech: string[]
  challenges: string
  outcome: string
  github?: string
  live?: string
  featured?: boolean
}

export interface Skill {
  name: string
  level: number // 0-100
}

export interface SkillCategory {
  label: string
  icon: string
  skills: Skill[]
}

export interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
}

export interface NavItem {
  label: string
  href: string
}
