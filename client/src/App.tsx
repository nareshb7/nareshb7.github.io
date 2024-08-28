import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material';
import About from 'pages/about';
import ContactUs from 'pages/contact-us';
import Info from 'pages/info';
import Navbar from 'pages/navbar';
import Projects from 'pages/projects';
import Skills from 'pages/skills';
import { theme } from 'theme';
import './App.css';
import { useAuthContext } from './auth';
const Box = lazy(() => import('@mui/material/Box'));
const CssBaseline = lazy(() => import('@mui/material/CssBaseline'));

const App = () => {
  const { mode } = useAuthContext();
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default App;
