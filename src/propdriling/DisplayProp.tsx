import React from 'react'
import Propdriling from './Propdriling'

const DisplayProp = () => {
  const user = 'yeabsira getachew'
  return (
    <div>
      <h2>Display components</h2>
      <Propdriling user={user}/>
    </div>
  )
}

export default DisplayProp