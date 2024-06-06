import './App.css';
import { Navbar } from '../src/components/Navbar/Navbar';
import { Hero } from '../src/components/HeroSection/Hero';
import { Skills } from '../src/components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Education } from '../src/components/Education/education';
import { darkTheme } from './utils/Themes'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components';
import { Project } from './components/Project/Project';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width:100%;
height :100%;
overflow-x:hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 200,
      easing: 'ease-in-sine',
      delay: 200,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Navbar />
          <Body>
              <Hero />
              <Wrapper>
                <Skills />
                <Experience/>
              </Wrapper>
              <Project/>
              <Wrapper>
                <Education/>
                <Contact/>
              </Wrapper>
             <Footer/>
          </Body>
        </Router>
      </ThemeProvider>

    </>
  );
}

export default App;
