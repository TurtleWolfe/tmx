import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/teamMX-logo.png";
import "../assets/css/style.css";
import { ClipLoader } from "react-spinners";
import { Button, ButtonGroup, Slide, Typography } from "@mui/material";

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
        width: "100%",
        height: "100vh",
        background: "linear-gradient(180deg, #e20e2d, #aa0f26)",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box className="splashBG">
        <div>
          <img src={logo} alt="Team Logo" width={400} />
        </div>
        <div>
          {loading ? (
            // While loading show loader image from react-spinners
            <div className="sweet-loading">
              <ClipLoader color="#edc314" loading={loading} size={50} />
            </div>
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
