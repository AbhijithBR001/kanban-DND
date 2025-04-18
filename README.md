# 🧩 Task Management Dashboard

A **Kanban-style task management dashboard** built with Next.js and React DnD.

## 🚀 Features

- View tasks in a Kanban-style board with three columns: **To Do**, **In Progress**, and **Done**
- Create new tasks with title, description, and status
- Drag and drop tasks between columns to update their status
- Responsive design for both mobile and desktop
- Mock API integration 

## 🛠 Tech Stack

- **Next.js 14** with App Router
- **React DnD** for drag and drop functionality
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **TypeScript** for type safety

## 📦 Getting Started

### ✅ Prerequisites

- Node.js 18+
- npm or yarn

### 📥 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/task-management-dashboard.git
cd task-management-dashboard
```

2. **Install dependencies**

```bash
npm install  # or npm i --force
# OR
yarn install
```

3. **Run the development server**

```bash
npm run dev
# OR
yarn dev
```

4. **Open in browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🧾 Project Structure

```
/app            - Next.js App Router pages  
/components     - React components  
  /ui           - Reusable UI components  
  kanban-board.tsx     - Main Kanban board  
  kanban-column.tsx    - Column component  
  task-card.tsx        - Individual task card  
  add-task-dialog.tsx  - Dialog to add new tasks  
/lib            - Utility functions and mock API services  
/types          - TypeScript types
```

## 🌐 Live Demo

Deployed on Vercel: [kanban-dnd-self.vercel.app](https://kanban-dnd-self.vercel.app/)

## 🧱 Architecture & Approach

The project follows a **component-based architecture** with a clear separation of concerns:

1. **UI Components**: Styled using `shadcn/ui` for a consistent look and feel.
2. **Business Logic Components**: E.g., the Kanban board and drag-drop logic.
3. **API Layer**: Mock services to simulate CRUD operations.
4. **State Management**: Managed locally via `useState` and `useEffect`.

React DnD handles the drag and drop operations and updates the task status both in UI and via API calls.

## 📊 Self-Evaluation

### ✅ Summary

This dashboard implements all core features with:

- Clean and responsive design
- Smooth drag and drop UX
- Clear separation of concerns
- Type safety with TypeScript

### 🔍 Self-Criticism

- Lacks persistent storage (data resets on refresh)
- Basic error handling
- No global state management for scaling
- No unit/integration tests

### ⏳ Improvements (with more time)

- Add **Jest + React Testing Library** tests
- Implement data persistence using `localStorage` or `IndexedDB`
- Add features: **task filtering**, **searching**, and **sorting**
- Improve accessibility and keyboard drag support
- Add animations for better UX
- Implement **authentication** and **multi-user** support

## ⭐ Technology Ratings (Out of 10)

| Technology     | Rating |
|----------------|--------|
| Next.js        | 8/10   |
| React          | 8/10   |
| TypeScript     | 7/10   |
| Tailwind CSS   | 8/10   |
| React DnD      | 7/10   |
