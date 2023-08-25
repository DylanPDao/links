'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <div className="flex w-10/12 md:w-5/12 justify-center items-center p-2 flex-col">
          <Image className="rounded-full" src="/240.jpg" alt="headshot" width={100} height={100} />
          <p>Dylan Dao</p>
        </div>
        <div className="transistion ease-in-out flex-col m-1 border-white border-2 rounded-sm w-10/12 md:w-5/12 pt-1 pb-1 flex justify-center items-center">
          <button onClick={() => setIsOpen(!isOpen)}>Contact</button>
          <div className={isOpen ? '' : 'hidden'}>
            <p>Email: DylanPDao@gmail.com</p>
            <p>Phone Number: 714-786-9714</p>
          </div>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-10/12 md:w-5/12 pt-1 pb-1 flex justify-center items-center">
          <Link href="https://www.linkedin.com/in/dylandao/overlay/1635538369638/single-media-viewer/?type=DOCUMENT&profileId=ACoAABzqWr0BUVzlgp1lBQycigbaZU6M09dwQ9w">Resume</Link>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-10/12 md:w-5/12 pt-1 pb-1 flex justify-center items-center">
          <Link href="https://www.linkedin.com/in/dylandao/">LinkedIn</Link>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-10/12 md:w-5/12 pt-1 pb-1 flex justify-center items-center">
          <Link href="https://github.com/DylanPDao">GitHub</Link>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-10/12 md:w-5/12 pt-1 pb-1 flex justify-center items-center">
          <Link href="https://gimmepokemon.dylandao.dev">Pokemon E-Commerce Shop</Link>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-10/12 md:w-5/12 pt-1 pb-1 flex justify-center items-center">
          <Link href="https://dylanpdao.github.io/Pokemon-TCG-Search/">Pokemon TCG Searcher</Link>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-10/12 md:w-5/12 pt-1 pb-1 flex justify-center items-center">
          <Link href="https://trill.dylandao.dev/">Trill Burgers Inventory</Link>
        </div>
      </div>
    </main>
  )
}
