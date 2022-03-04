import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/teamMX-logo.png";
import "../assets/css/SplashScreen.css";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Slide,
  Typography,
} from "@mui/material";

export default function SplashScreen(props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "85vh",
        background: "linear-gradient(180deg, #e20e2d, #aa0f26)",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        className="splashBG"
        sx={{
          width: 1,
          height: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20%",
        }}
      >
        <div>
          <img src={logo} alt="Team Logo" width={400} />
        </div>
        <div>
          {loading ? (
            // While loading show loader image from react-spinners
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress color="secondary" size={50} />
            </Box>
          ) : (
            //After loading is complete, show buttons
            <Slide direction="up" in={!loading}>
              <ButtonGroup orientation="vertical">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ m: 2, width: 300, height: 50 }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <Typography variant="h6">Sign In</Typography>
                </Button>
              </ButtonGroup>
            </Slide>
          )}
        </div>
      </Box>
    </Box>
  );
}
