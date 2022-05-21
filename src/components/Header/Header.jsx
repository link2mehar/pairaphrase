import "@stylesComponents/Header.scss";
import { NavLink } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { FiPlus } from "react-icons/fi";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";

import Logo from "../../assets/Images/logo.svg";
import "fontsource-roboto";

import styles from "./header.module.scss";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const [isActive, setActive] = React.useState(false);

  // const clickHandler = () => {
  //   setActive(!isActive);
  // };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header className="header">
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              height: "80px",
              marginLeft: "36px",
              marginRight: "36px",
              justifyContent: "space-between"
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <img src={Logo} alt="Logo" />

              <Box
                sx={{
                  width: "247px",
                  justifyContent: "space-between",
                  paddingLeft: "36px",
                  display: { xs: "none", md: "flex" }
                }}
              >
                <NavLink
                  className={styles.TranslateLink}
                  activeClassName="active"
                  to="/"
                >
                  Translate
                </NavLink>
                <NavLink
                  className={styles.DocumentLink}
                  activeClassName="active"
                  to="/ActiveDocuments"
                >
                  Active Document
                </NavLink>
              </Box>
            </Box>
            <Box sx={{ flexGrow: 0, display: "flex" }}>
              <Box
                sx={{ display: "flex", alignItems: "center" }}
                component="div"
              >
                <Box className="pp-mr-14">
                  <Button className={` ${styles.button} secondary-btn `}>
                    Send Invite
                  </Button>
                </Box>

                <Box className="pp-mr-30">
                  <Button
                    className={` ${styles.button} primary-btn `}
                    startIcon={<FiPlus />}
                  >
                    Get more Words
                  </Button>
                </Box>
              </Box>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/src/assets/Images/logo.svg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography component="div" textAlign="center">
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
