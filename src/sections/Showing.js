import React from "react";
import Image from "next/image";
const Showing = () => {
  return (
    <section className="">
      <div className="relative w-auto max-w-full h-auto">
        <Image src="/image1.png" alt="showing" width={1200} height={600} />
      </div>

      <div className="m-auto flex w-[1200px] max-w-full items-center justify-between py-24 px-8 flex-col sm:flex-row ">
        <h3 className="w-1/2 text-5xl font-bold leading-[62px]">
          No matter what’s <br /> cooking, <br /> efficiency matters.
        </h3>
        <div className="w-1/2 space-y-5">
          <div className="flex items-center">
            <div className="mr-5 text-white">
              <Image
                src={"/kds-benefit-one.svg.svg"}
                alt="kds-benefit-one"
                width={40}
                height={40}
                className="rounded bg-black"
              />
            </div>
            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
          <div className="flex items-center">
            <div className="mr-5 text-white">
              <Image
                src={"/kds-benefit-two.svg.svg"}
                alt="kds-benefit-one"
                width={40}
                height={40}
                className="rounded bg-black"
              />
            </div>
            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
          <div className="flex items-center">
            <div className="mr-5 text-white">
              <Image
                src={"/kds-benefit-three.svg.svg"}
                alt="kds-benefit-one"
                width={40}
                height={40}
                className="rounded bg-black"
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
