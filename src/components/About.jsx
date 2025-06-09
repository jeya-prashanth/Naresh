import React from 'react';
import { Award, Users } from 'lucide-react';
import about from '../assets/img4.jpg'
import { motion } from 'framer-motion';

const About = () => {
  const tools = [
    'AutoCAD',
    'Revit', 
    'MicroStation',
    'InRoads'
  ];

//   const containerVariants = {
//    hidden: { opacity: 0, y: 100 },
//      visible: {
//        opacity: 1,
//        y: 0,
//      transition: {
//        duration: 1,
//        ease: "easeInOut",
//      when: "beforeChildren",
//        staggerChildren: 0.2,
//     },
//   },
// };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//      visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
//   };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-500 mb-6">
          <motion.span initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1 }} viewport={{once:true}} className='inline-block'>ABOUT  </motion.span> {" "}
          <motion.span initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1 }} viewport={{once:true}} className="text-[#1a0055] inline-block">ME</motion.span>
        </h2>

        {/* Main About Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Profile Image */}
          <motion.div className="lg:w-1/2">
            <motion.div className="relative">
              <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} whileHover={{scale:1.1}} transition={{duration:1, ease:"easeInOut" }} viewport={{once:true}} className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl hover:shadow-lg hover:scale-110 ">
                <img
                  src={about}
                  alt="About" 
                  className="w-full h-96 object-cover"
                />
              </motion.div>
              <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:1, ease:"easeInOut" }} viewport={{once:true}}  className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-700 rounded-2xl opacity-10"></motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="lg:w-1/2">
            
            <motion.p initial={{x:80, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1, ease:"easeInOut" }} viewport={{once:true}}  className="text-lg text-center lg:text-left text-gray-500 px-4 sm:px-0 mb-6 leading-relaxed">
              Dedicated CAD Technician skilled in producing accurate technical drawings and 3D models. Passionate about turning complex concepts into clear, detailed designs for successful engineering and construction projects.
            </motion.p>
            <motion.p initial={{x:50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1, ease:"easeInOut" }} viewport={{once:true}}  className="text-lg text-center lg:text-left text-gray-500 px-4 sm:px-0 mb-8 leading-relaxed">
              Experienced in diverse CAD tools with a sharp eye for detail, I deliver high-quality technical solutions that exceed expectations. I stay current with the latest technologies and industry best practices.
            </motion.p>
            
            <motion.div className='flex flex-col items-center justify-center '>
            <motion.h3 initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1, ease:"easeInOut" }} viewport={{once:true}}  className="text-2xl font-semibold text-[#1a0055] mb-4">Technical Tools & Software</motion.h3>
            <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1, ease:"easeInOut" }} viewport={{once:true}}  className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-5/6">
              {[
                "AutoCAD",
                "Revit",
                "MicroStation",
                "InRoads",
                "Twinmotion",
                "Lumion",
                "OpenRoads",
                "Sketchup"
              ].map((tool,index) => (
                <motion.div key={tool} initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} whileHover={{scale:1.1}} style={{ transition: "transform 0.01s ease-in-out" }} transition={{duration:0.6, delay:index * 0.3 }} viewport={{once:true}} 
                  className="bg-[#1a0055] text-white px-4 py-2 rounded-md text-center text-[16px] font-medium " >
                  {tool}
                </motion.div>
              ))}
            </motion.div>

            {/* <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-5/6" >
                  {[
                    "AutoCAD",
                    "Revit",
                    "MicroStation",
                    "InRoads",
                    "Twinmotion",
                    "Lumion",
                    "OpenRoads",
                    "Sketchup",
                  ].map((tool) => (
                  <motion.div key={tool} variants={itemVariants}
                    className="bg-[#1a0055] text-white px-4 py-2 rounded-md text-center text-[16px] font-medium hover:scale-105 transition-all duration-300" >
                    {tool}
                  </motion.div>
                  ))}
                </motion.div> */}

            </motion.div>
          </div>
        </div>

        {/* Experience and Projects Stats */}
        <div className="flex flex-col w-full md:flex-row items-center justify-around ">
          <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1, ease:"easeInOut" }} viewport={{once:true}}  className="flex flex-col items-center text-[#1a0055] text-center border-[2px] border-[#1a0055] px-10 sm:px-16 py-3 rounded-[25px] mb-10 md:mb-0 hover:scale-110 ">
            <h1 className='text-[60px] gap-[10px] font-medium '>2+</h1>
            <p className='text-[25px] font-medium '>YEARS OF EXPERIENCE</p>
          </motion.div>
          <motion.hr initial={{scale:0}} whileInView={{scale:1}} transition={{duration:1, ease:"easeInOut" }} viewport={{once:true}}  className='hidden md:block h-[180px] border-l-2 border-[#1a0055] '/>
          <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1, ease:"easeInOut" }} viewport={{once:true}}  className="flex flex-col items-center text-[#1a0055] text-center border-[2px] border-[#1a0055] px-10 sm:px-16 py-3 rounded-[25px] mb-0 md:mb-0 hover:scale-110 ">
            <h1 className='text-[60px] gap-[10px] font-medium '>10+</h1>
            <p className='text-[25px] font-medium '>PROJECTS COMPLETED</p>
          </motion.div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="bg-[#1a0055] rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 mt-5 ">
            <h1 className="text-[60px] font-medium gap-[10px] ">2+</h1>
            <p className="text-[25px] font-medium">Years of Experience</p>
          </div>
          
          <div className="bg-blue-200 rounded-2xl p-8 text-[#1a0055] text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 mt-5 ">
            <h1 className="text-[60px] font-medium gap-[10px] ">10+</h1>
            <p className="text-[25px] font-medium">Projects Completed</p>
          </div>
        </div> */}

        {/* <Award size={48} className="mx-auto mb-4 text-blue-200" /> */}
        {/* <Users size={48} className="mx-auto mb-4 text-blue-200" /> */}

      </div>
    </section>
  );
};

export default About;