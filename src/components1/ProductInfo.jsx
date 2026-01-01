import React from "react";
import { product, card, button, images } from "../assets/style";

const ProductInfo = () => {
  return (
    <>
      <div className="grid grid-cols md:grid-cols-3">
        <div className={card}>
          <img src={images.img1} alt="" />
          <h1>name:-{product.name}</h1>
          <h1>price:--{product.price}</h1>
          <h1>description:--{product.descr}</h1>
          <button className={button}>add to cart</button>
        </div>

        <div className={card}>
          <img src={images.img2} alt="" />

          <h1>name:-{product.name}</h1>
          <h1>price:--{product.price}</h1>
          <h1>description:--{product.descr}</h1>
          <button className={button}>add to cart</button>
        </div>

        <div className={card}>
          <img src={images.img3} alt="" />

          <h1>name:-{product.name}</h1>
          <h1>price:--{product.price}</h1>
          <h1>description:--{product.descr}</h1>
          <button className={button}>add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
