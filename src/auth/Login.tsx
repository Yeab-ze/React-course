import PasswordInput from "./PasswordInput";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 border rounded-lg p-6 shadow-md">
        <h1 className="text-xl font-semibold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md p-2 mb-4"
        />

   <PasswordInput/>
        <button
          disabled
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md opacity-50 cursor-not-allowed"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
