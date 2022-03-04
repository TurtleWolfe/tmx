import { ArrowBack } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import HideOnScroll from "../../utility/HideOnScroll";
import bgImage from "../../../assets/img/Oval_1x.png";

export default function MobileHeader(props) {
  return (
    <HideOnScroll>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "primary",
        }}
      >
        <AppBar position="static" elevation={0}>
          <Box
            sx={{
              height: 150,
            }}
          >
            <Toolbar>
              <Button
                variant="contained"
                color={"secondary"}
                onClick={() => {
                  window.alert("Back button clicked");
                }}
              >
                <ArrowBack />
              </Button>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "150px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4">{props.mainHeader}</Typography>
                <Typography variant="h6">{props.subHeader}</Typography>
              </Box>
            </Toolbar>
          </Box>
        </AppBar>
      </Box>
    </HideOnScroll>
  );
}
