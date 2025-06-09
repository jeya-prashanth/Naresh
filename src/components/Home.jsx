import React from 'react';
import { Download, Mail } from 'lucide-react';
import profile from '../assets/img1.jpg'
import profile1 from '../assets/img2.jpg'
import { easeOut, motion } from 'framer-motion';
import myresume from '../assets/naresh_CV.pdf';

const Home = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Profile Image */}
          <motion.div initial={{x:-100, opacity:0 }} animate={{x:0, opacity:1 }} transition={{duration:1, ease:"easeOut" }} className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl hover:shadow-4xl hover:scale-110 trantition-all duration-500 border-8 border-white bg-gradient-to-br from-blue-100 to-blue-200">
                <img 
                  src={profile1}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-500 rounded-full opacity-20"></div>
            </div>
          </motion.div>
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-0 mt-8 lg:mt-0 ">
            <motion.h1 initial={{x:100, opacity:0 }} animate={{x:0,opacity:1 }} transition={{duration:1}} className="text-4xl md:text-5xl lg:text-[80px] font-bold text-gray-500 mb-6 leading-tight">
              <motion.span initial={{x:100, opacity:0 }} animate={{x:0, opacity:1 }} transition={{duration:1}} >I'm </motion.span> 
              <motion.span initial={{x:100, opacity:0 }} animate={{x:0, opacity:1 }} transition={{delay:0.3, duration:1 }} className="text-[#1a0055] font-bold ">BN Naresh</motion.span>
            </motion.h1>
            <motion.h2 initial={{x:50, opacity:0}} animate={{x:-0, opacity:1}} transition={{duration:1, ease:"easeInOut"}} className="text-xl md:text-2xl text-[#1a0055] mb-4 font-medium">
              CAD Technician
            </motion.h2>
            {/* <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From Jaffna, Sri Lanka
            </p> */}
            <motion.p initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, ease:"easeInOut" }} className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
              Passionate about creating precise technical drawings and innovative designs using cutting-edge CAD software. Bringing ideas to life through detailed engineering solutions.
            </motion.p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
              <motion.button initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1, ease:"easeInOut" }} 
                whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: easeOut } }}
                onClick={scrollToContact}
                className="bg-[#1a0055] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-200 hover:text-[#1a0055]  flex items-center justify-center gap-2 shadow-lg"
              >
                <Mail size={20} />
                Connect With Me
              </motion.button>
              {/* <motion.button onClick={()=>downloadResume()} initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1, ease:"easeInOut" }} whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: easeOut } }} 
                className="bg-white text-[#1a0055] border-2 border-[#1a0055] px-8 py-4 rounded-lg font-semibold hover:border-blue-200 hover:text-[#1a0055] hover:bg-blue-200 flex items-center justify-center gap-2 shadow-lg">
                <Download size={20} />
                My Resume
              </motion.button> */}
              <motion.a href={myresume} download="Naresh_CV.pdf" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: easeOut } }}
                className="bg-white text-[#1a0055] border-2 border-[#1a0055] px-8 py-4 rounded-lg font-semibold hover:border-blue-200 hover:text-[#1a0055] hover:bg-blue-200 flex items-center justify-center gap-2 shadow-lg">
                <Download size={20} />
                My Resume
              </motion.a>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Home;