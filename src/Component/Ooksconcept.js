import React, { useState } from 'react'

export default function Ooks() {
    const[college,setCollege]=useState("SKCET")
  return (
    <div>
        <h1>my college is {college}</h1>
        <button onClick={()=>setCollege("ATRIA")}>click me</button>
    </div>
  )
}
