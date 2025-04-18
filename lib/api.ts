import type { Task } from "@/types/task"

// Initial mock data for tasks
const initialMockTasks: Task[] = [
  {
    id: 1,
    title: "Research competitors",
    description: "Analyze top 5 competitors in the market",
    status: "todo",
  },
  {
    id: 2,
    title: "Design landing page",
    description: "Create wireframes for the new landing page",
    status: "inprogress",
  },
  {
    id: 3,
    title: "Fix navigation bug",
    description: "Mobile menu doesn't close when clicking outside",
    status: "inprogress",
  },
  {
    id: 4,
    title: "Write documentation",
    description: "Document the API endpoints for the team",
    status: "done",
  },
  {
    id: 5,
    title: "Setup CI/CD pipeline",
    description: "Configure GitHub Actions for automated testing",
    status: "todo",
  },
]

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Initialize tasks from localStorage or use initial mock data
const initializeTasks = (): Task[] => {
  if (typeof window === "undefined") {
    return initialMockTasks
  }

  const storedTasks = localStorage.getItem("kanban-tasks")
  if (storedTasks) {
    return JSON.parse(storedTasks)
  } else {
    // If no tasks in localStorage, store the initial mock tasks
    localStorage.setItem("kanban-tasks", JSON.stringify(initialMockTasks))
    return initialMockTasks
  }
}

// Get tasks from localStorage
const getTasks = (): Task[] => {
  if (typeof window === "undefined") {
    return initialMockTasks
  }

  const storedTasks = localStorage.getItem("kanban-tasks")
  return storedTasks ? JSON.parse(storedTasks) : []
}

// Save tasks to localStorage
const saveTasks = (tasks: Task[]): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("kanban-tasks", JSON.stringify(tasks))
  }
}

// Fetch all tasks
export async function fetchTasks(): Promise<Task[]> {
  // Simulate API call
  await delay(800)

  // Initialize tasks if needed and return them
  return initializeTasks()
}

// Create a new task
export async function createTask(task: Omit<Task, "id">): Promise<Task> {
  // Simulate API call
  await delay(500)

  const tasks = getTasks()

  // Generate a new ID (in a real app, the server would do this)
  const newId = Math.max(0, ...tasks.map((t) => t.id)) + 1

  const newTask = {
    id: newId,
    ...task,
  }

  // Add to tasks and save to localStorage
  const updatedTasks = [...tasks, newTask]
  saveTasks(updatedTasks)

  return newTask
}

// Update a task
export async function updateTask(id: number, updates: Partial<Task>): Promise<Task> {
  // Simulate API call
  await delay(300)

  const tasks = getTasks()
  const taskIndex = tasks.findIndex((task) => task.id === id)

  if (taskIndex === -1) {
    throw new Error(`Task with id ${id} not found`)
  }

  // Update the task
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...updates,
  }

  // Save updated tasks to localStorage
  saveTasks(tasks)

  return tasks[taskIndex]
}

// Delete a task
export async function deleteTask(id: number): Promise<void> {
  // Simulate API call
  await delay(300)

  const tasks = getTasks()
  const taskIndex = tasks.findIndex((task) => task.id === id)

  if (taskIndex === -1) {
    throw new Error(`Task with id ${id} not found`)
  }

  // Remove the task
  const updatedTasks = tasks.filter((task) => task.id !== id)

  // Save updated tasks to localStorage
  saveTasks(updatedTasks)
}
