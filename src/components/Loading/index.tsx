"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface LoadingProps {
  value?: number
  isLoading: boolean
  className?: string
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>>(
  ({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
)

Progress.displayName = ProgressPrimitive.Root.displayName

// Componente de loading
const Loading: React.FC<LoadingProps> = ({ isLoading, value = 0, className }) => {
  if (!isLoading) return null

  return (
    <div className={cn("flex justify-center items-center", className)}>
      <Progress value={value} />
    </div>
  )
}

export default Loading
