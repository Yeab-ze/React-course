import React from 'react'

const Rendering = ({isValid}) => {
    const valid = () => <h1 className='text-green-500'>Valid passowrd</h1>
    const inValid = () => <h1 className='text-red-500'>invalid Password</h1>
  return (
    <div>
        {isValid ? valid : inValid}
    </div>
  )
}

export default Rendering 