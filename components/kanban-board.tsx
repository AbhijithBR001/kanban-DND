"use client"

import type { Task } from "@/types/task"
import { KanbanColumn } from "@/components/kanban-column"

interface KanbanBoardProps {
  tasks: Task[]
  onMoveTask: (id: number, newStatus: string) => void
}

export function KanbanBoard({ tasks, onMoveTask }: KanbanBoardProps) {
  const columns = [
    { id: "todo", title: "To Do", status: "todo" },
    { id: "inprogress", title: "In Progress", status: "inprogress" },
    { id: "done", title: "Done", status: "done" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          title={column.title}
          status={column.status}
          tasks={tasks.filter((task) => task.status === column.status)}
          onMoveTask={onMoveTask}
        />
      ))}
    </div>
  )
}
