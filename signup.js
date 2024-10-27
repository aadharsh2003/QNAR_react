import React from "react";
import { Box, Button, Typography, Link } from "@mui/material";
import GoogleIcon from "./logos/google.png";
import MicrosoftIcon from "./logos/microsoft.png";
import FacebookIcon from "./logos/facebook.png";
import AppleIcon from "./logos/apple.png";
import "./App.css"; // Assuming this includes the Poppins font import.

function Signup() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "'Poppins', sans-serif", // Applying Poppins font
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "350px", // Slightly smaller width
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 3, color: "#5B945B" }}>
          Welcome to Qnar
        </Typography>
        <Button
          variant="outlined"
          startIcon={<img src={GoogleIcon} alt="Google" style={{ width: "20px" }} />}
          sx={{ width: "100%", marginBottom: "1rem" }}
        >
          CONTINUE WITH GOOGLE
        </Button>
        <Button
          variant="outlined"
          startIcon={<img src={MicrosoftIcon} alt="Microsoft" style={{ width: "20px" }} />}
          sx={{ width: "100%", marginBottom: "1rem" }}
        >
          CONTINUE WITH MICROSOFT
        </Button>
        <Typography sx={{ textAlign: "center", marginBottom: "1rem" }}>
          or continue with
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "1rem",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<img src={FacebookIcon} alt="Facebook" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />}
            sx={{
              width: "70px",
              height: "70px", // Slightly smaller button size
              borderRadius: "50%",
              marginRight: "1rem",
              padding: 0,
            }}
          />
          <Button
            variant="outlined"
            startIcon={<img src={AppleIcon} alt="Apple" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />}
            sx={{
              width: "70px",
              height: "70px", // Slightly smaller button size
              borderRadius: "50%",
              padding: 0,
            }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#5B945B",
            color: "#fff",
            width: "100%",
            marginBottom: "1rem",
            padding: "10px 0",
            "&:hover": { backgroundColor: "#4F7942" },
          }}
        >
          Sign up
        </Button>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Already have an account?{" "}
          <Link href="/login" underline="hover">
            Log in
          </Link>
        </Typography>
      </Box>
      <Box sx={{ width: "50%", paddingLeft: "20px" }}>
        <Typography variant="h5">Lorem ipsum dolor</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur. Diam scelerisque quis metus eu
          sollicitudin tellus nec habitasse non.
        </Typography>
      </Box>
    </Box>
  );
}

export default Signup;
