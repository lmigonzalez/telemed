import React from 'react';
import Image from 'next/image';
const Showing = () => {
  return (
    <section>
      <div className="w-full h-[600px] relative">
        <Image src="/image1.png" alt="showing" fill />
      </div>
      <div className="flex justify-center items-start py-24">
        <h3 className="text-5xl font-bold w-1/2">
          No matter what’s <br /> cooking, <br /> efficiency matters.
        </h3>
        <div className='space-y-5 w-1/2'>
          <div className="flex items-center">
            <div className="text-white mr-5">
              <Image
                src={'/kds-benefit-one.svg.svg'}
                alt="kds-benefit-one"
                width={40}
                height={40}
                className="bg-black rounded"
              />
            </div>
            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-white mr-5">
              <Image
                src={'/kds-benefit-one.svg.svg'}
                alt="kds-benefit-one"
                width={40}
                height={40}
                className="bg-black rounded"
              />
            </div>
            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-white mr-5">
              <Image
                src={'/kds-benefit-one.svg.svg'}
                alt="kds-benefit-one"
                width={40}
                height={40}
                className="bg-black rounded"
              />
            </div>
            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showing;
