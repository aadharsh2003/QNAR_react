import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyActivities() {
  const [bundles, setBundles] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortOption, setSortOption] = useState("Name");
  const navigate = useNavigate();

  // Fetch bundles from database
  useEffect(() => {
    const fetchBundles = async () => {
      try {
        const response = await axios.get("/api/bundles");
        setBundles(response.data);
      } catch (error) {
        console.error("Error fetching bundles:", error);
      }
    };
    fetchBundles();
  }, []);

  const handleBundleClick = (id) => {
    setBundles((prevBundles) =>
      prevBundles.map((bundle) =>
        bundle.id === id
          ? { ...bundle, isSelected: !bundle.isSelected }
          : { ...bundle, isSelected: false }
      )
    );
  };

  const handleAddBundle = () => {
    navigate("/add-bundle");
  };

  const handleAddGame = (bundleId) => {
    navigate(`/add-game/${bundleId}`);
  };

  const handleSort = (option) => {
    setSortOption(option);
    const sortedBundles = [...bundles].sort((a, b) => {
      if (option === "Name") return a.title.localeCompare(b.title);
      if (option === "Date") return new Date(a.date) - new Date(b.date);
      return 0;
    });
    setBundles(sortedBundles);
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#F5F9F7",
        minHeight: "100vh",
        display: "block",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            fontWeight: "bold",
            textAlign: "left", 
          }}
        >
          My Activities
        </Typography>

        {/* Bundles Filter */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              Sort by: {sortOption}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleSort("Name")}>Name</MenuItem>
              <MenuItem onClick={() => handleSort("Date")}>Date</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" sx={{ backgroundColor: "#5B945B", color: "#FFF" }}>
              My Bundles
            </Button>
            <Button variant="outlined">All Games</Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            alignItems: "flex-start", // Keep items aligned at the top
            justifyContent: "flex-start", // Keep items aligned to the left
          }}
        >
          {/* Render Bundles */}
          {bundles.map((bundle) => (
            <Box key={bundle.id} sx={{ width: "250px" }}>
              <Box
                onClick={() => handleBundleClick(bundle.id)}
                sx={{
                  padding: "15px",
                  borderRadius: "8px",
                  backgroundColor: bundle.isSelected ? "#FCE4E4" : bundle.color,
                  border: `1px solid #C4C4C4`,
                  cursor: "pointer",
                }}
              >
                <TextField
                  placeholder="Bundle Title"
                  value={bundle.title}
                  onChange={(e) =>
                    setBundles((prevBundles) =>
                      prevBundles.map((b) =>
                        b.id === bundle.id ? { ...b, title: e.target.value } : b
                      )
                    )
                  }
                  fullWidth
                  margin="normal"
                />
                <TextField
                  placeholder="Unit"
                  value={bundle.unit}
                  onChange={(e) =>
                    setBundles((prevBundles) =>
                      prevBundles.map((b) =>
                        b.id === bundle.id ? { ...b, unit: e.target.value } : b
                      )
                    )
                  }
                  fullWidth
                  margin="normal"
                />
                <TextField
                  placeholder="Grade"
                  value={bundle.grade}
                  onChange={(e) =>
                    setBundles((prevBundles) =>
                      prevBundles.map((b) =>
                        b.id === bundle.id ? { ...b, grade: e.target.value } : b
                      )
                    )
                  }
                  fullWidth
                  margin="normal"
                />
                <TextField
                  placeholder="Members"
                  value={bundle.members}
                  onChange={(e) =>
                    setBundles((prevBundles) =>
                      prevBundles.map((b) =>
                        b.id === bundle.id ? { ...b, members: e.target.value } : b
                      )
                    )
                  }
                  fullWidth
                  margin="normal"
                />
                <TextField
                  placeholder="Date"
                  value={bundle.date}
                  onChange={(e) =>
                    setBundles((prevBundles) =>
                      prevBundles.map((b) =>
                        b.id === bundle.id ? { ...b, date: e.target.value } : b
                      )
                    )
                  }
                  fullWidth
                  margin="normal"
                />
              </Box>

              {/* Add Game Button */}
              {bundle.isSelected && (
                <Box
                  sx={{
                    backgroundColor: "#FFF8E3",
                    borderRadius: "8px",
                    padding: "10px",
                    mt: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ width: "100%", mt: 1 }}
                    onClick={() => handleAddGame(bundle.id)}
                  >
                    Add Game
                  </Button>
                </Box>
              )}
            </Box>
          ))}

          {/* Add Bundle Section */}
          <Box
            onClick={handleAddBundle}
            sx={{
              width: "250px",
              padding: "15px",
              borderRadius: "8px",
              border: "1px dashed #C4C4C4",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F9F9F9",
              cursor: "pointer",
            }}
          >
            <IconButton>
              <AddIcon fontSize="large" />
            </IconButton>
            <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
              Add Bundle
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MyActivities;
