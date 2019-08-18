import React from 'react'
import "../app.css"


export default function Banner (props) {
  return(
    <div>
    <h1 className={props.className}>{props.fullName}</h1>
    <h2>{props.className}</h2>
    </div>
  )
}