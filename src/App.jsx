import { useState } from "react"


export const App = () => {
const [scroll , setScroll]= useState('')


  return (
    <>
      <aside className="bg-gray-900 hidden md:max-w-[330px] lg:block  min-h-screen fixed inset-0">



      </aside>
      <main className="bg-amber-200 max-w-7xl mx-auto  p-5">hello</main>

    </>
  )
}
