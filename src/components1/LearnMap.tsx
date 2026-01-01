import React from "react";
import { product } from "../assets/style";
import { userInfo } from "os";

const LearnMap = () => {
  const products = [
    { id: 1, name: "changed", price: 999 },
    { id: 2, name: "Phone", price: 699 },
    { id: 3, name: "Headphones", price: 199 },
  ];

  const userInfos = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 25,
      city: "New York",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      age: 30,
      city: "Los Angeles",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      age: 22,
      city: "Chicago",
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "diana@example.com",
      age: 28,
      city: "Houston",
    },
    {
      id: 5,
      name: "Ethan Hunt",
      email: "ethan@example.com",
      age: 35,
      city: "San Francisco",
    },
  ];

  return (
    <>
      <h2 className="text-2xl text-blue-500 font-bold">learn Map and slice</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <h2 className="text-2xl text-blue-500 font-bold">User info</h2>

      <ul>
        {userInfos.map(({id,age,city,email,name}) => (
          <li key={id}>{city}</li>
        ))}
      </ul>
    </>
  );
};

export default LearnMap;
