import { ReactNode } from "react"
import clsx from "clsx"

type CardProps = {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={clsx(className, "shadow-md p-3 rounded-sm")}>
      {children}
    </div>
  )
}
