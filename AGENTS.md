# AGENTS.md - Portfolio Project Guidelines

## Project Overview

Personal portfolio website built with **React 19**, **TypeScript**, and **Vite**. Uses CSS modules via a single stylesheet in `src/style/module.ts`, `lucide-react` for icons, and JSON files in `src/const/` for data.

## Build, Lint, and Test Commands

```bash
# Development server with hot reload
pnpm run dev

# Production build (runs type-check + bundle via tsc -b && vite build)
pnpm run build

# Type-check only (no bundle)
pnpm run build

# Lint all files
pnpm run lint

# Lint a specific file
pnpm run lint -- src/App.tsx

# Preview production build locally
pnpm run preview

# Deploy to GitHub Pages
pnpm run predeploy && pnpm run deploy
```

**Note:** No test files or test commands configured.

## TypeScript Configuration

- Strict mode enabled (`strict: true`)
- Target: ES2022
- `noUnusedLocals: true` - fail on unused local variables
- `noUnusedParameters: true` - fail on unused function parameters
- `erasableSyntaxOnly: true` - only allow syntax that can be erased during transpilation
- `verbatimModuleSyntax: true` - imports/exports must use `type` keyword for type-only

## Code Style Guidelines

### Imports and Module Organization

- Use **named exports** for all components (e.g., `export default Hero;`)
- Import order: external libraries → `lucide-react` → internal imports
- Group imports with blank lines between groups:
  ```typescript
  import { useState } from "react";
  import { Mail, Github } from "lucide-react";

  import { styles } from "../style/module";
  import Header from "./components/header";
  ```
- Use `.tsx` for React components, `.ts` for utilities
- Keep components under ~200 lines when possible

### TypeScript Conventions

- Define explicit `type Props = { ... }` for component props
- Use `null` instead of `undefined` for optional values
- Avoid `any`; use `unknown` or specific types
- Use `Readonly<T>` for immutable data
- Prefer interfaces for object shapes, types for unions/primitives

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `Hero`, `NavBar`, `Project` |
| Files (components) | PascalCase | `Hero.tsx`, `NavBar.tsx` |
| Files (utils) | camelCase | `helpers.ts`, `utils.ts` |
| Constants | UPPER_SNAKE_CASE | `MAX_ITEMS`, `API_URL` |
| Types/Interfaces | PascalCase | `ProjectData`, `SkillProps` |
| CSS classes | kebab-case | `hero`, `project-card`, `cta-btn` |

### React Patterns

- Functional components only (no class components)
- Destructure props in function signature:
  ```typescript
  type Props = { title: string; subtitle?: string };
  const Hero = ({ title, subtitle }: Props) => { ... }
  ```
- Use `useState` for local state, `useReducer` if complex
- Always clean up side effects in `useEffect`:
  ```typescript
  useEffect(() => {
    const handler = () => { ... };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  ```
- Use `createPortal` for modals/tooltips (see `project.tsx`)
- Add `loading="lazy"` to all `<img>` tags
- Memoize callbacks passed to child components when needed

### Styling

- All CSS in `src/style/module.ts` as template literal
- Use CSS classes, avoid inline styles except for:
  - Dynamic values from props/state
  - Portal positioning
- CSS patterns: Flexbox (layout), CSS Grid (complex), `clamp()` (responsive typography)
- CSS custom properties for colors/spacing
- Color palette: primary `#0f62fe`, text `#091024`, muted `#64748b`

### Error Handling

- Optional chaining and nullish coalescing:
  ```typescript
  const element = document.getElementById(section);
  if (element) { ... }
  const value = obj?.property ?? defaultValue;
  ```
- Handle errors at component boundaries, not in render paths
- Use TypeScript to make invalid states unrepresentable

## File Structure

```
src/
├── components/     # React components (header, hero, project, etc.)
├── const/          # JSON data (projects.json, skills.json)
├── context/        # React context providers (theme.tsx)
├── style/          # CSS module.ts
├── App.tsx         # Root component
└── main.tsx        # Entry point
public/            # Static assets (images)
```

## Additional Guidelines

- **No comments** in code
- Visible text in **Spanish** (headings, labels, content)
- Code identifiers and comments in **English**
- Add `aria-*` attributes for accessibility
- Use `role` attributes for semantic elements
- Use `lucide-react` icons: `import { Mail } from "lucide-react";`
- One responsibility per component
