import { useEffect, useState } from "react"
import { motion } from "motion/react";
import { Sidebar } from "./Components/Sidebar";


export const App = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <>
      {/* Mobile UI */}
      <div className="lg:hidden">
        <h1 className="dark:text-white">Hello i am mobile and tablet</h1>
      </div>



      {/* Desktop UI */}
      <div className="hidden lg:block">
        {/* Aside bar */}
        <Sidebar />

        {/* Main page and page content  */}


        <main className="bg-green-400 max-w-7xl mx-auto h-[120vh]">
          helo
        </main>



      </div>

    </>
  )





}
