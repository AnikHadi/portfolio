import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { PostData, setCookie } from "../../utils";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    // Add login logic here
    setLoading(true);
    const data = {
      email,
      password,
    };
    const url = "https://portfolio-server-rose-psi.vercel.app/admin";
    const res = await PostData(url, data);
    setCookie("accessToken", `Berar ${res.accessToken}`, 1);
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl text-black font-bold mb-6 text-center">
          Admin Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter email address..."
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <div className="flex items-center ">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow  bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 pr-3 flex items-center text-sm "
              >
                {showPassword ? (
                  <FaRegEye className="text-slate-600" />
                ) : (
                  <FaRegEyeSlash className="text-slate-600" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                loading
                  ? "bg-slate-500 cursor-wait"
                  : "bg-blue-500 hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? <span className=""> Sign In ...</span> : " Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
