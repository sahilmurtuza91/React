# Copilot Instructions for This React Workspace

This monorepo contains multiple React projects, each using different build tools and conventions. Follow these guidelines to maximize productivity and maintain consistency when working as an AI coding agent in this codebase.

## Project Structure

- `01basicreact/` and `selfUnderstanding/mylearning/`: Bootstrapped with **Create React App**. Use standard CRA scripts for development, testing, and builds.
- `01vitereact/` and `selfUnderstanding/vitereactlearning/`: Use **Vite** for fast React development. ESLint is configured; plugins for Babel and SWC are available.
- `customReact/`: Contains custom React-like implementations (e.g., `CustomReact.js`). Use for experiments or learning, not production.

## Key Workflows

- **Start Dev Server (CRA):**
  - `npm start` (in project dir)
  - Opens at [http://localhost:3000](http://localhost:3000)
- **Run Tests (CRA):**
  - `npm test` (interactive watch mode)
- **Build for Production (CRA):**
  - `npm run build` (outputs to `build/`)
- **Start Dev Server (Vite):**
  - `npm run dev` (in Vite-based project)
- **Build for Production (Vite):**
  - `npm run build` (outputs to `dist/`)

## Conventions & Patterns

- **Component Files:**
  - Use `.js`/`.jsx` for CRA, `.jsx` for Vite projects.
  - Entry points: `src/index.js` (CRA), `src/main.jsx` (Vite).
- **ESLint:**
  - Vite projects have ESLint config (`eslint.config.js`).
  - TypeScript is recommended for production, but not enforced.
- **Custom Implementations:**
  - `customReact/CustomReact.js` is for educational or experimental code, not for app features.

## Integration & Dependencies

- **External Plugins:**
  - Vite projects may use `@vitejs/plugin-react` (Babel) or `@vitejs/plugin-react-swc` (SWC) for Fast Refresh.
- **No enforced monorepo tooling:**
  - Each project manages its own dependencies and scripts.

## Examples

- To add a new component in `01basicreact`, place it in `src/` and import in `App.js`.
- To update ESLint rules for Vite projects, edit `eslint.config.js` in the respective folder.

## References

- See each project's `README.md` for more details on scripts and conventions.
- For custom React logic, review `customReact/CustomReact.js`.

---

**When in doubt, follow the conventions of the specific project folder you are working in.**
