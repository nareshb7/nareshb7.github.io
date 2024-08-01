import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from 'pages/navbar';
import { theme } from 'theme';
import './App.css';
import { useAuthContext } from './auth';

const App = () => {
  const { mode } = useAuthContext();
  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
