import React from "react";

const StayUpToDate = () => {
  return (
    <section className="flex flex-col items-center gap-1 py-20 ">
      <div>
        <div className=" justify-center text-center">
          <h2 className="mb-5 text-5xl  font-bold">Stay up to date</h2>
          <p className="mb-16">
            Learn about updated features, stories from other businesses, and the
            latest promotions.
          </p>
        </div>
        <form className="flex justify-between gap-2">
          <input
            className="form-input w-full rounded-md border-none bg-[#6666666E] shadow-md"
            type="email"
            defaultValue={"Email address"}
          />
          <button className="whitespace-nowrap rounded bg-[#656EB3] text-white p-2">
            Get more info
          </button>
        </form>
        <p className="p-3">
          *Please refer to our <a href={''} className=" text-blue-600 hover:text-blue-900" >Privacy Policy</a>{" "}
          for more details.
        </p>
      </div>
    </section>
  );
};

export default StayUpToDate;
