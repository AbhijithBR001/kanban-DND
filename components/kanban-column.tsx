"use client"

import { useRef } from "react"
import { useDrop } from "react-dnd"
import type { Task } from "@/types/task"
import { TaskCard } from "@/components/task-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface KanbanColumnProps {
  title: string
  status: string
  tasks: Task[]
  onMoveTask: (id: number, newStatus: string) => void
}

export function KanbanColumn({ title, status, tasks, onMoveTask }: KanbanColumnProps) {
  const ref = useRef<HTMLDivElement>(null)

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: { id: number }) => {
      onMoveTask(item.id, status)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  // Apply the drop ref to our ref
  drop(ref)

  return (
    <Card ref={ref} className={`h-full min-h-[500px] ${isOver ? "bg-muted/50" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-sm">{tasks.length}</div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.length === 0 ? (
          <div className="flex items-center justify-center h-20 border border-dashed rounded-md bg-muted/30">
            <p className="text-sm text-muted-foreground">No tasks</p>
          </div>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </CardContent>
    </Card>
  )
}
