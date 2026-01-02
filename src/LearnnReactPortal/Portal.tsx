import React, {useState} from 'react'

const Portal = () => {
    const[sw, setSw] = useState(false)
    const handletheme = () => {
        setSw(!sw)
    }


  return (
    <div>
        <h2>make dark and light switch</h2>
        <div>
            {sw ? <p>dark</p> : <p>light</p>}
           <button className='bg-blue-500' onClick={handletheme}>change theme</button>
        </div>
    </div>
  )
}

export default Portal