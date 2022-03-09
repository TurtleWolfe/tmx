import RecipeCard from "../components/composites/RecipeCard";
import { Box } from "@mui/material";
import images from "../components/composites/ImageSlider/images";
import ImageSlider from "../components/composites/ImageSlider";

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
        <ImageSlider images={images} autoPlay={true} />
      </Box>
    </>
  );
}
