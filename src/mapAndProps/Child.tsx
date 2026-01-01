import React from 'react'

const Child = ({name,desc,price,img}) => {
  return (
    <>
        <div className="border rounded-md shadow-lg p-3">
            <img src={img} alt="" />
            <h1 className="text-xl text-blue-500">{name}</h1>
            <p className='text-pink-800'>{price}</p>
            <p className='text-pink-800'>{desc}</p>
        </div>
    </>
  )
}

export default Child