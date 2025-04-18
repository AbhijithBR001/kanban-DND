"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface AddTaskButtonProps {
  onClick: () => void
}

export function AddTaskButton({ onClick }: AddTaskButtonProps) {
  return (
    <Button onClick={onClick}>
      <Plus className="mr-2 h-4 w-4" />
      Add New Task
    </Button>
  )
}
