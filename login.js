import React from "react";
import { Box, Button, Typography, Link } from "@mui/material";
import GoogleIcon from "./logos/google.png";
import MicrosoftIcon from "./logos/microsoft.png";
import FacebookIcon from "./logos/facebook.png";
import AppleIcon from "./logos/apple.png";
import OnlineImage from "./logos/online.png";

function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 3, color: "#5B945B" }}>
          Login to Qnar
        </Typography>
        <Button
          variant="outlined"
          startIcon={<img src={GoogleIcon} alt="Google" style={{ width: "20px" }} />}
          sx={{ width: "100%", marginBottom: "1rem", textTransform: "none" }}
        >
          Continue with Google
        </Button>
        <Button
          variant="outlined"
          startIcon={<img src={MicrosoftIcon} alt="Microsoft" style={{ width: "20px" }} />}
          sx={{ width: "100%", marginBottom: "1rem", textTransform: "none" }}
        >
          Continue with Microsoft
        </Button>
        <Typography sx={{ textAlign: "center", marginBottom: "1rem", color: "#5B945B" }}>
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
            startIcon={<img src={FacebookIcon} alt="Facebook" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          />
          <Button
            variant="outlined"
            startIcon={<img src={AppleIcon} alt="Apple" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Don’t have an account?{" "}
          <Link href="/signup" underline="hover">
            Sign up
          </Link>
        </Typography>
      </Box>
      <Box sx={{ width: "50%", paddingLeft: "20px" }}>
        <img src={OnlineImage} alt="Online Learning" style={{ width: "100%" }} />
        <Typography variant="h5">Lorem ipsum dolor</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur. Diam scelerisque quis metus eu
          sollicitudin tellus nec habitasse non.
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
