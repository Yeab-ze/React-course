import React from 'react'
import Login from './Login'

const PasswordInput = () => {
  return (
    <div>
      <Login isLoggedIn={false}/>
    </div>
  )
}

export default PasswordInput









// import { useState } from "react";

// const PasswordInput = () => {
//   const [password, setPassword] = useState("");

//   const isValid = password.length >= 8;

//   return (
//     <div className="space-y-2">
//       <input
//         type="password"
//         placeholder="Enter password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//       {password.length > 0 && (
//         isValid ? (
//           <p className="text-green-500 text-sm">Password is valid</p>
//         ) : (
//           <p className="text-red-500 text-sm">
//             Password must be at least 8 characters
//           </p>
//         )
//       )}
//     </div>
//   );
// };

// export default PasswordInput;
