import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); 
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); 
        setIsOpen(false);
    }
      };
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div onClick={()=> scrollToSection('home')} className="flex-shrink-0 cursor-pointer">
            <h1 className="text-2xl font-bold text-[#1a0055]">BN NARESH</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-[#1a0055] px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#1a0055] hover:text-white hover:rounded-[25px]"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[#1a0055] px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#1a0055] hover:text-white hover:rounded-[25px]"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-[#1a0055] px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#1a0055] hover:text-white hover:rounded-[25px]"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-[#1a0055] px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#1a0055] hover:text-white hover:rounded-[25px]"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[#1a0055] px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#1a0055] hover:text-white hover:rounded-[25px]"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Connect With Me Button - Desktop */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#1a0055] text-white px-6 py-2 rounded-[25px] font-medium hover:bg-blue-200 hover:text-[#1a0055] transition-all duration-500 transform hover:scale-105"
            >
              Connect With Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1a0055] focus:outline-none transition-all duration-500"
            >
              {isOpen ? <X size={38} /> : <Menu size={38} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-100 shadow-lg">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-[#1a0055] block px-3 py-2 text-base font-medium w-full text-left transition-all duration-500"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#1a0055] block px-3 py-2 text-base font-medium w-full text-left transition-all duration-500"
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#1a0055] block px-3 py-2 text-base font-medium w-full text-left transition-all duration-500"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-[#1a0055] block px-3 py-2 text-base font-medium w-full text-left transition-all duration-500"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#1a0055] block px-3 py-2 text-base font-medium w-full text-left transition-all duration-500"
            >
              Contact Me
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#1a0055] text-white block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-blue-200 transition-all duration-500 mt-4"
            >
              Connect With Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     if (location.pathname !== '/') {
//       navigate('/');
//       setTimeout(() => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 300); // Wait for route change and content to load
//     } else {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//     setIsOpen(false);
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-[#1a0055]">BN NARESH</h1>
//           </div>

//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <button 
//                 onClick={() => scrollToSection('home')}
//                 className="text-[#1a0055] px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#1a0055] hover:text-white hover:rounded-[25px]"
//               >
//                 Home
//               </button>
//               <button 
//                 onClick={() => scrollToSection('about')}
//                 className="text-[#1a0055] px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#1a0055] hover:text-white hover:rounded-[25px]"
//               >
//                 About Me
//               </button>
//               <button 
//                 onClick={() => scrollToSection('services')}
//                 className="text-[#1a0055] px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#1a0055] hover:text-white hover:rounded-[25px]"
//               >
//                 Services
//               </button>
//               <button 
//                 onClick={() => scrollToSection('projects')}
//                 className="text-[#1a0055] px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#1a0055] hover:text-white hover:rounded-[25px]"
//               >
//                 Projects
//               </button>
//               <button 
//                 onClick={() => scrollToSection('contact')}
//                 className="text-[#1a0055] px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#1a0055] hover:text-white hover:rounded-[25px]"
//               >
//                 Contact Me
//               </button>
//             </div>
//           </div>

//           <div className="hidden md:block">
//             <button 
//               onClick={() => scrollToSection('contact')}
//               className="bg-[#1a0055] text-white px-6 py-2 rounded-[25px] font-medium hover:bg-blue-200 hover:text-[#1a0055] transition-all duration-500 transform hover:scale-105"
//             >
//               Connect With Me
//             </button>
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-[#1a0055] focus:outline-none transition-all duration-500"
//             >
//               {isOpen ? <X size={38} /> : <Menu size={38} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-100 shadow-lg">
//             <button 
//               onClick={() => scrollToSection('home')}
//               className="text-[#1a0055] block px-3 py-2 text-base font-medium w-full text-left transition-all duration-500"
//             >
//               Home
//             </button>
//             <button 
//               onClick={() => scrollToSection('about')}
//               className="text-[#1a0055] block px-3 py-2 text-base font-medium w-full text-left transition-all duration-500"
//             >
//               About Me
//             </button>
//             <button 
//               onClick={() => scrollToSection('services')}
//               className="text-[#1a0055] block px-3 py-2 text-base font-medium w-full text-left transition-all duration-500"
//             >
//               Services
//             </button>
//             <button 
//               onClick={() => scrollToSection('projects')}
//               className="text-[#1a0055] block px-3 py-2 text-base font-medium w-full text-left transition-all duration-500"
//             >
//               Projects
//             </button>
//             <button 
//               onClick={() => scrollToSection('contact')}
//               className="text-[#1a0055] block px-3 py-2 text-base font-medium w-full text-left transition-all duration-500"
//             >
//               Contact Me
//             </button>
//             <button 
//               onClick={() => scrollToSection('contact')}
//               className="bg-[#1a0055] text-white block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-blue-200 transition-all duration-500 mt-4"
//             >
//               Connect With Me
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
