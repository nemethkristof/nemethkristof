import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementPosition = windowHeight * threshold;

    if (scrollY > elementPosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible ? { initial: { opacity: 0 }, animate: { opacity: 1 } } : { initial: { opacity: 0 }, animate: { opacity: 0 } };
};

export default useScrollAnimation;