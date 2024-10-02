import { title } from "@/components/primitives";

export default function LoginPage() {
  return (
    <div className="w-4/5 mx-auto border rounded-md shadow-md p-6">
      {/* Title */}
      <h1 className={title({ color: "violet" })}>Login</h1>

      {/* Login Form */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mt-4">
          Please enter your credentials to access AgriRelief.
        </h2>

        {/* Form Fields */}
        <form className="mt-6">
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-violet-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block  font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-violet-500"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none"
            >
              Login
            </button>
            <a href="#" className="text-violet-600 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>

        {/* Social Login Buttons */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-center">Or login with</h3>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
              Login with Google
            </button>
            <button className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 focus:outline-none">
              Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
