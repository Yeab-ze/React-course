import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setUsers(data.slice(0, 10));
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>Users</h3>

      {error && <p className="text-red-500 font-bold">{error}</p>}

      {users.map(user => (
        <p key={user.id}>{user.email}</p>
      ))}
    </div>
  );
};

export default FetchData;
