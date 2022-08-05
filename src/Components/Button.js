import { BsChevronRight } from "react-icons/bs"
import React from "react"

const Button = ({text, className}) => {
  return (
    <button className={`text-white flex items-center overflow-hidden px-16 py-4 rounded-sm ${className}`}>
        {text}
        <BsChevronRight className="ml-4"/>
    </button>
  )
}

export default Button