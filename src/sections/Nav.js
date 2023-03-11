import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
	<nav className="font-medium text-[#687288] text-[14px]  w-full ">
          <div className="flex justify-between w-full border-1 border-b-2 px-5">
            <div className="flex py-5">
              <p className="mr-8">Telemed.xyz</p>
              <ul className="flex space-x-4">
                <li>
                  {' '}
                  <Link href="/">Product</Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link href="/">Business Type</Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link href="/">Why Telemed.xyz</Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link href="/">Pricing</Link>{' '}
                </li>
                <li>
                  {' '}
                  <Link href="/">Resources</Link>{' '}
                </li>
              </ul>
            </div>

            <div className="space-x-2 flex ">
              <button>Sign In</button>
              <button>Shop</button>
              <button>Cart</button>
            </div>
          </div>
          <div className="flex items-center justify-between border-1 border-b-2 px-5 py-2">
            <p>Telemedicine</p>
            <ul className="flex items-center space-x-2">
              <li>
                {' '}
                <Link href="/"> Overview </Link>{' '}
              </li>
              <li>
                {' '}
                <Link href="/"> KDS </Link>{' '}
              </li>
              <li>
                {' '}
                <Link href="/"> Features </Link>{' '}
              </li>
              <li>
                {' '}
                <Link href="/"> Pricing </Link>{' '}
              </li>
              <li>
                {' '}
                <Link href="/"> Integrations </Link>{' '}
              </li>
              <li className="px-2 py-3  border-[1px] rounded border-[#656EB3] text-[#656EB3]">
                {' '}
                <Link href="/"> Get started</Link>{' '}
              </li>
              <li className="px-2 py-3  border-[1px] rounded border-[#656EB3] text-[#656EB3]">
                {' '}
                <Link href="/"> Contact sales </Link>{' '}
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default Nav