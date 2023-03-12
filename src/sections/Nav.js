import React, { useState } from "react";
import Link from "next/link";

import { inter } from "@/utils/fonts";

const Nav = () => {

  const [navbar, setNavbar] = useState(false)
  const [subNavbar, setSubNavbar] = useState(false)

  function showNavbar() {
    setNavbar(!navbar)
    setSubNavbar(false)
  }

  function showSubNavbar() {
    setSubNavbar(!subNavbar)
    setNavbar(false)
  }

  return (
    <header className="text-[#6B7280]">
      <nav
        className={`${inter.className} w-full text-[14px] font-medium  text-[#687288] hidden lg:block`}
      >
        <div className="border-1 flex w-full justify-between border-b-2 px-5">
          <div className="flex py-5">
            <p className="mr-8">Telemed.xyz</p>
            <ul className="flex space-x-4">
              <li>
                {" "}
                <Link href="/">Product</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="/">Business Type</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="/">Why Telemed.xyz</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="/">Pricing</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="/">Resources</Link>{" "}
              </li>
            </ul>
          </div>


          <ul className="flex items-center space-x-2 ">
            <li> <Link href=''>Sign In</Link> </li>
            <li> <Link href=''>Shop</Link> </li>
            <li> <Link href=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            </Link> </li>
          </ul>

        </div>
        <div className="border-1 flex items-center justify-between border-b-2 px-5 py-2">
          <p>Telemedicine</p>
          <ul className="flex items-center space-x-2">
            <li>
              {" "}
              <Link href="/"> Overview </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> KDS </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> Features </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> Pricing </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> Integrations </Link>{" "}
            </li>
            <li className="rounded border-[1px]  border-[#656EB3] px-2 py-3 text-[#656EB3]">
              {" "}
              <Link href="/"> Get started</Link>{" "}
            </li>
            <li className="rounded border-[1px]  border-[#656EB3] px-2 py-3 text-[#656EB3]">
              {" "}
              <Link href="/"> Contact sales </Link>{" "}
            </li>
          </ul>
        </div>
      </nav>

      <nav className="block lg:hidden">
        <div className="relative flex justify-between items-center py-8 px-4 border-solid border-b-2">
          <p>Telemed.xyz</p>
          <div className="flex space-x-4">
            <Link href=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg></Link>
            <button onClick={showNavbar}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
          </div>

          {
            navbar && <div className="absolute left-0 top-full w-full bg-white z-10 shadow-xl">
              <ul className="flex flex-col items-center justify-center space-y-4 py-4">
                <li>
                  {" "}
                  <Link href="/">Product</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/">Business Type</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/">Why Telemed.xyz</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/">Pricing</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/">Resources</Link>{" "}
                </li>
              </ul>
            </div>
          }

        </div>

        <div className="relative flex justify-between items-center py-8 px-4">
          <p>Telemedicine</p>
          <button onClick={showSubNavbar}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg></button>

          {
            subNavbar && <div className="absolute left-0 top-full w-full bg-white z-10 shadow-xl">
              <ul className="flex flex-col items-center justify-center space-y-4 py-4">
                <li>
                  {" "}
                  <Link href="/"> Overview </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/"> KDS </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/"> Features </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/"> Pricing </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/"> Integrations </Link>{" "}
                </li>
                <li className="rounded border-[1px]  border-[#656EB3] px-2 py-3 text-[#656EB3]">
                  {" "}
                  <Link href="/"> Get started</Link>{" "}
                </li>
                <li className="rounded border-[1px]  border-[#656EB3] px-2 py-3 text-[#656EB3]">
                  {" "}
                  <Link href="/"> Contact sales </Link>{" "}
                </li>
              </ul>

            </div>
          }


        </div>

      </nav>
    </header>

  );
};

export default Nav;
