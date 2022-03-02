import {
  Link,
  Paper,
  Typography
} from "@mui/material";

export default function Footer(props) {
  return (
    <Paper
      sx={{
        width: 1,
        minHeight: "30px",
        // maxHeight: "60px",
        // bgcolor: "#f8f8ff",
        bgcolor: "primary.main",
        borderTop: 1,
        borderColor: "secondary.main",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
      }}
    >
      <Typography
        variant="h5"
        color="secondary.main"
      >
        <Link
          color="secondary.main"
          href="https://github.com/TurtleWolfe/tmx"
          underline="hover"
        >
          <span
            role="img"
            aria-label="moto cross"
          >
            🏍️
          </span>
          {' © 2022 tMX '}
        </Link>
      </Typography>
    </Paper>
  );
}
