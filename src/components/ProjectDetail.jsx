import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) {
    return <div className="text-center py-20 text-gray-500">No project found.</div>;
  }

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 mt-20 ">

      <h1 className="text-3xl font-bold text-[#1a0055] mb-4">{project.title}</h1>
      <p className="text-gray-500 mb-8">{project.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center ">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} ${index + 1}`}
            className=" w-9/10 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
