import React from "react";
import { products } from "../assets/assets";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        {products.map((product) => (
          <Child
            key={Math.random()}
             img={product.img}
            name={product.name}
            price={product.price}
            desc={product.desc}
           
          />
        ))}
      </div>
    </div>
  );
};

export default Parent;
