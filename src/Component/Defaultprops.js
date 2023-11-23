import React from 'react'

export default function Defaultprops(props) {
  return (
    <div>
      <h1>Hi this is {props.name} and i am studying at{props.college}</h1>
    </div>
  )
}
Defaultprops.defaultProps={college:"SKCET"}