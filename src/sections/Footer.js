import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='py-24'>

			<div className='relative'>
				<div className='bg-black w-full h-8'></div>
				<div className='bg-black w-full h-16 mt-4'></div>
				<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 w-[1200px] h-36'>
					<div className='bg-[#656EB3] w-full h-16 flex items-center'>
						<ul className='text-white flex justify-between items-center w-full px-28'>
							<li className='flex'>Quick Service <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
							</svg>
							</li>

							<li className='flex'>Full Service <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
							</svg>
							</li>

							<li className='flex'>Fast Casual <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
							</svg>
							</li>

							<li className='flex'>Bars & Breweries <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
							</svg>
							</li>
							<li className='flex'>Ghost Kitchens <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
							</svg>
							</li>
						</ul>
					</div>
					<div className='bg-white w-full h-16 absolute bottom-0 flex items-center justify-center'>
						<p className="">
							Looking for a basic mobile setup? <a href={''} className=" text-[#656EB3]">Try Square Point of Sale.</a>
						</p>
					</div>
				</div>
			</div>

			<div className='flex justify-between items-start w-[1200px] max-w-full m-auto mt-24'>
				<div>
					<p className='text-xl text-[#404040] mb-5'>Products</p>
					<ul className='space-y-4'>
						<li> <Link href=''> Commerce</Link></li>
						<li> <Link href=''> Point of sale</Link></li>
						<li> <Link href=''> Payments</Link></li>
						<li> <Link href=''> Online</Link></li>
						<li> <Link href=''> Invoices</Link></li>
						<li> <Link href=''> Customers</Link></li>
						<li> <Link href=''> Marketing</Link></li>
						<li> <Link href=''> Loyalty</Link></li>
						<li> <Link href=''> Customer Directory</Link></li>
						<li> <Link href=''> Banking</Link></li>
						<li> <Link href=''> Staff</Link></li>
						<li> <Link href=''> Payroll</Link></li>
						<li> <Link href=''> Team Management</Link></li>
						<li> <Link href=''> Buy Now, Pay Later</Link></li>
						<li> <Link href=''> Hardware</Link></li>

					</ul>
				</div>

				<div>
					<p className='text-xl text-[#404040] mb-5'>Business Types</p>
					<ul className='space-y-4'>
						<li> <Link href=''> Food & Beverage</Link></li>
						<li> <Link href=''> Quick Service </Link></li>
						<li> <Link href=''> Full Service</Link></li>
						<li> <Link href=''> Fast Casual</Link></li>
						<li> <Link href=''>  Bars & Breweries</Link></li>
						<li> <Link href=''> Retail</Link></li>
						<li> <Link href=''> Beauty Salon</Link></li>
						<li> <Link href=''> Hair Salon</Link></li>
						<li> <Link href=''> Health & Fitness </Link></li>
						<li> <Link href=''>Professional Services</Link></li>
						<li> <Link href=''>Home & Repair</Link></li>
						<li> <Link href=''>Large Businesses</Link></li>
					</ul>
				</div>


				<div>
					<p className='text-xl text-[#404040] mb-5'>Resources</p>
					<ul className='space-y-4'>
						<li> <Link href=''>Pricing</Link></li>
						<li> <Link href=''>Why Square </Link></li>
						<li> <Link href=''>Testimonials</Link></li>
						<li> <Link href=''>Blog</Link></li>
						<li> <Link href=''>Sales</Link></li>
						<li> <Link href=''>Support</Link></li>
						<li> <Link href=''>Seller Community</Link></li>
						<li> <Link href=''>Developer Platform</Link></li>
						<li> <Link href=''>Merchant Services</Link></li>
						<li> <Link href=''>Rent Hardware</Link></li>
					</ul>
				</div>


				<div>
					<p className='text-xl text-[#404040] mb-5'>Contact</p>
					<ul className='space-y-4'>
						<li> <Link href=''>Customer support: 1 (855) 700-6000</Link></li>
						<li> <Link href=''>Sales: 1 (800) 470-1673</Link></li>
					</ul>

					<p className='text-xl text-[#404040] mb-5 mt-10'>Square</p>
					<ul className='space-y-4'>
						<li> <Link href=''>About</Link></li>
						<li> <Link href=''>Press & Media</Link></li>
						<li> <Link href=''>Careers</Link></li>
						<li> <Link href=''>Affiliates</Link></li>
						<li> <Link href=''>Partners</Link></li>
					</ul>
				</div>

			</div>

			<div className='mt-24 w-[1200px] max-w-full m-auto border-y-2 border-solid py-8 flex justify-between items-center'>
				<div className='flex items-center'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
					</svg>

					<p>United States (English)</p>
				</div>

				<div className='flex space-x-2'>
					<Link href='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
					</svg>
					</Link>
					<Link href='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
					</svg>
					</Link>
					<Link href='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
					</svg>
					</Link>
				</div>
			</div>


			<div className='flex justify-between mt-8 w-[1200px] max-w-full m-auto'>
				<p>© 2023 Block, Inc.</p>
				<ul className='space-y-4'>
					<li> <Link href=''>Opt-Out of Interest-Based Advertising </Link> </li>
					<li> <Link href=''>Privacy Notice</Link> </li>
					<li> <Link href=''>Terms of Service</Link> </li>
					<li> <Link href=''>Licenses</Link> </li>
					<li> <Link href=''>Government</Link> </li>
					<li> <Link href=''>Square Capital, LLC Licenses</Link> </li>
					<li> <Link href=''>Block, Inc.</Link> </li>
				</ul>
			</div>


		</footer>
	)
}

export default Footer