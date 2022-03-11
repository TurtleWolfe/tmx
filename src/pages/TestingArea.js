import { Box } from "@mui/material";
import SearchAppBar from "../components/searchAppBar";

export default function TestingArea() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Testing Area</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <SearchAppBar />
      </Box>
    </>
  );
}
