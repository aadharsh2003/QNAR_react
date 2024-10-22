import { Route, Router } from "wouter";
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "@fontsource/quicksand";
import './App.css';
import Login from "./login";  // Corrected path
import Signup from "./signup";  // Corrected path

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Quicksand',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
