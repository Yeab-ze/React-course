import React from 'react'

const UserList = () => {
      const users = [
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
    <div>
        <h1>practice question</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>name:{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default UserList