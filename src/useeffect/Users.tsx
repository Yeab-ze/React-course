import React, { useEffect, useState } from "react";

// debounce helper
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 1️⃣ FETCH DATA (async / await + try catch finally)
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      setUsers(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 2️⃣ useEffect → run once on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // 3️⃣ DELETE USER (filter)
  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  // 4️⃣ FIND USER (example)
  const findUser = (id) => {
    const user = users.find(user => user.id === id);
    alert(user.name);
  };

  // 5️⃣ SEARCH + FILTER
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // 6️⃣ DEBOUNCED SEARCH
  const handleSearch = debounce((value) => {
    setSearch(value);
  }, 500);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Users List</h2>

      <input
        type="text"
        placeholder="Search user..."
        className="border p-2 my-3"
        onChange={(e) => handleSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id} className="border p-2 my-2">
            <p>{user.name}</p>

            <button
              className="bg-red-500 text-white px-2 mr-2"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>

            <button
              className="bg-blue-500 text-white px-2"
              onClick={() => findUser(user.id)}
            >
              Find
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
