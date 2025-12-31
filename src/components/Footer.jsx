import React from 'react'

const Footer = () => {
    let name = 'yeabsira'
    let father = 'getachew'
    let multiple =(a,b) =>  a * b
    
  return (
    <div>
        {/* <h1>footer</h1>
        <p>&copy; 2025 this is footer</p> */}
        <h1>user nameL {name} {father}</h1>  {/* we must put expression in { } */}

        {/* <h1>friends: {['friend', ' martha']}</h1> */}
        <p>{multiple(2,4)}</p>
    </div>
  )
}

export default Footer