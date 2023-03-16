import { useState, useEffect, useMemo } from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Code from './components/Code/Code';
import BasicProfile from './components/BasicProfile/BasicProfile';
import Window from './components/Window/Window';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';

import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

import useScrollController from './hooks/useScrollController';
import { getWindowsText } from './utils/textUtils';
import { projects, education } from './data';

import config from './config';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { currentSection, scrollToSection } = useScrollController();
  const texts = useMemo(() => getWindowsText(currentSection), [currentSection]);

  return (
    <Container className="portfolio-content">
      <Header />
      <Container className="portfolio-section">
        <BasicProfile scrollToSection={scrollToSection} />
        <Window>
          <Code text={texts[0]} />
        </Window>
      </Container>
      <Container className="portfolio-section">
        <div className="portfolio-section-header">
          <span>Projects</span>
          <Button
            variant="outline-primary"
            onClick={() => window.open(config.gitHubUrl, '_blank').focus()}
          >
            <Icon
              path={mdiGithub}
              size={1}
            />
          </Button>
        </div>
        <Grid data={projects} />
      </Container>
    </Container>
  );
}

export default App;
