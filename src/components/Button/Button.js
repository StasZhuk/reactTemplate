import React from "react"
import cn from "classnames"

import "./Button.scss"

const Button = ({
  title = "button",
  type = "text",
  width = "",
  defaultStyle = "",
  isDisabled = null,
  onClick = () => {},
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type={type}
      className={cn("button", {
        [`--${width}`]: width,
        [`--${defaultStyle}`]: defaultStyle,
      })}
    >
      <span>{title}</span>
    </button>
  )
}

export default Button
