import React, { useState } from "react";
import { Box, Button, Typography, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function MatchingPairs() {
  const [questions, setQuestions] = useState([
    { col1: "", col2: "", col1Image: null, col2Image: null },
    { col1: "", col2: "", col1Image: null, col2Image: null },
    { col1: "", col2: "", col1Image: null, col2Image: null },
  ]);

  const addQuestionRow = () => {
    setQuestions([...questions, { col1: "", col2: "", col1Image: null, col2Image: null }]);
  };

  const handleImageUpload = (index, col, event) => {
    const newQuestions = [...questions];
    newQuestions[index][`${col}Image`] = URL.createObjectURL(event.target.files[0]);
    setQuestions(newQuestions);
  };

  const handleDeleteRow = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleCopyRow = (index) => {
    setQuestions([...questions, { ...questions[index] }]);
  };

  const moveRow = (index, direction) => {
    const newQuestions = [...questions];
    const [movedRow] = newQuestions.splice(index, 1);
    newQuestions.splice(index + direction, 0, movedRow);
    setQuestions(newQuestions);
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
              sx={{ width: "220px" }} /* Ensures the TextField and Button match in width */
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
            <Button variant="outlined" sx={{ width: "220px", height: "40px" }}>
              My games
            </Button>
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
              <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <TextField
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
                <IconButton component="label">
                  <ImageIcon />
                  <input type="file" hidden onChange={(e) => handleImageUpload(index, "col1", e)} />
                </IconButton>
                {question.col1Image && (
                  <img
                    src={question.col1Image}
                    alt="Column 1"
                    style={{ width: "40px", height: "40px", borderRadius: "8px", marginLeft: "8px" }}
                  />
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1 }}>*Column 2</Typography>
            {questions.map((question, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <TextField
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
                <IconButton component="label">
                  <ImageIcon />
                  <input type="file" hidden onChange={(e) => handleImageUpload(index, "col2", e)} />
                </IconButton>
                {question.col2Image && (
                  <img
                    src={question.col2Image}
                    alt="Column 2"
                    style={{ width: "40px", height: "40px", borderRadius: "8px", marginLeft: "8px" }}
                  />
                )}
                <IconButton onClick={() => handleCopyRow(index)}>
                  <ContentCopyIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteRow(index)}>
                  <DeleteIcon />
                </IconButton>
                {index > 0 && (
                  <IconButton onClick={() => moveRow(index, -1)}>
                    <ArrowUpwardIcon />
                  </IconButton>
                )}
                {index < questions.length - 1 && (
                  <IconButton onClick={() => moveRow(index, 1)}>
                    <ArrowDownwardIcon />
                  </IconButton>
                )}
              </Box>
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
