import { useEffect, useState } from 'react';

const useScrollController = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  const scrollToSection = (sessionIndex) => {
    window.scrollTo({
      top: sessionIndex * (window.innerHeight / 2),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setShowScrollIndicator(false);
  }, [currentSection]);

  useEffect(() => {
    const handleScroll = (event) => {
      const section = Math.floor(window.scrollY / (window.innerHeight / 2));
      setCurrentSection(section);
    };

    setTimeout(() => setShowScrollIndicator(true), 5000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollToSection, showScrollIndicator };
};

export default useScrollController;
