import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from 'pages/navbar';
import { theme } from 'theme';
import './App.css';
import { useAuthContext } from './auth';
import Info from 'pages/info';
import Projects from 'pages/projects';
import Skills from 'pages/skills';
import About from 'pages/about';
import ContactUs from 'pages/contact-us';

const App = () => {
  const { mode } = useAuthContext();
  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Navbar />
      <Box>
        <Info />
        <Projects />
        <Skills />
        <About />
        <ContactUs />
      </Box>
    </ThemeProvider>
  );
};

export default App;
