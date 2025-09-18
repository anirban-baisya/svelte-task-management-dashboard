# Task Management Dashboard

## Project Overview
A modern, responsive Task Management Dashboard built with Svelte 5, TypeScript, and Tailwind CSS. It allows users to create, edit, delete, filter, and reorder tasks via drag-and-drop with an intuitive, accessible UI supporting light/dark mode.

**Live Demo:**  
[https://fabulous-cassata-7afec6.netlify.app/](https://fabulous-cassata-7afec6.netlify.app/)

***

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/anirban-baisya/svelte-task-management-dashboard.git
   cd svelte-task-management-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser to view the app.

***

## Component Hierarchy & Usage

- **TaskForm**: Form for creating and editing tasks (title, description, status).
- **FilterBar**: Buttons to filter tasks by status (all, pending, in-progress, completed).
- **TaskCard**: Displays individual task info, with Edit/Delete buttons and drag handle.
- **TaskEditModal**: Modal dialog to edit an existing task using TaskForm internally.
- **ConfirmationDialog**: Modal confirmation for task deletions.
- **DarkModeToggle**: Toggle switch to enable light/dark themes.
- **Main Page (+page.svelte)**: 
  - Houses the main layout with TaskForm + FilterBar and Task list.
  - Implements drag-and-drop reordering with `sortablejs`.
  - Manages state and task data with Svelte stores.

***

## Testing & Building

- To run tests use:
  ```bash
  npm run test
  ```
- To build for production:
  ```bash
  npm run build
  ```
- The build outputs static assets to `/build` for deployment on platforms such as Vercel or Netlify.

***

## Design & Technical Decisions

- **Svelte 5 & Reactive Stores**: Chosen for efficient reactivity and minimal bundle size, enabling a simple state management model with stores.
- **Tailwind CSS**: Utility-first styling for rapid UI development, consistent spacing, and easy dark mode support.
- **Drag-and-Drop with SortableJS**: Provides intuitive task reordering with minimal setup while staying in sync with reactive stores.
- **Dark Mode**: Uses `dark:` variants in Tailwind, toggled via a CSS class on `<html>`, for a seamless light/dark experience.
- **Component Modularity**: Each UI piece isolated for reusability, easy testing, and maintainability.
- **TypeScript**: Strong typing improves code safety and developer experience.

## Demo

For a fully interactive demo, visit:  
[https://fabulous-cassata-7afec6.netlify.app/](https://fabulous-cassata-7afec6.netlify.app/)
