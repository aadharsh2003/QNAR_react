import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import TimerIcon from "@mui/icons-material/Timer";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from "@mui/icons-material/Replay";
import AddIcon from "@mui/icons-material/Add";

function Leaf() {
  const [questions, setQuestions] = useState([
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      options: ["A. Option 1", "B. Option 2", "C. Option 3", "D. Option 4"],
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      options: ["A. Option 1", "B. Option 2", "C. Option 3", "D. Option 4"],
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      options: ["A. Option 1", "B. Option 2", "C. Option 3", "D. Option 4"],
    },
  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleGenerateQuestions = () => {
    // Logic to generate questions
  };

  const handleRegenerateQuestions = () => {
    // Logic to regenerate questions
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f8f8f8",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
        }}
      >
        {/* Content Generation Section */}
        <Box
          sx={{
            mb: 4,
            backgroundColor: "#ffffff", // Background remains white
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack on small screens
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#5c5a58",
                fontSize: "1.2rem",
              }}
            >
              Generate content with Mr Leaf!
            </Typography>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{
                borderColor: "#ffa07a",
                color: "#ffa07a",
                textTransform: "none",
                fontSize: "0.9rem",
                mt: { xs: 2, sm: 0 },
              }}
            >
              + Add your content
            </Button>
          </Box>
          <Typography
            variant="body2"
            sx={{ mb: 2, color: "#666", fontSize: "0.9rem" }}
          >
            Add your text and let our AI tool write your questions!
          </Typography>
          <TextField label="Activity title" fullWidth margin="normal" />
          <TextField label="Description" fullWidth margin="normal" />
          <TextField label="Add text" fullWidth margin="normal" />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack on small screens
              gap: 2,
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffa07a",
                color: "#fff",
                textTransform: "none",
                "&:hover": { backgroundColor: "#ff8c69" },
              }}
              onClick={handleGenerateQuestions}
              fullWidth
            >
              Get Questions
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ffa07a",
                color: "#ffa07a",
                textTransform: "none",
              }}
              onClick={handleMenuClick}
              fullWidth
            >
              Set number of questions
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>5</MenuItem>
              <MenuItem onClick={handleMenuClose}>10</MenuItem>
              <MenuItem onClick={handleMenuClose}>15</MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Questions Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#5c5a58",
              fontSize: "1.1rem",
            }}
          >
            Questions
          </Typography>
          {questions.map((q, index) => (
            <Box
              key={index}
              sx={{
                mb: 3,
                padding: "15px",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                }}
              >
                <IconButton sx={{ color: "#ffa07a" }}>
                  <EditIcon />
                </IconButton>
                <IconButton sx={{ color: "#ffa07a" }}>
                  <TimerIcon />
                </IconButton>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "#5c5a58",
                  fontSize: "1rem",
                }}
              >
                Q{index + 1}. {q.question}
              </Typography>
              <Box sx={{ mt: 1 }}>
                {q.options.map((option, optIndex) => (
                  <Box
                    key={optIndex}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      ml: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        color: optIndex === 0 ? "#ff4500" : "#228b22",
                        fontSize: "0.9rem",
                      }}
                    >
                      {option}
                    </Typography>
                    <Box>
                      <IconButton sx={{ color: "#228b22" }}>
                        <EditIcon />
                      </IconButton>
                      <IconButton sx={{ color: "#228b22" }}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
          <Button
            variant="outlined"
            sx={{
              color: "#ffa07a",
              borderColor: "#ffa07a",
              textTransform: "none",
            }}
            startIcon={<ReplayIcon />}
            onClick={handleRegenerateQuestions}
            fullWidth
          >
            Regenerate questions
          </Button>
        </Box>

        {/* Footer Section */}
        <Box
          sx={{
            borderTop: "1px solid #ddd",
            paddingTop: "15px",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#666" }}>
            Site map | Share your feedback
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Leaf;
