import React from 'react'
import './Button.css'

//props
interface ButtonProps {
  label?: string
  onClick?: () => void
}

export const Button1: React.FC<ButtonProps> = ({
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className="First"
      {...props}
    >
    {label}
    </button>
  )
}
