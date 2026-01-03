import React, { useEffect, useState } from "react";

const Againfetch = () => {
  //state
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  //fetching data from api
  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Failed to fetch the data from api"); //i put or write text in bracket is message and we use message as later so dont get confusing
      }

      const data = await res.json();
      setUsers(data)
    } catch (err) {
      setError(err.message);
    }
  };

  //useEffect
  useEffect(() => {
    fetchUsers();
  }, []);
  return(
     <>
       <h2 className="text-cyan-500 font-bold">User data from usersapi</h2>
       {error && <p className="text-error-300">{error}</p>}
     {users.map((user) => (
        <p className="text-green-500 font-bold" key={user.id}>{user.email}</p>
     ))}
     </>
  );
};

export default Againfetch;
