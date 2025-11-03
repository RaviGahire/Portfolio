import { useEffect, useState } from "react"


export const App = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false);



  useEffect(() => {

    // Aside scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [])

  return (
    <>
{/* Mobile UI */}
<div className="lg:hidden">
  <h1>Hello i am mobile and tablet</h1>
</div>



  {/* Desktop UI */}
    <div className="hidden lg:block">
        <aside className={`bg-gray-900 hidden lg:block w-[330px] min-h-screen fixed left-0 top-0 transition-transform duration-300 ${isScrolled ? '-translate-x-full' : 'translate-x-0'
        }`}>
      </aside>
      {/* main content */}
      <main className={`bg-amber-200 p-5 transition-all duration-300 h-[120vh] ${isScrolled ? 'max-w-7xl mx-auto' : 'lg:ml-[330px]'
        }`}>hello</main>
    </div>

    </>
  )


 


}
