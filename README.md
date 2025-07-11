# AyanaDev Landing Page

A modern landing page built with SvelteKit, TypeScript, and Tailwind CSS.

## Technologies Used

- **SvelteKit** - Full-stack web framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run type checking
- `npm run check:watch` - Run type checking in watch mode

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte
│   └── +page.svelte
├── app.css
├── app.d.ts
└── app.html
```

## Building for Production

To create a production build:

```bash
npm run build
```

The built application will be in the `build` directory. 