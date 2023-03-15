import { useState, useEffect, useMemo } from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';

import Code from './components/Code/Code';
import BasicProfile from './components/BasicProfile/BasicProfile';
import Window from './components/Window/Window';
import Header from './components/Header/Header';
import ProjectGrid from './components/ProjectGrid/ProjectGrid';

import useScrollController from './hooks/useScrollController';
import { getWindowsText } from './utils/textUtils';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { currentSection, scrollToSection } = useScrollController();
  const texts = useMemo(() => getWindowsText(currentSection), [currentSection]);

  return (
    <Container className="portfolio-content">
      <Header />
      <Container className="portfolio-section">
        <BasicProfile scrollToSection={scrollToSection} />
      </Container>
      <Container className="portfolio-section">
        <Window>
          <Code text={texts[0]} />
        </Window>
      </Container>
      <Container className="portfolio-section">
        <ProjectGrid />
      </Container>
      <Container className="portfolio-section">
        <BasicProfile scrollToSection={scrollToSection} />
      </Container>
      <Container className="portfolio-section">
        <Window>
          <Code text={texts[1]} />
        </Window>
      </Container>
      <Container className="portfolio-section">
        <ProjectGrid />
      </Container>
    </Container>
  );
}

export default App;
