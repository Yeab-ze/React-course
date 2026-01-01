import React from 'react'

const Login = ({isLoggedIn}) => {
  return (
    <div>
      <button
      className={`px-4 py-2 rounded-md ${isLoggedIn ? 'bg-green-500' : 'bg-red-500'}`}
      >
        {isLoggedIn ? 'Logout' : 'login'}
      </button>
    </div>
  )
}

export default Login









// import PasswordInput from "./PasswordInput";

// const Login = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-96 border rounded-lg p-6 shadow-md">
//         <h1 className="text-xl font-semibold mb-4">Login</h1>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border rounded-md p-2 mb-4"
//         />

//    <PasswordInput/>
//         <button
//           disabled
//           className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md opacity-50 cursor-not-allowed"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

