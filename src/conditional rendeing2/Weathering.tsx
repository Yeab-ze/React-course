import React from 'react'

const Weathering = () => {
  const temp = 11;

       if(temp < 15) {
         return  <h1>its cold outside</h1>
       } else if (temp >= 15 && temp <= 25){
         return <h1>it good at outside</h1>
       } else {
        return <h1>its too hot outside</h1>
       }
 
 
}

export default Weathering