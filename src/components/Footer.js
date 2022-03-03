import { Paper, Typography } from "@mui/material";
import theme from "../theme";

export default function Footer(props) {
  return (
    <Paper
      sx={{
        width: 1,
        minHeight: "30px",
        background: theme.palette.primary.mainGradient,
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
      <Typography variant="h6" color="secondary">
        © {new Date().getFullYear()} Off-Road Fun Finder
      </Typography>
    </Paper>
  );
}
