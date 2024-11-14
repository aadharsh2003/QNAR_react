import React, { useState } from "react";
import { Box, Button, TextField, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import TimerIcon from "@mui/icons-material/Timer";
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
    <Box sx={{ display: "flex", justifyContent: "center", padding: "20px", backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <Box sx={{ width: "100%", maxWidth: "800px" }}> {/* Center content and set max-width for responsiveness */}
        {/* Content Generation Section */}
        <Box sx={{ mb: 4, backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Generate content with Mr Leaf!</Typography>
            <Button variant="outlined" startIcon={<AddIcon />}>+ Add your content</Button>
          </Box>
          <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
            Add your text and let our AI tool write your questions!
          </Typography>
          <TextField label="Activity title" fullWidth margin="normal" />
          <TextField label="Description" fullWidth margin="normal" />
          <TextField label="Add text" fullWidth margin="normal" />
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, mt: 2 }}> {/* Stacked on small screens */}
            <Button variant="contained" color="primary" onClick={handleGenerateQuestions} fullWidth>
              Get Questions
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleMenuClick}
              fullWidth
            >
              Set number of questions
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>5</MenuItem>
              <MenuItem onClick={handleMenuClose}>10</MenuItem>
              <MenuItem onClick={handleMenuClose}>15</MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Questions Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>Questions</Typography>
          {questions.map((q, index) => (
            <Box key={index} sx={{ mb: 3, padding: "15px", backgroundColor: "#f1f1f1", borderRadius: "8px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Q{index + 1}. {q.question}</Typography>
              <Box sx={{ mt: 1 }}>
                {q.options.map((option, optIndex) => (
                  <Typography key={optIndex} sx={{ ml: 2, color: optIndex === 0 ? "red" : "green" }}>{option}</Typography>
                ))}
              </Box>
              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <IconButton><EditIcon /></IconButton>
                <IconButton><TimerIcon /></IconButton>
              </Box>
            </Box>
          ))}
          <Button variant="outlined" color="secondary" startIcon={<ReplayIcon />} onClick={handleRegenerateQuestions} fullWidth>
            Regenerate questions
          </Button>
        </Box>

        {/* Footer Section */}
        <Box sx={{ borderTop: "1px solid #ddd", paddingTop: "15px", textAlign: "center" }}>
          <Typography variant="body2">Site map | Share your feedback</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Leaf;
