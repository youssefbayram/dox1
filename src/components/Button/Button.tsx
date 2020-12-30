import React from 'react'
import CSS from 'csstype'

//Styling for button
const h1Styles: CSS.Properties = {
    padding:'0.46em 1.6em',
    border:'0.1em solid #000000',
    margin:'0 0.2em 0.2em 0',
    borderRadius:'0.12em',
    fontFamily:'monospace',
    fontWeight:400,
    fontSize: '15px',
    color:'#FFFFFF',
    textShadow: '0 0.04em 0.04em rgba(0,0,0,0.35)',
    backgroundColor:'#ff414d',
    textAlign:'center',
    width:'150px'
}

//props
export interface ButtonProps {
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const Button1: React.FC<ButtonProps> = ({
  size='medium',
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`].join(' ')}
      style={h1Styles}
      {...props}
    >
    {label}
    </button>
  )
}
