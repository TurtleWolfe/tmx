import { Box } from "@mui/material";
import svg_art from "../assets/coding_art.svg";
import MuiCard from "../components/muiCard";
import MuImageCard from "../components/muImageCard";

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
      <h1>Home</h1>
      {/* <img alt="funky illustration" src={svg_art} /> */}
      {/* <Box sx={{ width: "50%" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      </Box> */}
      <MuImageCard />
      <MuiCard
        mapImage={svg_art}
        mapTitle="tMX"
        mapDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
        mapLink="https://www.google.com"
      />
    </Box>
  );
}
