# AGENTS.md - Portfolio Project Guidelines

## Project Overview

This is a personal portfolio website built with **React 19**, **TypeScript**, and **Vite**. The project uses CSS modules for styling (via a single stylesheet in `src/style/module.ts`) and `lucide-react` for icons. Data is stored in JSON files in `src/const/`.

## Build, Lint, and Test Commands

```bash
# Development server with hot reload
pnpm run dev

# Production build (type-check + bundle)
pnpm run build

# Type-check only
pnpm run tsc

# Lint all files (uses ESLint with TypeScript and React plugins)
pnpm run lint

# Preview production build locally
pnpm run preview

# Deploy to GitHub Pages
pnpm run predeploy && pnpm run deploy
```

**Note:** There are currently no test files or test commands configured.

## Code Style Guidelines

### Imports and Module Organization

- Use **named exports** for all components (e.g., `export default Hero;`)
- Import external libraries first, then local components
- Group imports with blank lines between groups:
  ```typescript
  import { useState } from "react";
  import { Mail } from "lucide-react";

  import { styles } from "../style/module";
  import Header from "./components/header";
  ```
- Use the `.tsx` extension for React components and `.ts` for utility files
- Keep component files small (under ~200 lines when possible)

### TypeScript Conventions

- Enable **strict mode** (already configured)
- Define explicit types for component props:
  ```typescript
  type Props = {
    activeSection: string;
    onClick?: () => void;
  };
  ```
- Use `null` instead of `undefined` for optional values where appropriate
- Avoid `any` type; use `unknown` or specific types instead
- Use `noUnusedLocals` and `noUnusedParameters` (enabled in tsconfig)

### Naming Conventions

- **Components**: PascalCase (e.g., `Hero`, `NavBar`, `Project`)
- **Files**: camelCase for non-components, kebab-case for constants
- **Variables and functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE for global constants, camelCase otherwise
- **Types and interfaces**: PascalCase with descriptive names
- **CSS classes**: kebab-case (e.g., `hero`, `project-card`, `cta-btn`)

### React Patterns

- Use **functional components** with hooks (no class components)
- Destructure props in the function signature:
  ```typescript
  const Hero = ({ title, subtitle }: HeroProps) => { ... }
  ```
- Prefer `useState` for local state, `useReducer` for complex state
- Use `useEffect` with proper cleanup (remove event listeners):
  ```typescript
  useEffect(() => {
    const handler = () => { ... };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [dependencies]);
  ```
- Use `createPortal` for modals and tooltips (see `project.tsx`)
- Add `loading="lazy"` to images

### Styling

- All CSS is in `src/style/module.ts` as a template string
- Use **CSS classes** for styling, avoid inline styles except for:
  - Dynamic values from props/state
  - One-off positioning for portals
- Follow existing CSS patterns:
  - Flexbox for layout
  - CSS Grid for complex layouts
  - `clamp()` for responsive typography
  - CSS custom properties for colors and spacing
- Use the color palette: primary `#0f62fe`, text `#091024`, muted `#64748b`

### Error Handling

- Use optional chaining and nullish coalescing:
  ```typescript
  const element = document.getElementById(section);
  if (element) { ... }
  const value = obj?.property ?? defaultValue;
  ```
- Avoid try/catch in render paths; handle errors at component boundaries
- Use TypeScript to make invalid states unrepresentable

### File Structure

```
src/
  ├── components/     # React components (navBar, hero, project, etc.)
  ├── const/          # JSON data files (projects.json, skills.json)
  ├── style/          # Global CSS styles
  ├── App.tsx         # Main app component
  └── main.tsx        # Entry point
public/               # Static assets (images)
```

### Additional Guidelines

- **No comments** in code (per project convention)
- Use **Spanish** for visible text (headings, labels, content)
- Use **English** for code identifiers and comments (if any)
- Add `aria-*` attributes for accessibility
- Use `role` attributes for semantic elements (e.g., `role="tooltip"`)
- Follow the existing component patterns in `src/components/`
- Keep components focused: one responsibility per component
- Use `lucide-react` for icons (import by name: `import { Mail } from "lucide-react";`)
