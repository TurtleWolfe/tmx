import { Box } from "@mui/material";
import Map from "../components/composites/Map";

export default function SearchMap() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Map />
      </Box>
    </>
  );
}
