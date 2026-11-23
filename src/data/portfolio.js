import owner from '../../owner.json';

const iconSlugs = {
  JavaScript: 'javascript',
  Python: 'python',
  React: 'react',
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

const displayNames = {
  'express.js': 'Express.js',
  express: 'Express.js',
  fastapi: 'FastAPI',
  flask: 'Flask',
  linux: 'Linux',
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
  return { name: displayName, icon: iconSlugs[displayName] ?? displayName.toLowerCase() };
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




