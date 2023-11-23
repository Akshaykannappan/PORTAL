import React from 'react'

export default function Parentchildcom() {
  return (
    <div>Parent
            <Child name="Messi"></Child>
    </div>
  )
}
function Child (props){
    return(
        <div>
            <h1>My Name is {props.name}</h1>
        </div>
            )
}
