import {
  AppBar,
  Box,
  Toolbar,
  Tabs,
  Stack,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import {
  LocalLibrary,
  Home,
  HelpCenter,
  AccountBox,
  Map,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import HideOnScroll from "../../utility/HideOnScroll";
import LinkTab from "./LinkTab";
import tmx_logo from "../../../assets/img/teamMX-logo.png";
import { useAuthContext } from "../../../hooks/AuthContext";
import getUserString from "../../../utils/getUserString";
import stringAvatar from "../../../utils/stringAvatar";
import LogOutConfirmation from "../forms/LogOutConfirmation";
import theme from "../../../theme";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData } = useAuthContext();
  const [logOutModalOpen, setLogOutModalOpen] = useState(false);

  const handleModalOpen = () => {
    setLogOutModalOpen(true);
  };

  const handleModalClose = () => {
    setLogOutModalOpen(false);
  };

  return (
    <HideOnScroll>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          background: theme.palette.primary.mainGradient,
        }}
      >
        <AppBar position="static" color="transparent">
          <Toolbar variant="dense">
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                alt="off-road fun finder logo"
                src={tmx_logo}
                style={{ height: "64px", padding: "8px", marginRight: "8px" }}
              />
              <Typography
                variant="h4"
                color="primary.contrastText"
                sx={{ fontWeight: "bold" }}
              >
                Off-Road Fun Finder
              </Typography>
            </Box>
            <Stack direction="row" alignItems="center" spacing={8}>
              <Tabs
                value={
                  location.pathname === "/login" ? false : location.pathname
                }
                aria-label="nav tabs"
                textColor="secondary"
                indicatorColor="secondary"
                sx={{
                  paddingRight: "24px",
                }}
              >
                <LinkTab to="/" value="/" icon={<Home />} label="HOME" />
                <LinkTab to="/map" value="/map" icon={<Map />} label="MAP" />
                <LinkTab
                  to="/help"
                  value="/help"
                  icon={<HelpCenter />}
                  label="HELP"
                />
                {!userData.loggedIn && (
                  <LinkTab
                    to="/login"
                    value="/login"
                    icon={<AccountBox />}
                    label="LOGIN"
                  />
                )}
              </Tabs>
              {userData.loggedIn && (
                <Stack sx={{ alignItems: "center", pt: 1 }}>
                  <Avatar
                    {...stringAvatar(getUserString(userData))}
                    variant="rounded"
                    sx={{
                      border: 1,
                      borderColor: "white",
                    }}
                    onClick={() => navigate("/profile")}
                  />
                  <Button
                    variant="text"
                    onClick={() => handleModalOpen()}
                    color="secondary"
                    sx={{ pt: 1 }}
                  >
                    LogOut
                  </Button>
                </Stack>
              )}
            </Stack>
          </Toolbar>
        </AppBar>
        <LogOutConfirmation onClose={handleModalClose} open={logOutModalOpen} />
      </Box>
    </HideOnScroll>
  );
}
