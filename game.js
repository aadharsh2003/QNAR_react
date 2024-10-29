import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./game.css"; 

const Game = () => {
  return (
    <Box className="game-popup">
      <Box className="game-header">
        <Typography variant="h4" className="game-title">
          Choose your game
        </Typography>
        <Typography variant="subtitle1" className="game-subtitle">
          Select a template to start creating a game
        </Typography>
        <Box className="game-buttons">
          <Button variant="contained" className="my-games-button">
            My Games
          </Button>
          <Button variant="outlined" className="new-game-button">
            New Game
          </Button>
        </Box>
      </Box>

      {/* Game Card Grid */}
      <Box className="game-card-container">
        {[...Array(4)].map((_, index) => (
          <Box key={index} className="game-card">
            <Box className="game-image-placeholder" />
            <Box className="game-card-content">
              <Typography variant="h6" className="game-card-title">
                Game title
              </Typography>
              <Typography variant="body2" className="game-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box className="game-footer">
        <Typography variant="body2" className="game-footer-text">
          Lorem ipsum dolor sit amet consectetur. Ipsum sit amet dolor imperdiet amet arcu non orci.
        </Typography>
      </Box>
    </Box>
  );
};

export default Game;
