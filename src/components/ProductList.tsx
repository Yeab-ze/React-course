import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
      category: "Electronics",
      inStock: true,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699,
      category: "Electronics",
      inStock: false,
    },
    {
      id: 3,
      name: "Headphones",
      price: 199,
      category: "Accessories",
      inStock: true,
    },
    {
      id: 4,
      name: "Coffee Mug",
      price: 15,
      category: "Home & Kitchen",
      inStock: true,
    },
    {
      id: 5,
      name: "Notebook",
      price: 5,
      category: "Stationery",
      inStock: false,
    },
  ];
  return (
    <div>
      <h1 className="mt-9">procduc practice quetion</h1>
      {products.map((product) => (
        <p key={product.id}>
          {product.category} {product.price} {product.name}
        </p>
      ))}
    </div>
  );
};

export default ProductList;
