import { Search } from "@mui/icons-material";
import {
  Slide,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    transitionProperty: "transform",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
  },
});

const Image = (props) => {
  const { src, direction, currentImage, title, subtitle } = props;
  if (!src) {
    throw new Error("Image src is required.");
  }

  const classes = useStyles(props);
  return (
    <div key={currentImage} className={classes.root}>
      <Slide in={true} direction={direction}>
        <Card
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <CardMedia
            media="picture"
            image={src}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
            }}
          />
          <CardContent
            sx={{
              width: "200px",
              position: "relative",
              backgroundColor: "secondary.main",
              marginLeft: "10%",
              marginTop: "300px",
            }}
          >
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
              {subtitle}
            </Typography>
            <Button size="small" color="inherit" variant="outlined">
              <Search /> {title}
            </Button>
          </CardContent>
        </Card>
      </Slide>
    </div>
  );
};

export default Image;
