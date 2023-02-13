import style from'./Box.module.css'
import React from 'react'

function Box({children}) {
  return (
    <div className={style.box}>{children}</div>
  )
}

export default Box