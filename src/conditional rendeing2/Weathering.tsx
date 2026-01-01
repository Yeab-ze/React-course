import React from 'react'

const Weathering = () => {
  const temp = 11;

       if(temp < 15) {
         return  <h2>its cold outside</h2>
       } else if (temp >= 15 && temp <= 25){
         return <h2>it good at outside</h2>
       } else {
        return <h2>its too hot outside</h2>
       }
 
 
}

export default Weathering