import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./login";
import Signup from "./signup";
import Game from "./game";
import MatchingPairs from "./MatchingPairs";
import GameSettings from "./gameSettings";
import MatchingPairsGame from "./MatchingPairsGame";
import Leaf from "./Leaf";
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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game-settings" element={<GameSettings />} />
          <Route path="/matching-pairs" element={<MatchingPairs />} />
          <Route path="/matching-pairs-game" element={<MatchingPairsGame />} />
          <Route path="/leaf" element={<Leaf />} /> {/* Added new route for Leaf */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
