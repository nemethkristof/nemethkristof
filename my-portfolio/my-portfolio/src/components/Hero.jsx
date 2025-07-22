import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">I am a passionate developer with experience in building dynamic web applications.</p>
        <a href="#projects" className="mt-6 inline-block px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;