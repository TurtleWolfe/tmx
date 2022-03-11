import { Box, Input, InputAdornment, Typography } from "@mui/material";
import FaveList from "../components/FaveList";
import images from "../components/composites/ImageSlider/images";
import ImageSlider from "../components/composites/ImageSlider";
import { Search } from "@mui/icons-material";
import SearchAppBar from "../components/searchAppBar";

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
      <ImageSlider images={images} autoPlay={true} />
      <Box sx={{ paddingBottom: 2, width: "100%" }}>
        {/* <Input
          id="search-bar"
          label="Search nearby tracks"
          placeholder="Search nearby tracks"
          variant="filled"
          endAdornment={
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          }
          size="medium"
          fullWidth
        /> */}
        <SearchAppBar />
      </Box>
      <Box
        sx={{
          padding: 2,
          textAlign: "left",
        }}
      >
        <Typography variant="h4">Great spots near you</Typography>
        <Typography variant="h6">
          The best offroad fun for you to find!
        </Typography>
      </Box>
      <FaveList />
    </Box>
  );
}
