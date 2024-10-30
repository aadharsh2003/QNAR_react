import React, { useState } from "react";
import { Box, Button, Typography, FormControl, FormControlLabel, RadioGroup, Radio, TextField } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import "./gameSettings.css";

function GameSettings() {
  const [images, setImages] = useState([null, null, null, null]);

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
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
        {/* Header */}
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: "fit-content" }}>
            <TextField
              placeholder="Search in community"
              size="small"
              variant="outlined"
              sx={{ width: "180px" }} // Set width here
              InputProps={{
                endAdornment: (
                  <Button variant="contained" sx={{ width: "100px", height: "100%" }}>Search</Button> // Matching height
                ),
              }}
            />
            <Button variant="outlined" sx={{ width: "180px", height: "40px" }}>My games</Button> {/* Matching width and height */}
          </Box>
        </Box>

        {/* Game Settings */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ color: "#5B945B", fontWeight: "bold", mb: 1 }}>
            Game settings
          </Typography>

          {/* Toggles for game settings */}
          {["Game sounds", "Repeat wrong answers", "Show correct answers when game ends"].map((label) => (
            <Box key={label} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography>{label}</Typography>
              <FormControl component="fieldset">
                <RadioGroup row defaultValue="On">
                  <FormControlLabel value="On" control={<Radio />} label="On" />
                  <FormControlLabel value="Off" control={<Radio />} label="Off" />
                </RadioGroup>
              </FormControl>
            </Box>
          ))}

          {/* Background image selection */}
          <Typography variant="h6" sx={{ color: "#5B945B", fontWeight: "bold", mb: 1 }}>
            Choose Background
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            {images.map((image, i) => (
              <Box
                key={i}
                sx={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid #DDD",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  style={{ position: "absolute", width: "100%", height: "100%", opacity: 0, cursor: "pointer" }}
                  onChange={(e) => handleImageUpload(i, e)}
                />
                {image ? (
                  <img src={image} alt={`Uploaded ${i}`} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} />
                ) : (
                  <ImageIcon sx={{ fontSize: 40, color: "#888" }} />
                )}
              </Box>
            ))}
          </Box>

          {/* Upload option */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              border: "1px dashed #888",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            <Typography sx={{ color: "#888" }}>or upload your own:</Typography>
            <Button variant="outlined" startIcon={<ImageIcon />} component="label">
              Add image
              <input type="file" hidden accept="image/*" onChange={(e) => handleImageUpload(images.length, e)} />
            </Button>
          </Box>
        </Box>

        {/* Next Button */}
        <Box sx={{ textAlign: "right", mt: 3 }}>
          <Button variant="contained" color="primary">
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default GameSettings;
