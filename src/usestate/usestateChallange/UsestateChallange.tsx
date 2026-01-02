import React from 'react'
import { useState } from 'react'
const UsestateChallange = () => {
    const [likes, setLikes] = useState(0)

    const handleLike = () => {
        setLikes(pre => pre + 1)
    }
  return (
    <div>
        <h2 onClick={handleLike} className='cursor-pointer'>❤️ like</h2>
        <button>like {likes}</button>
    </div>
  )
}

export default UsestateChallange