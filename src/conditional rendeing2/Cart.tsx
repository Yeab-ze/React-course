import React from 'react'

const Cart = () => {
    const items = ['wepriceb', 'thivuxs', 'andweb', 'why', 'vwhyux', 'price']
  return (
    <div>
        <h1>cart 🛒</h1>
        {items.length > 0 && <h2>you have {items.length} items in your cart</h2>}
        {/* && in conditional rendering it show only if its true */}

        <h1>procucts list</h1>
        <ul>
            {items.map((item)=>(
                <li key={Math.random()}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Cart