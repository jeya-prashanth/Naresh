import React, { useState , useEffect } from 'react';
import { ExternalLink, Image } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import autoCAD from '../assets/autoCAD.png';
import revit from '../assets/revit.png';
import sketchUp from '../assets/sketchup.png'; 
// import sketchUp from '../assets/sketchup.png'
import interiorLumion from '../assets/in_lumion.png';
import interiorTwinmotion from '../assets/in_twinmotion.png';
import exteriorLumion from '../assets/ex_lumion.png';
import exteriorTwinmotion from '../assets/ex_twinmotion.png';
import exteriorTwinmotion2 from '../assets/2ex_twinmotion.png';
import twoextwin1 from '../assets/2twin1.png';
import twoextwin2 from '../assets/2twin2.png';
import extwin1 from '../assets/extwin1.png';
import extwin2 from '../assets/extwin2.png';
import extwin3 from '../assets/extwin3.png';
import exlumi1 from '../assets/lumi_ex1.png';
import exlumi2 from '../assets/lumi_ex2.png';
import exlumi3 from '../assets/lumi_ex3.png';
import exlumi4 from '../assets/lumi_ex4.png';
import inlumi1 from '../assets/lumi_in1.png';
import inlumi2 from '../assets/lumi_in2.png';
import inlumi3 from '../assets/lumi_in3.png';
import intwin1 from '../assets/intwin1.png';
import intwin2 from '../assets/intwin2.png';
import intwin3 from '../assets/intwin3.png';
import exteriorLumion2 from '../assets/2ex_lumion.png';
import twoexlumi1 from '../assets/2lumi1.png';
import twoexlumi2 from '../assets/2lumi2.png';
import twoexlumi3 from '../assets/2lumi3.png';
import microstation from '../assets/microstation.png';

const Projects = () => {
  const navigate = useNavigate();

  const allProjects = [
    {
      id: 1,
      title: "Residential Approval Drawing – Kallappadu",
      category: "AutoCAD",
      image: autoCAD,
      images: [autoCAD],
      shortDescription: "Includes site layout, floor plans, elevations, and sections, ensuring compliance with building regulations.",
      description : "This detailed architectural drawing package was prepared for a proposed residential project in Kallappadu Village. It includes the site layout, floor plans, elevations, and sections, all aligned with zoning and building regulations. The documentation is tailored for submission to the local authority to ensure smooth approval for construction. The design emphasizes efficient space utilization, natural lighting, and modern aesthetics, making it suitable for contemporary family living."
    },
    {
      id: 2,
      title: "Commercial Building Design and Structural CAD",
      mainCategory: "3D Modelling",
      category: "Revit",
      image: revit,
      images: [revit],
      shortDescription: "Detailed technical drawings and structural plans for a multi-story commercial building project.",
      description: "This project involves detailed technical drawings and structural plans created in Revit for a multi-story commercial building. It includes precise modeling to support construction, ensuring accuracy, compliance, and efficient project execution."
    },
    {
      id: 3,
      title: "Modern Interior Design and 3D Visualization",
      mainCategory: "Interior",
      category: "Twinmotion",
      image: interiorTwinmotion,
      images: [interiorTwinmotion, intwin1, intwin2, intwin3],
      shortDescription: "Modern interior design concept with 3D visualization and detailed layout planning.",
      description: "This project presents a modern interior design concept developed using Twinmotion, featuring detailed 3D visualizations and precise layout planning. The design emphasizes functionality, aesthetics, and spatial optimization to create comfortable and stylish living spaces."
    },
    {
      id: 4,
      title: "Urban Infrastructure Planning and Visualization",
      mainCategory: "Interior",
      category: "Lumion",
      image: interiorLumion,
      images: [interiorLumion, inlumi1, inlumi2, inlumi3],
      shortDescription: "Road and infrastructure planning using Lumion for municipal development project.",
      description: "This project showcases detailed road and infrastructure planning for a municipal development using Lumion. It focuses on creating realistic 3D visualizations that illustrate road layouts, public utilities, and surrounding landscapes. The design supports efficient urban development, enhancing functionality, safety, and aesthetic appeal while aiding stakeholder communication and project approvals."
    },
    {
      id: 5,
      title: "Topographic Survey and Terrain Modeling",
      category: "MicroStation",
      image: microstation,
      images: [microstation],
      shortDescription: "Accurate topographic surveys and terrain modeling using MicroStation and InRoads software.",
      description: "This project involves precise topographic surveys and terrain modeling conducted with MicroStation and InRoads. It includes data collection, contour mapping, and digital terrain creation to support engineering and construction projects, ensuring accurate site analysis and planning."
    },
    {
      id: 6,
      title: "SketchUp Landscape Modeling Project",
      mainCategory: "3D Modelling",
      category: "SketchUp",
      image: sketchUp,
      images: [sketchUp],
      shortDescription: "Comprehensive landscape design with drainage planning and plant specification.",
      description: "This project features a landscape architecture design using SketchUp, blending natural and built elements for functional, attractive outdoor spaces. It includes topography modeling, hardscape and softscape planning, drainage solutions, and plant specifications to ensure sustainability and harmony. Walkways, retaining walls, trees, and water features are carefully placed to enhance usability and maintenance. Suitable for both residential and commercial settings, it balances beauty and practicality."
    },
    {
      id: 7,
      title: "Modern Residential House – Kallappadu Village",
      mainCategory: "Exterior",
      category: "Twinmotion",
      image: exteriorTwinmotion,
      images: [exteriorTwinmotion, extwin1, extwin2, extwin3],
      shortDescription: "A modern residential design that blends aesthetics with functionality for comfortable living.",
      description: "This residential project, located in Manalkadduthoddam, Kallappadu Village, showcases a modern house designed for both style and practicality. The architectural drawings include detailed floor plans, site layout, elevations, and sections to meet local authority requirements and building regulations. The design emphasizes efficient space use, natural lighting, and a contemporary look suited for modern family life."
    },
    {
      id: 8,
      title: "Lumion Exterior Rendering and Visualization",
      mainCategory: "Exterior",
      category: "Lumion",
      image: exteriorLumion,
      images: [exteriorLumion, exlumi1, exlumi2, exlumi3, exlumi4],
      shortDescription: "Stunning interior visualizations with detailed lighting and material effects.",
      description: "This project features high-quality exterior renderings created using Lumion, highlighting realistic lighting, textures, and material effects. The visualizations showcase detailed architectural exteriors, enhancing presentation and design communication for residential and commercial projects."
    },
    {
      id: 9,
      title: "Modern Residential House – Kopay",
      mainCategory: "Exterior",
      category: "Twinmotion",
      image: exteriorTwinmotion2,
      images: [exteriorTwinmotion2, twoextwin1, twoextwin2],
      shortDescription: "A sleek and functional residential design combining contemporary style with efficient space planning.",
      description: "This residential project, located on Navalar School Lane, Kopay Center, Kopay, features a modern architectural approach focused on comfort, style, and functionality. The design package includes detailed floor plans, elevations, sections, and site layout, all crafted to meet zoning and building regulations. The layout emphasizes natural lighting, open spaces, and modern aesthetics suited for today’s lifestyle."
    },
    {
      id: 10,
      title: "Luxury Residential House – Kokuvil",
      mainCategory: "Exterior",
      category: "Lumion",
      image: exteriorLumion2,
      images: [exteriorLumion2, twoexlumi1, twoexlumi2, twoexlumi3],
      shortDescription: "A high-end residential design offering spacious layouts, elegant finishes, and modern comforts.",
      description: "Located on Nadarasa Veethy, Kokuvil West Irai, this luxury residential project features an elegant and spacious home tailored for premium living. The design includes comprehensive architectural plans—floor layouts, elevations, sections, and site mapping—crafted to meet regulatory standards. Emphasizing sophisticated design, comfort, and functionality, this home delivers a modern living experience with luxurious touches throughout."
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = [
    { title: "Interior", types: ["Twinmotion", "Lumion"] },
    { title: "Exterior", types: ["Twinmotion", "Lumion"] },
    { title: "3D Modelling", types: ["Revit", "SketchUp"] },
    { title: "AutoCAD", types: null },
    { title: "MicroStation", types: null }
  ];

  const [selectedMain, setSelectedMain] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const filteredProjects = allProjects.filter((project) => {
    if (!selectedMain) return false;
    if (selectedMain.types === null) {
      return project.category.toLowerCase() === selectedMain.title.toLowerCase();
    }
    if (selectedType) {
      return (
        project.mainCategory?.toLowerCase() === selectedMain.title.toLowerCase() &&
        project.category.toLowerCase() === selectedType.toLowerCase()
      );
    }
    return false;
  });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 mb-6">
            <motion.span initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>MY{" "}</motion.span>
            <motion.span initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-[#1a0055]">PROJECTS</motion.span>
          </h2>
          <motion.p initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent CAD and design projects, demonstrating precision, creativity, and technical expertise across various disciplines.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map((cat) => (
              <motion.button
                key={cat.title}
                onClick={() => {
                  if (selectedMain?.title === cat.title) {
                    setSelectedMain(null);
                    setSelectedType(null);
                  } else {
                    setSelectedMain(cat);
                    setSelectedType(null);
                  }
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`px-5 py-2 rounded-lg font-medium transition-colors duration-500 text-white 
                  ${selectedMain?.title === cat.title ? "bg-red-900" : "bg-[#1a0055]"}`}
              >
                {cat.title}
              </motion.button>
            ))}
          </div>

          {selectedMain && selectedMain.types && (
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {selectedMain.types.map((type) => (
                <button
                  key={type}
                  onClick={() =>
                    setSelectedType((prevType) => (prevType === type ? null : type))
                  }
                  className={`px-4 py-2 rounded-md font-medium transition-colors duration-500 text-[#1a0055] 
                    ${selectedType === type ? "bg-red-900 text-white" : "bg-blue-200"}`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
            >
              <div
                className="relative group cursor-pointer"
                onClick={() => navigate(`/projects/${project.id}`, { state: { project } })}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <ExternalLink className="text-white" size={24} />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1a0055] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{project.shortDescription}</p>
                <button
                  onClick={() => navigate(`/projects/${project.id}`, { state: { project } })}
                  className="flex items-center gap-2 text-[#1a0055] hover:text-red-800 font-medium transition-colors"
                >
                  <Image size={16} />
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && selectedMain && (
          <div className="text-center mt-12 text-gray-500 font-medium">
            {selectedMain.types && !selectedType
              ? "Please select a subtype to view projects."
              : "No projects found."}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;









// import React, { useState } from 'react';
// import { ExternalLink, Image } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// import autoCAD from '../assets/autoCAD.png';
// import revit from '../assets/revit.png';
// import sketchUp from '../assets/sketchUp.png';
// import interiorLumion from '../assets/in_lumion.png';
// import interiorTwinmotion from '../assets/in_twinmotion.png';
// import exteriorLumion from '../assets/ex_lumion.png';
// import exteriorTwinmotion from '../assets/ex_twinmotion.png';
// import exteriorTwinmotion2 from '../assets/2ex_twinmotion.png';
// import twoextwin1 from '../assets/2twin1.png'
// import twoextwin2 from '../assets/2twin2.png';
// import extwin1 from '../assets/extwin1.png';
// import extwin2 from '../assets/extwin2.png';
// import extwin3 from '../assets/extwin3.png'
// import exlumi1 from '../assets/lumi_ex1.png';
// import exlumi2 from '../assets/lumi_ex2.png';
// import exlumi3 from '../assets/lumi_ex3.png'
// import exlumi4 from '../assets/lumi_ex4.png';
// import inlumi1 from '../assets/lumi_in1.png';
// import inlumi2 from '../assets/lumi_in2.png';
// import inlumi3 from '../assets/lumi_in3.png';
// import intwin1 from '../assets/intwin1.png'
// import intwin2 from '../assets/intwin2.png';
// import intwin3 from '../assets/intwin3.png';


// const Projects = () => {
//   const navigate = useNavigate();

//   const allProjects = [
//     {
//       id: 1,
//       title: "AutoCAD Approval Drawing",
//       category: "AutoCAD",
//       image: autoCAD,
//       images: [autoCAD],
//       description: "Includes site layout, floor plans, elevations, and sections, ensuring compliance with building regulations."
//     },
//     {
//       id: 2,
//       title: "Commercial Building CAD",
//       mainCategory: "3D Modelling",
//       category: "Revit",
//       image: revit,
//       images: [revit],
//       description: "Detailed technical drawings and structural plans for a multi-story commercial building project."
//     },
//     {
//       id: 3,
//       title: "Interior Design Project",
//       mainCategory: "Interior",
//       category: "Twinmotion",
//       image: interiorTwinmotion,
//       images: [interiorTwinmotion, intwin1, intwin2, intwin3],
//       description: "Modern interior design concept with 3D visualization and detailed layout planning."
//     },
//     {
//       id: 4,
//       title: "Infrastructure Planning",
//       mainCategory: "Interior",
//       category: "Lumion",
//       image: interiorLumion,
//       images: [interiorLumion, inlumi1, inlumi2, inlumi3],
//       description: "Road and infrastructure planning using Lumion for municipal development project."
//     },
//     {
//       id: 5,
//       title: "Mechanical Design",
//       category: "MicroStation",
//       image: autoCAD,
//       images: [autoCAD],
//       description: "Precise mechanical component design and technical documentation for manufacturing."
//     },
//     {
//       id: 6,
//       title: "Landscape Architecture",
//       mainCategory: "3D Modelling",
//       category: "SketchUp",
//       image: sketchUp,
//       images: [sketchUp],
//       description: "Comprehensive landscape design with drainage planning and plant specification."
//     },
//     {
//       id: 7,
//       title: "Twinmotion Exterior Visualization",
//       mainCategory: "Exterior",
//       category: "Twinmotion",
//       image: exteriorTwinmotion,
//       images: [exteriorTwinmotion, extwin1, extwin2, extwin3],
//       description: "High-quality exterior renderings showcasing architectural designs in a realistic environment."
//     },
//     {
//       id: 8,
//       title: "Lumion Exterior Rendering",
//       mainCategory: "Exterior",
//       category: "Lumion",
//       image: exteriorLumion,
//       images: [exteriorLumion, exlumi1, exlumi2, exlumi3, exlumi4],
//       description: "Stunning interior visualizations with detailed lighting and material effects."
//     },
//     {
//       id: 9,
//       title: "Twinmotion Exterior Design",
//       mainCategory: "Exterior",
//       category: "Twinmotion",
//       image: exteriorTwinmotion2,
//       images: [exteriorTwinmotion2, twoextwin1, twoextwin2],
//       description: "Exterior design project rendered in Twinmotion, highlighting architectural features and landscaping."
//     }
//   ];

//   const categories = [
//     { title: "Interior", types: ["Twinmotion", "Lumion"] },
//     { title: "Exterior", types: ["Twinmotion", "Lumion"] },
//     { title: "3D Modelling", types: ["Revit", "SketchUp"] },
//     { title: "AutoCAD", types: null },
//     { title: "MicroStation", types: null }
//   ];

//   const [selectedMain, setSelectedMain] = useState(null);
//   const [selectedType, setSelectedType] = useState(null);

//   const filteredProjects = allProjects.filter((project) => {
//     if (!selectedMain) return false;

//     if (selectedMain.types === null) {
//       return project.category.toLowerCase() === selectedMain.title.toLowerCase();
//     }

//     if (selectedType) {
//       return (
//         project.mainCategory?.toLowerCase() === selectedMain.title.toLowerCase() &&
//         project.category.toLowerCase() === selectedType.toLowerCase()
//       );
//     }

//     return false;
//   });

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 mb-6">
//             <motion.span initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>MY{" "}</motion.span>
//             <motion.span initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-[#1a0055]">PROJECTS</motion.span>
//           </h2>
//           <motion.p initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
//             A showcase of my recent CAD and design projects, demonstrating precision, creativity, and technical expertise across various disciplines.
//           </motion.p>

//           {/* Category Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mt-10">
//             {categories.map((cat) => (
//               <motion.button
//                 key={cat.title}
//                 onClick={() => {
//                   if (selectedMain?.title === cat.title) {
//                     setSelectedMain(null);
//                     setSelectedType(null);
//                   } else {
//                     setSelectedMain(cat);
//                     setSelectedType(null);
//                   }
//                 }}
//                 initial={{ scale: 0.5, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className={`px-5 py-2 rounded-lg font-medium transition-colors duration-500 text-white 
//                   ${selectedMain?.title === cat.title ? "bg-red-900" : "bg-[#1a0055]"}`}
//               >
//                 {cat.title}
//               </motion.button>
//             ))}
//           </div>

//           {/* Subtypes */}
//           {selectedMain && selectedMain.types && (
//             <div className="flex flex-wrap justify-center gap-4 mt-8">
//               {selectedMain.types.map((type) => (
//                 <button
//                   key={type}
//                   onClick={() =>
//                     setSelectedType((prevType) => (prevType === type ? null : type))
//                   }
//                   className={`px-4 py-2 rounded-md font-medium transition-colors duration-500 text-[#1a0055] 
//                     ${selectedType === type ? "bg-red-900 text-white" : "bg-blue-200"}`}
//                 >
//                   {type}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, i) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
//             >
//               <div
//                 className="relative group cursor-pointer"
//                 onClick={() => navigate(`/projects/${project.id}`)}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover transition-transform group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
//                   <ExternalLink className="text-white" size={24} />
//                 </div>
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-[#1a0055] text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {project.category}
//                   </span>
//                 </div>
//               </div>

//               <div onClick={() => navigate(`/projects/${project.id}`, { state: { project } })} className="p-6 relative group cursor-pointer " >
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
//                 <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
//                 <button
//                   onClick={() => navigate(`/projects/${project.id}`)}
//                   className="flex items-center gap-2 text-[#1a0055] hover:text-red-800 font-medium transition-colors"
//                 >
//                   <Image size={16} />
//                   View Details
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {filteredProjects.length === 0 && selectedMain && (
//           <div className="text-center mt-12 text-gray-500 font-medium">
//             {selectedMain.types && !selectedType
//               ? "Please select a subtype to view projects."
//               : "No projects found."}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;








// import React, { useState } from 'react';
// import { ExternalLink, Image } from 'lucide-react';
// import { motion } from 'framer-motion';
// import autoCAD from '../assets/autoCAD.png';
// import revit from '../assets/revit.png';

// const Projects = () => {
//   const [projects] = useState([
//     {
//       id: 1,
//       title: "Residential Complex Design",
//       category: "AutoCAD",
//       image:autoCAD,
//       description: "Complete architectural design for a modern residential complex including floor plans, elevations, and 3D renderings."
//     },
//     {
//       id: 2,
//       title: "Commercial Building CAD",
//       category: "Revit",
//       image: revit,
//       description: "Detailed technical drawings and structural plans for a multi-story commercial building project."
//     },
//     {
//       id: 3,
//       title: "Interior Design Project",
//       category: "SketchUp",
//       image:autoCAD,
//       description: "Modern interior design concept with 3D visualization and detailed layout planning."
//     },
//     {
//       id: 4,
//       title: "Infrastructure Planning",
//       category: "Twinmotion",
//       image:revit,
//       description: "Road and infrastructure planning using InRoads software for municipal development project."
//     },
//     {
//       id: 5,
//       title: "Mechanical Design",
//       category: "Microstation & InRoads",
//       image: autoCAD,
//       description: "Precise mechanical component design and technical documentation for manufacturing."
//     },
//     {
//       id: 6,
//       title: "Landscape Architecture",
//       category: "Lumion",
//       image: revit,
//       description: "Comprehensive landscape design with drainage planning and plant specification."
//     }
//   ]);

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-500 mb-6">
//             <motion.span initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1 }} viewport={{once:true}} className='inline-block'>MY  </motion.span> {" "}
//             <motion.span initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1 }} viewport={{once:true}} className="text-[#1a0055] inline-block">PROJECTS</motion.span>
//           </h2>
//           <motion.p initial={{scale:0.3}} whileInView={{scale:1}} transition={{duration:1}} viewport={{once:true}} className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
//             A showcase of my recent CAD and design projects, demonstrating precision, creativity, 
//             and technical expertise across various disciplines.
//           </motion.p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div 
//               key={project.id}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
//             >
//               <div className="relative group">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <ExternalLink className="text-white" size={24} />
//                 </div>
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-[#1a0055] text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {project.category}
//                   </span>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed mb-4">
//                   {project.description}
//                 </p>
//                 <button className="flex items-center gap-2 text-[#1a0055] hover:text-red-800 font-medium transition-colors duration-200">
//                   <Image size={16} />
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Note for dynamic functionality */}
//         <div className="text-center mt-12 p-6 bg-blue-100 rounded-xl border border-[#1a0055]">
//           <p className="text-[#1a0055] font-medium">
//             🚀 Dynamic project management functionality ready for integration
//           </p>
//           <p className="text-[#1a005599] mt-2">
//             Projects can be easily added, updated, or filtered through the admin interface
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
