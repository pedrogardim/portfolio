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
  const { currentSection, scrollToSection, onWheel } = useScrollController();
  const texts = useMemo(() => getWindowsText(currentSection), [currentSection]);

  return (
    <Container
      onWheel={onWheel}
      onClick={() => scrollToSection(currentSection + 1)}
    >
      <Header />
      <Container className="pfSection">
        <BasicProfile scrollToSection={scrollToSection} />
      </Container>
      <Container className="pfSection">
        <Window>
          <Code text={texts[0]} />
        </Window>
      </Container>
      <Container className="pfSection">
        <ProjectGrid />
      </Container>
      <Container className="pfSection">
        <BasicProfile scrollToSection={scrollToSection} />
      </Container>
      <Container className="pfSection">
        <Window>
          <Code text={texts[1]} />
        </Window>
      </Container>
      <Container className="pfSection">
        <ProjectGrid />
      </Container>
    </Container>
  );
}

export default App;
