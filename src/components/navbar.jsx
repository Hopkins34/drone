import { useState, useEffect } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0); // Track active link

  // Close menu when screen size changes to xl
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) { // xl breakpoint in Tailwind (1280px)
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup event listener
  }, []);

  // Handle button click: Set active link and scroll to section
  const handleClick = (index) => {
    setActiveLink(index);
    scrollToSection(index);
  };

  return (
    <nav className="flex flex-col items-center p-2 bg-gray-600 relative">
      <h1 className="font-bold text-4xl p-2 mx-auto">MQ-9A Reaper</h1>

      {/* Burger Icon for smaller screens */}
      <span
        className="font-bold text-4xl absolute top-4 right-5 xl:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        &#9776; {/* Burger icon */}
      </span>

      {/* Menu Buttons: Display on larger screens */}
      <div className={`w-full xl:flex gap-3 justify-center text-xl 2xl:text-2xl grid grid-cols-2 ${isMenuOpen ? 'flex flex-col' : 'hidden xl:flex'}`}>
        {['Home', 'Summary', 'Manufacturer', 'Purpose', 'Service', 'Design', 'Specification', 'Crew', 'Capabilities', 'Performance', 'Operations', 'Summary', 'Sources'].map((text, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`p-1 ${activeLink === index ? 'bg-blue-500 text-white' : 'text-gray-300'}`}
          >
            {text}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
