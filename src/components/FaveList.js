import { useState } from "react";
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import {
  Favorite,
  HeartBroken,
  StarBorder,
  StarRate,
} from "@mui/icons-material";
import itemData from "../assets/data/favoritesTestData.json";

import PlacePhoto from "./utility/PlacePhoto";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}&w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}&w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  const [starred, setStarred] = useState(false);
  return (
    <Container>
      <ImageList
        sx={{
          maxHeight: "80vh",
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: "translateZ(0)",
          borderRadius: "0.5rem",
        }}
        rowHeight={200}
        gap={10}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem
              key={item.place_id}
              cols={cols}
              rows={rows}
              sx={{
                overflow: "hidden",
                borderRadius: "0.5rem",
                justifyContent: "center",
              }}
            >
              <img
                {...srcset(
                  PlacePhoto(item.photos[0].photo_reference, 500),
                  250,
                  200,
                  rows,
                  cols
                )}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  width: "100%",
                  borderRadius: "0.5rem",
                  color: "primary",
                }}
                title={item.name}
                subtitle={item.formatted_address}
                color="primary"
                // position="top"
                actionIcon={
                  <IconButton
                    // sx={{ color: 'primary.main' }}
                    color={starred ? "primary.main" : "error"}
                    aria-label={`star ${item.title}`}
                    onClick={() => {
                      setStarred(!starred);
                    }}
                  >
                    {starred ? <StarBorder /> : <StarRate />}
                    {item.rating}
                    {starred ? <HeartBroken /> : <Favorite />}
                    {item.user_ratings_total}
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
}
