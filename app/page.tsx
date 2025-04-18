"use client"

import { useState, useEffect } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { KanbanBoard } from "@/components/kanban-board"
import { AddTaskButton } from "@/components/add-task-button"
import { AddTaskDialog } from "@/components/add-task-dialog"
import type { Task } from "@/types/task"
import { fetchTasks, createTask, updateTask } from "@/lib/api"

export default function TaskDashboard() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [dndKey, setDndKey] = useState(0)

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks()
        setTasks(data)
      } catch (error) {
        console.error("Failed to fetch tasks:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadTasks()
  }, [])

  const handleAddTask = async (newTask: Omit<Task, "id">) => {
    try {
      const createdTask = await createTask(newTask)
      setTasks((prevTasks) => [...prevTasks, createdTask])
      setIsAddTaskOpen(false)
      // Increment dndKey to force a refresh of DndProvider
      setDndKey(prev => prev + 1)
    } catch (error) {
      console.error("Failed to create task:", error)
    }
  }

  const handleMoveTask = async (id: number, newStatus: string) => {
    const taskToUpdate = tasks.find((task) => task.id === id)

    if (!taskToUpdate) return

    const updatedTask = { ...taskToUpdate, status: newStatus }

    try {
      await updateTask(id, { status: newStatus })
      setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? updatedTask : task)))
    } catch (error) {
      console.error("Failed to update task:", error)
    }
  }

  const refreshTasks = async () => {
    try {
      const data = await fetchTasks()
      setTasks(data)
    } catch (error) {
      console.error("Failed to refresh tasks:", error)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Task Management Dashboard</h1>
        <AddTaskButton onClick={() => setIsAddTaskOpen(true)} />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg">Loading tasks...</p>
        </div>
      ) : (
        <DndProvider backend={HTML5Backend}  key={dndKey}>
          <KanbanBoard tasks={tasks} onMoveTask={handleMoveTask} />
        </DndProvider>
      )}

      <AddTaskDialog
        open={isAddTaskOpen}
        onOpenChange={setIsAddTaskOpen}
        onAddTask={handleAddTask}
        onRefreshColumns={refreshTasks} // Pass the refresh function
      />
    </div>
  )
}