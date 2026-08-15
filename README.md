# Gibson Nichol — Portfolio

This repository is a production-ready personal portfolio built with React and Vite. The site is designed to present Gibson Nichol as a software engineering internship candidate for Summer 2027.

Features
- Modern, dark-first responsive design
- Tailwind CSS for utility-first styling
- Framer Motion for subtle animations
- Accessible navigation, keyboard focus states, and reduced-motion support

Quickstart

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Project structure

- `index.html` — page metadata, fonts, and structured data
- `src/` — React source files
  - `components/` — UI components (Navbar, Hero, Projects, etc.)
  - `data/` — content (projects, experience, skills)
  - `App.jsx`, `main.jsx` — app entry
- `public/` — static assets (place resume here)

Resume and assets
- Place your resume at `public/Gibson_Nichol_Resume.pdf` to enable the download button.
- Add high-quality project thumbnails to `public/media/` as needed.

Deployment

This project is compatible with Vercel. Link the repository and use the default Vite build command `npm run build`. Make sure `public/` contains `Gibson_Nichol_Resume.pdf` and any media assets.

Customization
- Edit content in `src/data/projects.js`, `src/data/experience.js`, and `src/data/skills.js`.
- Update colors and fonts in `tailwind.config.cjs` and `src/index.css`.

Accessibility & Performance
- Respect `prefers-reduced-motion` and provide keyboard focus outlines
- Minimal dependencies and optimized fonts for fast loads
