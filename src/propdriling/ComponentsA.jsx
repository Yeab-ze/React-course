import React from 'react'
import ComponentsB from './ComponentsB' 


const ComponentsA = ({username}) => {
  return (
    <div>
      <p>Component A</p>
      <ComponentsB username={username} />
    </div>
  )
}

export default ComponentsA