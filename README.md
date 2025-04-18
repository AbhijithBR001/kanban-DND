# Task Management Dashboard

A Kanban-style task management dashboard built with Next.js and React DnD.

## Features

- View tasks in a Kanban-style board with three columns: To Do, In Progress, and Done
- Create new tasks with title, description, and status
- Drag and drop tasks between columns to update their status
- Responsive design that works on mobile and desktop
- Mock API integration for CRUD operations

## Tech Stack

- Next.js 14 with App Router
- React DnD for drag and drop functionality
- Tailwind CSS for styling
- shadcn/ui for UI components
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/task-management-dashboard.git
cd task-management-dashboard
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install // npm i --force
# or
yarn install
\`\`\`

3. Start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/app` - Next.js app router pages
- `/components` - React components
  - `/ui` - Reusable UI components
  - `kanban-board.tsx` - Main Kanban board component
  - `kanban-column.tsx` - Column component for each status
  - `task-card.tsx` - Individual task card component
  - `add-task-dialog.tsx` - Dialog for adding new tasks
- `/lib` - Utility functions and API services
- `/types` - TypeScript type definitions

## Architecture and Approach

This project follows a component-based architecture with a clear separation of concerns:

1. **UI Components**: Reusable UI components from shadcn/ui for consistent design
2. **Business Logic Components**: Components that handle specific business logic like the Kanban board
3. **API Layer**: Mock API service that simulates backend interactions
4. **State Management**: React's useState and useEffect hooks for local state management

The drag and drop functionality is implemented using React DnD, which provides a clean abstraction for handling drag and drop operations. When a task is dragged to a new column, the application updates the task's status both in the UI and through an API call.

## Self-Evaluation

### Summary

This task management dashboard successfully implements all the required features with a clean, responsive design. The application provides a smooth user experience with immediate UI updates and proper error handling. The code is well-structured with a clear separation of concerns and type safety through TypeScript.

The good aspects include the intuitive drag and drop interface, responsive design, and clean component architecture. The mock API implementation simulates real-world backend interactions while keeping the project client-side only.

### Self-Criticism

Some areas that could be improved:

1. The state management is simple and works for this application, but for a larger application, a more robust solution like React Context or Redux might be beneficial.
2. Error handling could be more comprehensive with better user feedback.
3. The mock API implementation is basic and doesn't persist data between page refreshes.
4. There's no unit or integration testing implemented.

### Improvements with More Time

With more time, I would:

1. Add comprehensive testing with Jest and React Testing Library
2. Implement data persistence using localStorage or IndexedDB
3. Add more features like task filtering, searching, and sorting
4. Improve accessibility with better keyboard navigation for drag and drop
5. Add animations for smoother transitions when tasks move between columns
6. Implement user authentication and multi-user support

### Technology Rating (out of 10)

- Next.js: 8/10
- React: 8/10
- TypeScript: 7/10
- Tailwind CSS: 8/10
- React DnD: 7/10
#   k a n b a n - D N D  
 