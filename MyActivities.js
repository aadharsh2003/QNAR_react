import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  TextField,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem as MuiMenuItem,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";

// Mock Backend for Simulating API 
const mockBackend = {
  bundles: [],

  getBundles: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockBackend.bundles), 500);
    });
  },

  addBundle: async (bundle) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newBundle = { ...bundle, id: Date.now() };
        mockBackend.bundles.push(newBundle);
        resolve(newBundle);
      }, 500);
    });
  },
};

const API_BASE_URL = 'http://localhost:3000'; 

function MyActivities() {
  const [bundles, setBundles] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortOption, setSortOption] = useState("Name");
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bundleData, setBundleData] = useState({
    title: "",
    unit: "",
    grade: "",
    subject: "",
  });

  // Fetch bundles from mock backend (replacing axios.get)
  useEffect(() => {
    const fetchBundles = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await mockBackend.getBundles(); // Using mock backend
        setBundles(data);
      } catch (error) {
        setError("Error fetching bundles: " + error.message);
        console.error("Error fetching bundles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBundles();
  }, []);

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

  const handleOpenModal = () => {
    setOpenModal(true);
    setError(null);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setBundleData({ title: "", unit: "", grade: "", subject: "" });
    setError(null);
  };

  const handleSaveBundle = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newBundle = await mockBackend.addBundle(bundleData); 
      setBundles((prev) => [...prev, newBundle]);
      setOpenModal(false);
    } catch (error) {
      setError("Error saving bundle: " + error.message);
      console.error("Error saving bundle:", error);
    } finally {
      setIsLoading(false);
    }
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

        {/* Loading and Error Messages */}
        {isLoading && (
          <Alert severity="info" sx={{ mb: 2 }}>
            Loading bundles...
          </Alert>
        )}
        {error && !openModal && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          {bundles.map((bundle) => (
            <Box key={bundle.id} sx={{ width: "250px" }}>
              <Box
                sx={{
                  padding: "15px",
                  borderRadius: "8px",
                  backgroundColor: "#FFF",
                  border: `1px solid #C4C4C4`,
                  cursor: "pointer",
                }}
              >
                <Typography variant="h6">{bundle.title}</Typography>
                <Typography variant="body2">Unit: {bundle.unit}</Typography>
                <Typography variant="body2">Grade: {bundle.grade}</Typography>
                <Typography variant="body2">Subject: {bundle.subject}</Typography>
              </Box>
            </Box>
          ))}

          {/* Add Bundle Section */}
          <Box
            onClick={handleOpenModal}
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

      {/* Add Bundle Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>
          Add New Bundle
          <Typography variant="body2" sx={{ mt: 1 }}>
            Fill out the following information to create a bundle.
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Bundle Title"
            value={bundleData.title}
            onChange={(e) => setBundleData({ ...bundleData, title: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Unit Title"
            value={bundleData.unit}
            onChange={(e) => setBundleData({ ...bundleData, unit: e.target.value })}
            margin="normal"
          />
          <Select
            fullWidth
            value={bundleData.grade}
            onChange={(e) => setBundleData({ ...bundleData, grade: e.target.value })}
            displayEmpty
            margin="normal"
          >
            <MuiMenuItem value="">
              <em>Select Grade</em>
            </MuiMenuItem>
            {Array.from({ length: 12 }, (_, i) => (
              <MuiMenuItem key={i + 1} value={`Grade ${i + 1}`}>
                Grade {i + 1}
              </MuiMenuItem>
            ))}
          </Select>
          <TextField
            fullWidth
            label="Select Subject"
            value={bundleData.subject}
            onChange={(e) => setBundleData({ ...bundleData, subject: e.target.value })}
            margin="normal"
          />
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button
            onClick={handleSaveBundle}
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Next"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default MyActivities;
