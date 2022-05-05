import React from 'react';
import Link from 'next/link';

const Signup = () => {
  return (
    <div>
      <div className="mt-28 md:mt-32 h-[30vw] flex items-center justify-center">
        <div className="login border-2 border-pink-500 hover:border-pink-700 rounded-md p-14 w-[40vw]">
          <h1 className="font-bold text-3xl text-center text-pink-400">
            Create Your Account
          </h1>
          <div className="text-center text-sm text-gray-600">
            <Link href={'/login'}>
              <p className="font-medium cursor-pointer text-pink-600 hover:text-pink-500">
                Or Login
              </p>
            </Link>
          </div>
          <form action="#" method="POST" className="mx-auto my-4">
            <div className="px-2">
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2">
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="px-2">
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <button className="w-[100%] mr-1 text-white bg-pink-500 border-0 py-2 px-10 focus:outline-none hover:bg-pink-600 rounded text-sm">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
