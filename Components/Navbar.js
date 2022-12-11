import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <header className="text-gray-600 body-font border-b-2 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-2xl font-bold text-blue-800">Hunting_Coder</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center list-none space-x-8">
              <Link href={"/"}><li>Home</li></Link> 
              <Link href={"/blog"}><li>blog</li></Link>
              <Link href={"/about"}><li>About</li></Link>
              <Link href={"/contact"}><li>Contact</li></Link>
            </nav>
            <button className="inline-flex items-center bg-blue-700 text-white rounded-xl font-semibold border-0 py-2 px-7 focus:outline-none hover:bg-blue-800 text-base mt-4 md:mt-0"><Link href={"/login"}>Log in</Link></button>
        </div>
    </header>
  )
}

export default Navbar