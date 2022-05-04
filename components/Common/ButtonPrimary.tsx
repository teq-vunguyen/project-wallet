import React from 'react'

interface Props {
  text: string
  isActive?: boolean
  css?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonPrimary: React.FC<Props> = (props) => {
  const { text, isActive, onClick, css } = props
  return (
    <button className={`btn-primary ${isActive ? 'btn-primary_active' : ''} ${css}`} onClick={onClick}>
      {text}
    </button>
  )
}
export default ButtonPrimary
