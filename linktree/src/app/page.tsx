import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <div className="flex w-5/12 justify-center items-center p-4">
          <Image className="rounded-full" src="/240.jpg" alt="headshot" width={100} height={100} />
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-5/12 pt-1 pb-1 flex justify-center items-center">
          <p>Contact</p>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-5/12 pt-1 pb-1 flex justify-center items-center">
          <Link href="https://www.linkedin.com/in/dylandao/">LinkedIn</Link>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-5/12 pt-1 pb-1 flex justify-center items-center">
          <Link href="https://github.com/DylanPDao">GitHub</Link>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-5/12 pt-1 pb-1 flex justify-center items-center">
          <Link href="https://gimmepokemon.dylandao.dev">Pokemon E-Commerce Shop</Link>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-5/12 pt-1 pb-1 flex justify-center items-center">
          <Link href="https://dylanpdao.github.io/Pokemon-TCG-Search/">Pokemon TCG Searcher</Link>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-5/12 pt-1 pb-1 flex justify-center items-center">
          <Link href="https://trill.dylandao.dev/">Trill Burgers Inventory</Link>
        </div>
      </div>
    </main>
  )
}
