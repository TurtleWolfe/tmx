// import * as React from 'react';
// import svg_art from "../assets/coding_art.svg";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({ mapImage, mapTitle, mapDescription, mapLink }) {
  return (
    <Card sx={{
      bgcolor: "primary.main",
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
        <CardMedia
          component="img"
          height="140"
          // image="/static/images/cards/contemplative-reptile.jpg"
          // alt="green iguana"
          alt="funky illustration"
          src={mapImage}
        // src={svg_art}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {/* tMX */}
            {mapTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {mapDescription}
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam. */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          bgcolor: "secondary.main",
          // color="secondary",
          borderRadius: "0.5rem",
        }}
      >
        <Button
          size="small"
        // color="secondary"
        >
          Share
          {" " + mapLink}
        </Button>
      </CardActions>
    </Card>
  );
}
