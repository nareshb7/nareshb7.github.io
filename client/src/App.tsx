import React, { lazy, Suspense } from 'react';
import { ThemeProvider, Typography } from '@mui/material';
import About from 'pages/about';
import ContactUs from 'pages/contact-us';
import Info from 'pages/info';
import Navbar from 'pages/navbar';
import Projects from 'pages/projects';
import Skills from 'pages/skills';
import { theme } from 'theme';
import './App.css';
import { useAuthContext } from './auth';
import { formatDate } from 'utils/util';
import Loader from 'common/loader';
const Box = lazy(() => import('@mui/material/Box'));
const CssBaseline = lazy(() => import('@mui/material/CssBaseline'));
const deployedDate = formatDate(process.env.REACT_APP_DEPLOY_DATE || "")

const App = () => {
  const { mode } = useAuthContext();
  return (
    <Suspense fallback={<Loader />}>
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
        <Typography variant="h5">
          Last Deployed On: {deployedDate}
        </Typography>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
