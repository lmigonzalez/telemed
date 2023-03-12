import Link from "next/link";
import React from "react";

const services = [
    { id: "s1", name: "Quick Service" },
    { id: "s2", name: "Full Service" },
    { id: "s3", name: "Fast Casual" },
    { id: "s4", name: "Bars & Breweries" },
    { id: "s5", name: "Ghost Kitchens" },
]

const Services = () => (
    <section className="flex flex-col gap-5 text-white text-sm mb-10">
        <div className="flex flex-col md:flex-row gap-1 md:gap-0">
            {services.map((item) => (
                <button key={item.id} className="btn w-full h-10 bg-[#656EB3] flex flex-row items-center justify-center">
                    {item.name}
                    <img src="right-arrow-svgrepo-com.svg" width={15} color="#FFFFFF" />
                </button>
            ))}
        </div>
        <div className="flex flex-col items-center justify-center  text-black md:flex-row gap-2">
            <span>Looking for a basic mobile setup?</span>
            <Link href={''} className="text-[#656EB3] hover"> Try Square Point of Sale.</Link>
        </div>
    </section>
)

export default Services;