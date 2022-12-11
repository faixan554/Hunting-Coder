import React from "react";

function Signup() {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col py-20">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="bg-gray-100 bg-opacity-50 mb-4 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            name="firstname"
            placeholder="First Name"
          />
          <input
            type="text"
            className="bg-gray-100 bg-opacity-50 mb-4 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            name="fullname"
            placeholder="Last Name"
          />

          <input
            type="text"
            className="bg-gray-100 bg-opacity-50 mb-4 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="bg-gray-100 bg-opacity-50 mb-4 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="bg-gray-100 bg-opacity-50 mb-4 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="w-full text-center py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>
          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default Signup;
