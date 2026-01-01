import React from 'react'

const PropsApi = ({name, price}) => {
  return (
    <div>
        <p>{name}--${price}</p>
    </div>
  )
}

export default PropsApi