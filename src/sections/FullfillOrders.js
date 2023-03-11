import React from 'react';
import Image from 'next/image';

// in here here must deploy a card list
const FullfillOrders = () => {
  return (
    <section className="relative flex text-white bg-black py-36">
      <div className="flex flex-col justify-center items-end w-1/2">
        <div>
          <h3 className="text-5xl font-bold mr-12 leading-[62px] mb-8">
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

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[500px] h-[250px]">
        <Image src="/kds-tickets.png" alt="kds-tickets-m" fill />
      </div>
    </section>
  );
};

export default FullfillOrders;
