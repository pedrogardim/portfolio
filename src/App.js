import { useState } from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

import Code from './components/Code/Code';
import ProjectModal from './components/ProjectModal/ProjectModal';
import BasicProfile from './components/BasicProfile/BasicProfile';
import Window from './components/Window/Window';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';

import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

import Lottie from 'react-lottie-player';

import scrolldown from './assets/animations/scrolldown.json';

import useScrollController from './hooks/useScrollController';

import { projects } from './data';
import { intro } from './data/texts';

import config from './config';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [openedProject, setOpenedProject] = useState(null);
  const { scrollToSection, showScrollIndicator } = useScrollController();

  return (
    <Container className="portfolio-content">
      <Header />
      <Container className="portfolio-section">
        <BasicProfile scrollToSection={scrollToSection} />
        <Window>
          <Code text={intro} />
        </Window>
        <Fade
          unmountOnExit
          in={showScrollIndicator}
          timeout={500}
        >
          <Lottie
            play
            loop
            animationData={scrolldown}
            className="scrollDownLottie"
          />
        </Fade>
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
        <Grid
          data={projects}
          onSelect={setOpenedProject}
        />
        <ProjectModal
          data={openedProject !== null && projects[openedProject]}
          onClose={() => setOpenedProject(null)}
        />
      </Container>
    </Container>
  );
}

export default App;
