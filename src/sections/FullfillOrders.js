import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cn from "classnames";
//import useDeviceSize from '@/utils/windowSize';



// in here here must deploy a card list
const FullfillOrders = () => {
  return (
    <section className="relative flex text-white sm:items-center justify-between bg-black py-36 gap-20 flex-col-reverse sm:flex-row">
      <div className="flex items-end flex-col w-1/2">
        <div>
          <h3 className="text-5xl font-bold leading-[62px] mb-8">
            Fulfill orders <br /> accurately,
            <br /> every time.
          </h3>
          <ul className="list-disc flex-col space-y-5">
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#A2D5A9] mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p>
                Prioritize and organize orders with detailed ticket <br />{' '}
                views, timers, and alerts.
              </p>
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#A2D5A9] mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p>
                Send orders to the right prep stations to help boost <br />{' '}
                order accuracy.
              </p>
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#A2D5A9] mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p>
                Oversee order fulfillment and completion with <br /> Expeditor
                Mode.
              </p>
            </li>
          </ul>

        </div>


      </div>


      <Image className='my-2 sm:my-auto' src="/kds-tickets.png" alt="kds-tickets-m" width={640} height={270} />

    </section >
  );
};

export default FullfillOrders;
