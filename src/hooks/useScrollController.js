import { useEffect, useState } from 'react';

const useScrollController = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sessionIndex) => {
    console.log(sessionIndex);
    window.scrollTo({
      top: sessionIndex * (window.innerHeight / 2),
      behavior: 'smooth',
    });
  };

  const onWheel = (event) => {
    return;
    if (isScrolling) return;
    const direction = event.deltaY > 0;
    console.log(direction, event.deltaY);
    scrollToSection(currentSection + (direction ? 1 : -1));
  };

  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);

  useEffect(() => {
    const handleScroll = (event) => {
      const section = Math.floor(
        (window.scrollY + window.innerHeight / 4) / (window.innerHeight / 2)
      );
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { currentSection, scrollToSection, onWheel };
};

export default useScrollController;
