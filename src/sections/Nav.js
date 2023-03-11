import React from "react";
import Link from "next/link";

import { inter } from "@/utils/fonts";

const Nav = () => {
  return (
    <nav
      className={`${inter.className} w-full text-[14px] font-medium  text-[#687288]`}
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

        <div className="flex space-x-2 ">
          <button>Sign In</button>
          <button>Shop</button>
          <button>Cart</button>
        </div>
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
  );
};

export default Nav;
