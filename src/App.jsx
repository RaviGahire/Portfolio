

export const App = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-amber-300 shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo / Name */}
          <h1 className="text-2xl font-bold text-gray-900">
            Ravi<span className="text-blue-600">Portfolio</span>
          </h1>

          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-8 text-gray-700 font-medium">
              <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
              <li className="hover:text-blue-600 cursor-pointer transition">About</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Projects</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Contact</li>
            </ul>
          </nav>

          {/* Button (optional) */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
            Hire Me
          </button>
        </div>
      </header>
    </>
  )
}
