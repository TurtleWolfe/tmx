import { Box } from "@mui/material";
import FaveList from "../components/FaveList";
// import svg_art from "../assets/coding_art.svg";
// import MuiCard from "../components/muiCard";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <FaveList />
    </Box>
  );
}
