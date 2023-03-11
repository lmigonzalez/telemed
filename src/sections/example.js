import React from 'react';
import Image from 'next/image';

// in here here must deploy a card list 
const Act = () => {
  return (
      <section className="flex  items-center py-20 text-white bg-black gap-1"> 
          <div className='flex flex-col justify-center pl-20'>
            <h3 className="text-5xl font-bold mr-12 leading-[62px]">
                Fulfill orders <br /> accurately,<br /> every time.
              </h3>
              <ul className='list-disc flex-col'>
                <li> Prioritize and organize orders with detailed ticket views, timers, and alerts.</li>
                <li>Send orders to the right prep stations to help boost order accuracy.</li>
                <li> Oversee order fulfillment and completion with Expeditor Mode.</li>
              </ul>  
          </div>

          <div className='relative w-[600px] h-[350px]'>
              <Image src="/example3.png" fill />
          </div>
        
          
      
    </section>
  );
};

export default Act;
