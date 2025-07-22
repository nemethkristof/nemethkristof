import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Example',
      year: '2020 - 2024',
    },
    {
      degree: 'High School Diploma',
      institution: 'Example High School',
      year: '2016 - 2020',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="space-y-4">
          {educationData.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
              <p className="text-gray-500 dark:text-gray-400">{item.year}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;