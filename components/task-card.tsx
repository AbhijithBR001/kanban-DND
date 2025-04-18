"use client"

import { useRef } from "react"
import { useDrag } from "react-dnd"
import type { Task } from "@/types/task"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "task",
      item: { id: task.id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [task.id],
  ) // Add dependency array with task.id to ensure it updates when task changes

  // Apply the drag ref to our ref
  drag(ref)

  const statusColors = {
    todo: "bg-blue-100 text-blue-800",
    inprogress: "bg-yellow-100 text-yellow-800",
    done: "bg-green-100 text-green-800",
  }

  return (
    <Card ref={ref} className={`cursor-grab ${isDragging ? "opacity-50" : ""}`}>
      <CardHeader className="p-3 pb-1">
        <CardTitle className="text-sm font-medium">{task.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        {task.description && (
          <CardDescription className="text-xs mt-1 line-clamp-2">{task.description}</CardDescription>
        )}
        <div className="flex justify-between items-center mt-3">
          <Badge variant="outline" className={statusColors[task.status as keyof typeof statusColors]}>
            {task.status === "todo" ? "To Do" : task.status === "inprogress" ? "In Progress" : "Done"}
          </Badge>
          <span className="text-xs text-muted-foreground">#{task.id}</span>
        </div>
      </CardContent>
    </Card>
  )
}
