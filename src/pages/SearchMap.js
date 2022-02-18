import { Box } from "@mui/system";
import Map from "../components/composites/Map";
import Header from "../components/composites/Header";

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
        <Header />
        <Map />
      </Box>
    </>
  );
}
