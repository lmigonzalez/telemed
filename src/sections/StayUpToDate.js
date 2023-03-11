import React from "react";

const StayUpToDate = () => {
    return (
        <section className="flex flex-col justify-center text-center items-center py-20 gap-1 ">
            <div>   
                <div>
                    <h2 className="text-5xl font-bold  mb-5">Stay up to date</h2>
                    <p className="mb-16">Learn about updated features, stories from other businesses, and the latest promotions.</p>
                </div>
                <form className="flex justify-between gap-2">
                    <input className="form-input rounded-md shadow-md border-none bg-[#6666666E] w-full" type="email" defaultValue={"Email address"} />
                    <button className="p-2 rounded bg-[#656EB3] text-white whitespace-nowrap  ">Get more info</button>
                    
                </form>
                <p className="p-3">*Please refer to our <a className=" text-blue-600">Privacy Policy</a> for more details.</p>
            </div> 
        </section>
    )
}

export default StayUpToDate;