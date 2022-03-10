import { Box, Input, InputAdornment, Typography } from "@mui/material";
import FaveList from "../components/FaveList";
import images from "../components/composites/ImageSlider/images";
import ImageSlider from "../components/composites/ImageSlider";
import { Search } from "@mui/icons-material";

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
      <Box sx={{ padding: 2, width: "80%" }}>
        <Input
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
        />
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
