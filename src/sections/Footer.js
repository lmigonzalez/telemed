import React from "react";
import Link from "next/link";

import MobileFooter from "@/components/MobileFooter";

const Footer = () => {
  return (
    <footer className="py-24">
      <div className="hidden lg:block px-4 ">
        <div className="relative">
          <div className="h-8 w-full bg-black"></div>
          <div className="mt-4 h-16 w-full bg-black"></div>
          <div className="absolute bottom-0 left-1/2 w-[1200px] -translate-x-1/2 -translate-y-0 transform h-36">
            <div className="flex w-full items-center bg-[#656EB3] h-16">
              <ul className="flex w-full items-center justify-between px-28 text-white flex-row">
                <li className="flex">
                  Quick Service{" "}
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

                <li className="flex">
                  Full Service{" "}
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

                <li className="flex">
                  Fast Casual{" "}
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

                <li className="flex">
                  Bars & Breweries{" "}
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
                <li className="flex">
                  Ghost Kitchens{" "}
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
            </div>
            <div className="absolute bottom-0 flex h-16 w-full items-center justify-center bg-white">
              <p className="">
                Looking for a basic mobile setup?{" "}
                <a href={""} className=" text-[#656EB3]">
                  Try Square Point of Sale.
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="m-auto mt-24 flex w-[1200px] max-w-full items-start justify-between">
          <div>
            <p className="mb-5 text-xl text-[#404040]">Products</p>
            <ul className="space-y-4">
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
          </div>

          <div>
            <p className="mb-5 text-xl text-[#404040]">Business Types</p>
            <ul className="space-y-4">
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
          </div>

          <div>
            <p className="mb-5 text-xl text-[#404040]">Resources</p>
            <ul className="space-y-4">
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
          </div>

          <div>
            <p className="mb-5 text-xl text-[#404040]">Contact</p>
            <ul className="space-y-4">
              <li>
                {" "}
                <Link href="">Customer support: 1 (855) 700-6000</Link>
              </li>
              <li>
                {" "}
                <Link href="">Sales: 1 (800) 470-1673</Link>
              </li>
            </ul>

            <p className="mb-5 mt-10 text-xl text-[#404040]">Square</p>
            <ul className="space-y-4">
              <li>
                {" "}
                <Link href="">About</Link>
              </li>
              <li>
                {" "}
                <Link href="">Press & Media</Link>
              </li>
              <li>
                {" "}
                <Link href="">Careers</Link>
              </li>
              <li>
                {" "}
                <Link href="">Affiliates</Link>
              </li>
              <li>
                {" "}
                <Link href="">Partners</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="m-auto mt-24 flex w-[1200px] max-w-full items-center justify-between border-y-2 border-solid py-8">
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

        <div className="m-auto mt-8 flex w-[1200px] max-w-full justify-between">
          <p>© 2023 Block, Inc.</p>
          <ul className="space-y-4">
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
      </div>

      <div className="block lg:hidden">
        <MobileFooter />
      </div>
    </footer>
  );
};

export default Footer;
