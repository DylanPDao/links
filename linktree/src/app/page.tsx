import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <div className="m-1 border-white border-2 rounded-sm w-5/12 pt-1 pb-1 flex justify-center items-center">
          <p>Contact</p>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-5/12 pt-1 pb-1 flex justify-center items-center">
          <p>LinkedIn</p>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-5/12 pt-1 pb-1 flex justify-center items-center">
          <p>GitHub</p>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-5/12 pt-1 pb-1 flex justify-center items-center">
          <p>Pokemon E-Commerce Shop</p>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-5/12 pt-1 pb-1 flex justify-center items-center">
          <p>Pokemon TCG Searcher</p>
        </div>
        <div className="m-1 border-white border-2 rounded-sm w-5/12 pt-1 pb-1 flex justify-center items-center">
          <p>Trill Burgers Inventory</p>
        </div>
      </div>
    </main>
  )
}
