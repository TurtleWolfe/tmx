import { Search } from "@mui/icons-material";
import { alpha, AppBar, Box, Input, Toolbar, Typography } from "@mui/material";
import { useAuthContext } from "../hooks/AuthContext";
import getUserString from "../utils/getUserString";
import { useTheme } from "@mui/material";

export default function SearchAppBar() {
  const { userData } = useAuthContext();
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Hi, {userData.loggedIn ? getUserString(userData) : "Guest"}! Where
            are you going next?
          </Typography>
          <Box
            sx={{
              position: "relative",
              borderRadius: theme.shape.borderRadius,
              backgroundColor: alpha(theme.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
              },
              marginLeft: 0,
              width: "100%",
              [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(1),
                width: "auto",
              },
            }}
          >
            <Box
              sx={{
                padding: theme.spacing(0, 2),
                height: "100%",
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Search />
            </Box>
            <Input
              placeholder="Search for tracks"
              sx={{
                color: "inherit",
                padding: theme.spacing(1, 1, 1, 0),
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create("width"),
                width: "100%",
                // [theme.breakpoints.up("sm")]: {
                //   width: "12ch",
                //   "&:focus": {
                //     width: "20ch",
                //   },
                // },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
