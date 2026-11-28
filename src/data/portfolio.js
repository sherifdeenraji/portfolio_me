import owner from '../../owner.json';

const iconSlugs = {
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  Python: 'python',
  React: 'react',
  'Next.js': 'nextjs',
  'Express.js': 'express',
  FastAPI: 'fastapi',
  Flask: 'flask',
  MongoDB: 'mongodb',
  PostgreSQL: 'postgresql',
  Git: 'git',
  Docker: 'docker',
  Postman: 'postman',
  'VS Code': 'visual-studio-code',
  Cursor: 'cursor',
  Linux: 'linux',
};

// devicons.io has no linux.svg (404), so Linux loads from the canonical Devicon CDN.
const iconUrlOverrides = {
  Linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
};

// Icons drawn only in dark greys; dark theme inverts them to stay legible.
const darkInvertIcons = new Set(['Express.js', 'Cursor', 'Next.js']);

const displayNames = {
  'express.js': 'Express.js',
  express: 'Express.js',
  fastapi: 'FastAPI',
  flask: 'Flask',
  linux: 'Linux',
  nextjs: 'Next.js',
  'next.js': 'Next.js',
  typescript: 'TypeScript',
  postgresql: 'PostgreSQL',
  mongodb: 'MongoDB',
  vscode: 'VS Code',
  cursor: 'Cursor',
};

const rawSkills = [
  ...owner.languages,
  ...owner.frameworks,
  ...owner.database,
  ...owner.tools,
];

export const profile = owner;

export const skills = [...new Set(rawSkills.map((rawName) => {
  const cleanedName = rawName.replaceAll("'", '').trim();
  const displayName = displayNames[cleanedName.toLowerCase()] ?? cleanedName;
  const slug = iconSlugs[displayName] ?? displayName.toLowerCase();
  return {
    name: displayName,
    iconUrl: iconUrlOverrides[displayName] ?? `https://devicons.io/devicons/icons/${slug}.svg`,
    darkInvert: darkInvertIcons.has(displayName),
  };
}))];

const projectDetails = {
  balotly: { type: 'Election platform' },
  brandboard: { type: 'Banner generation service' },
};

export const projects = owner.projects.map((project) => {
  const slug = project.name.toLowerCase();
  return {
    ...project,
    name: slug === 'brandboard' ? 'Brandboard' : project.name,
    className: slug,
    symbol: slug === 'brandboard' ? 'dashboard' : 'north_east',
    ...(projectDetails[slug] ?? {}),
  };
});
