# Repository Guidelines

## Project Structure & Module Organization

The portfolio uses React and Vite. `src/App.jsx` composes the page; `src/components/` contains the header, hero, toolkit marquee, project cards, contact section, and footer. `src/data/portfolio.js` formats profile content from `owner.json`. `src/styles.css` contains the shared responsive design system. `index.html` provides metadata and font loading; `ui.md` describes the visual direction, and `sketch.png` is the layout reference.

## Build, Test, and Development Commands

Run commands with npm from the repository root:

- `npm install` installs dependencies.
- `npm run dev` starts the Vite development server.
- `npm run build` creates the production bundle in `dist/`.
- `npm run preview` serves the production bundle locally.

No test framework is configured.

## Coding Style & Naming

Keep React components focused and split page sections into files under `src/components/`. Keep editable profile and project content in `owner.json` and `src/data/portfolio.js`. Use descriptive PascalCase component names and camelCase functions/data. Follow `ui.md`: use the primary, secondary, and accent color roles, Source Code Pro for body text, Agrave Pro for headings (configured in `src/styles/fonts.css`), Devicons for technology marks, Simple Icons for social links, and minimal motion. Load the profile image from `public/profile.jpg`. Keep semantic HTML, visible keyboard focus, reduced-motion support, and responsive layouts.

## Testing Guidelines

There is no automated test setup. For UI changes, inspect mobile and desktop layouts and verify project, email, and social links. Document any added test command here.

## Commits & Pull Requests

No Git history is available to establish conventions. Use concise commit subjects. Pull requests should summarize visitor-facing changes, link related work when relevant, and include screenshots for visual updates.

## Profile Data & Configuration

Treat `owner.json` as the source for profile and project links. Keep claims accurate and avoid committing secrets.


