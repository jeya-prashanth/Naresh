// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar.jsx';
// import Home from './components/Home.jsx';
// import About from './components/About.jsx';
// import Services from './components/Services.jsx';
// import Projects from './components/Projects.jsx';
// import Contact from './components/Contact.jsx';
// import Footer from './components/Footer.jsx';
// import ProjectDetail from './components/ProjectDetail.jsx';

// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<>
//               <Home />
//               <About />
//               <Services />
//               <Projects />
//               <Contact />
//             </>
//           }
//         />
//         <Route path="/projects/:id" element={<ProjectDetail />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top smoothly on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
