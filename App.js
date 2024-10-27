import { Route, Router } from "wouter";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./login";
import Signup from "./signup";
import "./App.css"; 

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif", 
    },
    palette: {
      primary: {
        main: "#5B945B", 
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
