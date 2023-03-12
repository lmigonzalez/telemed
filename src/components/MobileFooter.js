import React, { useState } from "react";
import Link from "next/link";
const MobileFooter = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <div>
      <ul className="space-y-1">
        <li className="flex w-full items-center justify-center bg-[#656EB3] py-6 text-white">
          <Link href=""> Quick Service </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </li>
        <li className="flex w-full items-center justify-center bg-[#656EB3] py-6 text-white">
          <Link href=""> Full Service </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </li>
        <li className="flex w-full items-center justify-center bg-[#656EB3] py-6 text-white">
          <Link href=""> Fast Casual </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </li>
        <li className="flex w-full items-center justify-center bg-[#656EB3] py-6 text-white">
          <Link href=""> Bars & Breweries </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </li>
        <li className="flex w-full items-center justify-center bg-[#656EB3] py-6 text-white">
          <Link href="">Ghost Kitchens </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </li>
      </ul>
      <div className="mt-8 flex  w-full items-center justify-center bg-white text-center">
        <p className="">
          Looking for a basic mobile setup?{" "}
          <a href={""} className=" text-[#656EB3]">
            {" "}
            <br />
            Try Square Point of Sale.
          </a>
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center">
        <button
          onClick={() => setShowProducts(!showProducts)}
          className="mb-6 flex text-xl"
        >
          Products{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        {showProducts && (
          <ul className="mb-6 flex flex-col items-center justify-center space-y-4">
            <li>
              {" "}
              <Link href=""> Commerce</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Point of sale</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Payments</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Online</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Invoices</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Customers</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Marketing</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Loyalty</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Customer Directory</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Banking</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Staff</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Payroll</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Team Management</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Buy Now, Pay Later</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Hardware</Link>
            </li>
          </ul>
        )}

        <button
          onClick={() => setShowBusiness(!showBusiness)}
          className="mb-6 flex text-xl"
        >
          Business Types{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        {showBusiness && (
          <ul className="mb-6 flex flex-col items-center justify-center space-y-4">
            <li>
              {" "}
              <Link href=""> Food & Beverage</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Quick Service </Link>
            </li>
            <li>
              {" "}
              <Link href=""> Full Service</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Fast Casual</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Bars & Breweries</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Retail</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Beauty Salon</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Hair Salon</Link>
            </li>
            <li>
              {" "}
              <Link href=""> Health & Fitness </Link>
            </li>
            <li>
              {" "}
              <Link href="">Professional Services</Link>
            </li>
            <li>
              {" "}
              <Link href="">Home & Repair</Link>
            </li>
            <li>
              {" "}
              <Link href="">Large Businesses</Link>
            </li>
          </ul>
        )}

        <button
          onClick={() => setShowResources(!showResources)}
          className="mb-6 flex text-xl"
        >
          Resources{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        {showResources && (
          <ul className="mb-6 flex flex-col items-center justify-center space-y-4">
            <li>
              {" "}
              <Link href="">Pricing</Link>
            </li>
            <li>
              {" "}
              <Link href="">Why Square </Link>
            </li>
            <li>
              {" "}
              <Link href="">Testimonials</Link>
            </li>
            <li>
              {" "}
              <Link href="">Blog</Link>
            </li>
            <li>
              {" "}
              <Link href="">Sales</Link>
            </li>
            <li>
              {" "}
              <Link href="">Support</Link>
            </li>
            <li>
              {" "}
              <Link href="">Seller Community</Link>
            </li>
            <li>
              {" "}
              <Link href="">Developer Platform</Link>
            </li>
            <li>
              {" "}
              <Link href="">Merchant Services</Link>
            </li>
            <li>
              {" "}
              <Link href="">Rent Hardware</Link>
            </li>
          </ul>
        )}

        <button
          onClick={() => setShowContact(!showContact)}
          className="mb-6 flex text-xl"
        >
          Contact{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        {showContact && (
          <ul className="flex flex-col items-center justify-center space-y-4">
            <li>
              {" "}
              <Link href="">Customer support: 1 (855) 700-6000</Link>
            </li>
            <li>
              {" "}
              <Link href="">Sales: 1 (800) 470-1673</Link>
            </li>
          </ul>
        )}

        <button
          onClick={() => setShowProducts(!showProducts)}
          className="mb-6 flex text-xl"
        >
          Telemed.xyz{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>

      <div className="m-auto mt-24 flex w-[1200px] max-w-full items-center justify-between border-y-2 border-solid py-8 px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <p>United States (English)</p>
        </div>

        <div className="flex space-x-2">
          <img src={'twitter-svgrepo-com.svg'} width={20} />
          <img src={'facebook-svgrepo-com.svg'} width={20} />
          <img src='instagram-svgrepo-com.svg' width={20} />
        </div>
      </div>
      <p className="mt-4 mb-12 text-center">© 2023 Block, Inc.</p>

      <ul className="space-y-4 flex flex-col items-center justify-center">
        <li>
          {" "}
          <Link href="">Opt-Out of Interest-Based Advertising </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="">Privacy Notice</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="">Terms of Service</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="">Licenses</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="">Government</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="">Square Capital, LLC Licenses</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="">Block, Inc.</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default MobileFooter;
