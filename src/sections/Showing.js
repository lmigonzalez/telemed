import React from "react";
import Image from "next/image";
const Showing = () => {
  return (
    <section className="">
      <div className="relative flex w-auto h-auto 2xl:justify-center ">
        <Image src="/image1.png" alt="showing" width={1920} height={1300} />
      </div>

      <div className="m-auto flex w-[1200px] max-w-full items-center justify-between py-24 px-4 flex-col md:flex-row md:space-x-8">
        <h3 className="w-full mb-8 md:mb-0 md:w-1/2 text-5xl font-bold leading-[62px]">
          No matter what’s cooking, efficiency matters.
        </h3>
        <div className="w-full md:w-1/2 space-y-5">
          <div className="flex items-center gap-2">

            <Image
              src={"/kds-benefit-one.svg.svg"}
              alt="kds-benefit-one"
              width={40}
              height={40}
              className="rounded bg-black whitespace-nowrap"
            />

            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/kds-benefit-two.svg.svg"}
              alt="kds-benefit-one"
              width={40}
              height={40}
              className="rounded bg-black whitespace-nowrap"
            />
            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/kds-benefit-three.svg.svg"}
              alt="kds-benefit-one"
              width={40}
              height={40}
              className="rounded bg-black whitespace-nowrap"
            />
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
