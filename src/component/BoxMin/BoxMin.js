import style from './BoxMin.module.css'

import React from 'react'

function BoxMin({children}) {
  return (
    <div className={style.boxmin}>{children}</div>
  )
}

export default BoxMin