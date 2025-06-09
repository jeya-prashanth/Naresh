import React from 'react';
import { Home, Palette, PenTool, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Interior & Exterior Design",
      description: "Creating stunning and functional interior and exterior designs that perfectly balance aesthetics with practicality. From concept to completion, I ensure every detail reflects your vision."
    },
    {
      icon: Palette,
      title: "Rendering",
      description: "High-quality 3D rendering services that bring your projects to life. Photorealistic visualizations help clients understand and approve designs before construction begins."
    },
    {
      icon: PenTool,
      title: "Technical Drawing",
      description: "Precise technical drawings and blueprints that meet industry standards. Detailed floor plans, elevations, and sections that serve as reliable guides for construction teams."
    },
    {
      icon: Settings,
      title: "CAD Software",
      description: "Expert use of professional CAD software including AutoCAD, Revit, MicroStation, and InRoads. Delivering accurate digital models and drawings for various engineering disciplines."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Section Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-500 mb-6">
            <motion.span initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1 }} viewport={{once:true}} className='inline-block'>MY  </motion.span> {" "}
            <motion.span initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1 }} viewport={{once:true}} className="text-[#1a0055] inline-block">SERVICES</motion.span>
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I offer comprehensive CAD and design services to help bring your projects from concept to reality 
            with precision and creativity.
          </p> */}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                initial={{scale:0.5}} whileInView={{scale:1}} transition={{duration:1, ease:"easeInOut" }} viewport={{once:true}} 
                whileHover={{y: -8, transition: { duration: 0.1, ease: "easeOut" }}}
                key={index}
                className="bg-[#1a0055] rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 border border-[#1a0055]"
              >
                <motion.div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent size={32} className="text-[#1a0055]" />
                </motion.div>
                <motion.h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {service.title}
                </motion.h3>
                <motion.p className="text-white leading-relaxed">
                  {service.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 ">
          <motion.p initial={{y:-20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, ease:"easeInOut" }} viewport={{once:true}}  className="text-lg text-gray-500 mb-6">
            Ready to start your project?
          </motion.p>
          <motion.button initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, ease:"easeInOut" }} viewport={{once:true}} 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#1a0055] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-200 hover:text-[#1a0055] transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;