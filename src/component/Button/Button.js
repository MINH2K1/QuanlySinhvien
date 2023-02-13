import React from 'react'
import style from'./Button.module.css'
import clsx from 'clsx'
function Button({color,className,children}) {
  return (
    <div className={clsx(style.button,className)} style={{backgroundColor:`${color}`}}>{children}</div>
  )
}
export default Button