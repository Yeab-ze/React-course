import React from 'react'
import { button } from '../assets/style'

const clicHandle = () => {
    alert('u click a lot of time')
}

const Button = () => {
    return <button onClick={clicHandle} className='bg-blue-500 cursor-pointer text-white'>click me</button>
};


const EventHandling = () => {
  return (
    <div><Button/></div>
  )
}

export default EventHandling