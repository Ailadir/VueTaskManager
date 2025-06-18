# Vue Task Manager

A modern task management application built with Vue 3, TypeScript, and Vuex. The app provides a clean interface for managing tasks with features like adding, completing, and filtering tasks, all while maintaining state persistence.

**Demo:** [Deployed on Vercel](https://vue-task-manager-5my5.vercel.app/)

## Features

- Task management with create, read, update, and delete operations
- Task status toggling (complete/incomplete)
- Filter tasks by status (all, active, completed)
- Persistent storage with API integration
- TypeScript support for better development experience
- Modern UI with Vue 3
- State management with Vuex 4
- Responsive and mobile-friendly design

## Technologies

- Vue 3
- TypeScript
- Vuex 4 for state management
- Vite for build tooling
- ESLint + Prettier for code quality

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ailadir/VueTaskManager.git
cd VueTaskManager
```

### 2. Install dependencies

```bash
yarn install
# or
npm install
```

### 3. Run the development server

```bash
yarn dev
# or
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app.

### 4. Build and preview for production

```bash
yarn build && yarn preview
# or
npm run build && npm run preview
```

## API Integration

The application uses a RESTful API for task management operations:
- GET /tasks - Fetch all tasks
- POST /tasks - Create a new task
- PUT /tasks/:id - Update task status
- DELETE /tasks/:id - Remove a task

## Deployment

- Easily deployable to [Vercel](https://vercel.com/) or any static hosting service.

## Folder Structure

```
src/
  api/            # API integration for tasks
  components/     # Vue components
  store/          # Vuex store configuration
  views/          # Page components
  types/          # TypeScript type definitions
public/           # Static assets
```

## Code Quality

```bash
# Lint code
yarn lint
# or
npm run lint

# Format code
yarn format
# or
npm run format
```

## IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) is recommended for the best development experience.

## TypeScript Support

This project uses TypeScript for enhanced development experience. The project is configured to handle `.vue` files with TypeScript through `vue-tsc` for type checking. Make sure to use [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) in your editor for proper TypeScript support.

---

## Author

[Araz Schwarz]
