import Head from 'next/head';
import Nav from '@/sections/Nav';
import Hero from '@/sections/Hero';
import Showing from '@/sections/Showing';

import { arimo } from '@/utils/fonts';
import Act from '@/sections/example';




export default function Home() {
  return (
    <>
      <Head>
        <title>Telemed.xyz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${arimo.className}`}>
        <Nav/>
        <Hero />       
        <Showing />
        <Act/>
      </main>
    </>
  );
}
