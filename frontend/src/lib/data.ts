import type { Project, SkillCategory, BlogPost, NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'System Design', href: '#system-design' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const PROJECTS: Project[] = [
  {
    id: 'rest-api-platform',
    title: 'Scalable REST API Platform',
    tagline: 'Production-style backend with enterprise patterns',
    problem: 'Most tutorial backends lack real-world concerns like auth, rate limiting, and structured error handling. I built this to simulate a production API.',
    architecture: 'Layered MVC — Controllers handle HTTP, Services contain business logic, Middleware handles cross-cutting concerns (auth, rate limiting, logging).',
    tech: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'JWT', 'Redis'],
    challenges: 'Designing a clean middleware chain that handles auth, rate limiting, and error propagation without coupling layers.',
    outcome: 'A reusable backend template with JWT auth, RBAC, rate limiting, and centralized error handling — deployable in minutes.',
    featured: true,
  },
  {
    id: 'ai-code-reviewer',
    title: 'AI-Powered Code Reviewer',
    tagline: 'Paste code, get intelligent feedback',
    problem: 'Developers often lack immediate feedback on code quality. This tool provides instant AI-driven suggestions.',
    architecture: 'React frontend sends code to a Python NLP service. Suggestions are scored and returned as structured JSON.',
    tech: ['Python', 'NLP', 'React', 'TypeScript', 'FastAPI'],
    challenges: 'Normalizing code across languages for consistent analysis and building a meaningful scoring rubric.',
    outcome: 'A working code analysis tool that identifies anti-patterns, suggests improvements, and scores readability.',
    featured: true,
  },
  {
    id: 'realtime-chat',
    title: 'Real-Time Chat Application',
    tagline: 'WebSocket-powered messaging with presence tracking',
    problem: 'Building real-time features requires understanding event-driven architecture beyond standard HTTP.',
    architecture: 'Socket.io server manages rooms and presence. React client handles optimistic UI updates.',
    tech: ['Node.js', 'Socket.io', 'React', 'TypeScript', 'MongoDB'],
    challenges: 'Handling reconnection logic, message ordering guarantees, and presence state consistency.',
    outcome: 'A fully functional chat app with live messaging, typing indicators, and user presence tracking.',
    featured: true,
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard System',
    tagline: 'API-driven data visualization platform',
    problem: 'Visualizing backend metrics requires a clean data pipeline from API to chart.',
    architecture: 'Express API aggregates data, React frontend renders charts with lazy-loaded components.',
    tech: ['React', 'TypeScript', 'Node.js', 'Chart.js', 'MongoDB'],
    challenges: 'Optimizing aggregation queries and keeping the dashboard performant with large datasets.',
    outcome: 'A responsive dashboard with real-time chart updates, filterable metrics, and clean data flow.',
  },
  {
    id: 'auth-system',
    title: 'Authentication System',
    tagline: 'Security-focused reusable auth module',
    problem: 'Auth is often bolted on as an afterthought. I built it as a standalone, reusable module.',
    architecture: 'JWT-based stateless auth with refresh token rotation, bcrypt hashing, and protected route middleware.',
    tech: ['Node.js', 'TypeScript', 'JWT', 'bcrypt', 'Express'],
    challenges: 'Implementing secure refresh token rotation without introducing race conditions.',
    outcome: 'A plug-and-play auth module with login, signup, token refresh, and route protection.',
  },
  {
    id: 'task-queue',
    title: 'Task Queue / Job Processing System',
    tagline: 'Async background job processing simulation',
    problem: 'Understanding how production systems handle async work like emails, reports, and notifications.',
    architecture: 'In-memory queue with worker pool. Jobs are enqueued, processed asynchronously, and tracked by status.',
    tech: ['Node.js', 'TypeScript', 'Bull', 'Redis'],
    challenges: 'Handling job retries, failure states, and ensuring idempotency across worker runs.',
    outcome: 'A working job queue system with retry logic, status tracking, and worker concurrency control.',
  },
  {
    id: 'db-design',
    title: 'Database Design Project',
    tagline: 'Relational + NoSQL schema architecture',
    problem: 'Most developers treat databases as an afterthought. I studied schema design as a first-class concern.',
    architecture: 'Designed normalized relational schemas for transactional data and document schemas for flexible entities.',
    tech: ['MySQL', 'MongoDB', 'ER Diagrams', 'Indexing'],
    challenges: 'Deciding when to normalize vs. denormalize and designing indexes for query performance.',
    outcome: 'A documented set of schemas with ER diagrams, index strategies, and query optimization notes.',
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 70 },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'REST API Design', level: 83 },
      { name: 'Middleware Architecture', level: 78 },
    ],
  },
  {
    label: 'Frontend',
    icon: '◻',
    skills: [
      { name: 'React', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Responsive UI', level: 78 },
    ],
  },
  {
    label: 'Databases',
    icon: '⬡',
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 72 },
    ],
  },
  {
    label: 'Core CS',
    icon: '∑',
    skills: [
      { name: 'Data Structures & Algorithms', level: 78 },
      { name: 'DBMS', level: 72 },
      { name: 'Operating Systems', level: 68 },
      { name: 'Computer Networks', level: 65 },
    ],
  },
  {
    label: 'Advanced Concepts',
    icon: '⚡',
    skills: [
      { name: 'JWT Authentication', level: 82 },
      { name: 'API Rate Limiting', level: 75 },
      { name: 'Error Handling Patterns', level: 80 },
      { name: 'MVC Architecture', level: 83 },
      { name: 'Caching Basics', level: 65 },
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How I Built a Scalable REST API',
    excerpt: 'Walking through the architecture decisions behind a production-style Node.js API — from middleware design to error handling patterns.',
    date: 'Mar 2025',
    readTime: '8 min read',
    slug: 'scalable-rest-api',
  },
  {
    title: 'Understanding JWT Authentication',
    excerpt: 'A deep dive into how JWT works, why stateless auth matters, and how to implement refresh token rotation securely.',
    date: 'Feb 2025',
    readTime: '6 min read',
    slug: 'jwt-authentication',
  },
  {
    title: 'My DSA Journey: 200+ Problems Later',
    excerpt: 'What I learned solving 200+ DSA problems — the patterns that matter, the ones that don\'t, and how it changed how I think about code.',
    date: 'Jan 2025',
    readTime: '5 min read',
    slug: 'dsa-journey',
  },
]
