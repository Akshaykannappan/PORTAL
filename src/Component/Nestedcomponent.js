import React from 'react';
function Display(){
    return(
        <div>
            <h1>Nestedcomponent</h1>
        </div>
    )
}

export default function Nestedcomponent() {
  return (
    <div>
        <Display />
    </div>
  )
}
