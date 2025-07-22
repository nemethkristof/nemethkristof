import React from 'react';
import { motion } from 'framer-motion';

function Work() {
  const workExperience = [
    {
      title: 'Software Engineer',
      company: 'Tech Company',
      duration: '2021 - Present',
      description: 'Developing and maintaining web applications using React and Node.js.'
    },
    {
      title: 'Intern',
      company: 'Another Tech Company',
      duration: '2020 - 2021',
      description: 'Assisted in the development of internal tools and applications.'
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
              <p className="text-gray-500 dark:text-gray-400">{job.duration}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;