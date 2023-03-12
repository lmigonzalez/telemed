import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const list = [
    {
        id: 1,
        class: 'Products',
        subclass: [{ id: 'p1', name: 'Commerce', link: ' ' },
        { id: 'p3', name: 'Point of sale', link: ' ' },
        { id: 'p4', name: 'Payments', link: ' ' },
        { id: 'p5', name: 'Online', link: ' ' },
        { id: 'p6', name: 'Invoices', link: ' ' },
        { id: 'p7', name: 'Customers', link: ' ' },
        { id: 'p8', name: 'Marketing', link: ' ' },
        { id: 'p9', name: 'Loyalty', link: ' ' },
        { id: 'p0', name: 'Customer Directory', link: ' ' },
        { id: 'p11', name: 'Banking', link: ' ' },
        { id: 'p12', name: 'Staff', link: ' ' },
        { id: 'p13', name: 'Payroll', link: ' ' },
        { id: 'p14', name: 'Team Management', link: ' ' },
        { id: 'p15', name: 'Buy Now, Pay Later', link: ' ' },
        { id: 'p16', name: 'Hardware', link: ' ' },],
        isActive: false,
    },
    {
        id: 2,
        class: 'Business Types',
        subclass: [],
        isActive: false,
    },
    {
        id: 3,
        class: 'Resources',
        subclass: [],
        isActive: false,
    },
    {
        id: 4,
        class: 'Contact',
        subclass: [],
        isActive: false,
    },
    {
        id: 5,
        class: 'Telemed.xyz',
        subclass: [],
        isActive: false,
    },

];





const MyFooter = () => {
    const [opens, setOpens] = useState(list);
    function handleClick(id) {
        setOpens((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id) {
                    return { ...item, isActive: !item.isActive };
                }
                return item;
            })
        );
    }

    const [dropDown, setDropDown] = useState(false)

    useEffect(() => setDropDown(window.innerWidth > 768)
        , [typeof window !== 'undefined' && window.onresize])



    return (
        <section className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2 md:flex-row md: justify-around'>
                {opens.map((item) =>
                (
                    <div key={item.id} className=' flex flex-col py-4  gap-1 items-center md:items-start'>
                        <div className='flex flex-col  gap-2 '>
                            <a className='flex flex-row hover:text-[#656EB3]'
                                onClick={() => handleClick(item.id)}>
                                {item.class}
                                {(!dropDown) && (item.isActive ? (<img src='arrow-up-svgrepo-com.svg' width={20} />) : (<img src='arrow-down-svgrepo-com.svg' width={20} />))}
                            </a>

                        </div>
                        <div className='flex flex-col items-end md:items-start gap-1  '>
                            {
                                (item.isActive || dropDown) && item.subclass.map((el) => (
                                    <Link key={el.id} href={el.link}>{el.name}</Link>
                                ))
                            }
                        </div>
                    </div>
                )
                )}
            </div>

            <div className='flex flex-col items-center'>
                <div className='flex flex-row gap-1 w-full px-4 py-1 justify-between border-y-2'>
                    <div className='flex flex-row w-full'>
                        <img src={'globe-svgrepo-com.svg'} width={20} />
                        <a>United States (English)</a>
                    </div>
                    <div className='flex flex-row'>
                        <img src={'twitter-svgrepo-com.svg'} width={20} />
                        <img src={'facebook-svgrepo-com.svg'} width={20} />
                        <img src='instagram-svgrepo-com.svg' width={20} />
                    </div>
                </div>

                <p className=' my-2'>© 2023 Block, Inc.</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Link className='hover' href={''}>Opt-Out of Interest-Based Advertising</Link>
                <Link className='hover' href={''}>Privacy Notice</Link>
                <Link className='hover' href={''}>Terms of Service</Link>
                <Link className='hover' href={''}>Licenses</Link>
                <Link className='hover' href={''}>Government</Link>
                <Link className='hover' href={''}>Square Capital, LLC Licenses</Link>
                <Link className='hover' href={''}>Block, Inc.</Link>
            </div>
        </section>
    )
}
export default MyFooter;