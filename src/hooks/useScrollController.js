import { useEffect, useState } from 'react';

const useScrollController = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (sessionIndex) => {
    console.log(sessionIndex);
    window.scrollTo({
      top: sessionIndex * (window.innerHeight / 2),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = (event) => {
      const section = Math.floor(window.scrollY / (window.innerHeight / 2));
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { currentSection, scrollToSection };
};

export default useScrollController;
