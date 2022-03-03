import { useState } from "react";
import {
  IconButton,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, BrokenHeart } from "@mui/icons-material";

export default function MultiActionAreaCard({
  mapImage,
  mapTitle,
  mapDescription,
  mapLink,
}) {
  const [starred, setStarred] = useState(false);

  return (
    <Card
      sx={{
        bgcolor: "secondary.main",
        maxWidth: 345,
        margin: "auto",
        marginTop: "1rem",
        marginBottom: "1rem",
        padding: "1rem",
        borderRadius: "0.5rem",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
      variant="outlined"
    >
      <CardActionArea>
        <IconButton
          size="small"
          color={starred ? "error" : "primary"}
          variant="outlined"
          sx={{
            border: 2,
            zIndex: 10,
          }}
          onClick={() => {
            setStarred(!starred);
          }}
        >
          {starred ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
        <CardMedia
          component="img"
          height="140"
          alt="funky illustration"
          src={mapImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {mapTitle}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {mapDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions
        sx={{
          bgcolor: "secondary.main",
          borderRadius: "0.5rem",
        }}
      >
        <Button
          size="small"
        >
          Share{" " + mapLink}
        </Button>
      </CardActions> */}
    </Card>
  );
}
