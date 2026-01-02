import React, {useEffect, useState} from 'react'

const BasicEffect = () => {
    const [count, segCount] = useState(0)
    // useEffect(() => {
    //   console.log('this message from useeffect components')
    // }, [])
    
    useEffect(() => {
     document.title = `count ${count}`;
    }, [count])
  return (
    <div>
        <button onClick={() => segCount(count + 1)}>count</button>
    </div>
  )
}

export default BasicEffect