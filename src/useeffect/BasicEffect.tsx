import React, {useEffect} from 'react'

const BasicEffect = () => {
    useEffect(() => {
      console.log('this message from useeffect components')
    }, [])
    
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect