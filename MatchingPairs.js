import React, { useState } from "react";
import { Box, Button, Typography, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function MatchingPairs() {
  const [questions, setQuestions] = useState([
    { col1: "", col2: "" },
    { col1: "", col2: "" },
    { col1: "", col2: "" },
  ]);

  const addQuestionRow = () => {
    setQuestions([...questions, { col1: "", col2: "" }]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#F5F5F5",
        height: "100vh",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "800px", padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ color: "#5B945B", fontWeight: "bold" }}>
              Matching Pairs
            </Typography>
            <Typography variant="body2" sx={{ color: "#888" }}>
              Create a matching pairs game and share it with your audience.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TextField
              placeholder="Search in community"
              size="small"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
            <Button variant="outlined">My games</Button>
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ color: "#5B945B", fontWeight: "bold", mb: 1 }}>
            Add content
          </Typography>
          <TextField
            label="*Activity title"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Description"
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1 }}>*Column 1</Typography>
            {questions.map((question, index) => (
              <TextField
                key={`col1-${index}`}
                placeholder="Add text"
                fullWidth
                margin="normal"
                variant="outlined"
                value={question.col1}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[index].col1 = e.target.value;
                  setQuestions(newQuestions);
                }}
              />
            ))}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1 }}>*Column 2</Typography>
            {questions.map((question, index) => (
              <TextField
                key={`col2-${index}`}
                placeholder="Add text"
                fullWidth
                margin="normal"
                variant="outlined"
                value={question.col2}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[index].col2 = e.target.value;
                  setQuestions(newQuestions);
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Button to add more questions */}
        <Button variant="outlined" color="secondary" sx={{ mb: 3 }} onClick={addQuestionRow}>
          + Add more Questions
        </Button>

        <Box sx={{ textAlign: "right" }}>
          <Button variant="contained" color="primary">
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MatchingPairs;
