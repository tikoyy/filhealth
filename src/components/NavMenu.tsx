import React, { useState } from "react";
import {
  AppBar,
  Container,
  Button,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Styles
const appBarStyle = {
  backgroundColor: "#329900",
  height: "65px",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const buttonStyle = {
  marginLeft: "20px",
};

const imageStyle = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  height: `calc(${appBarStyle.height} - 5px)`,
  width: "auto",
};

// Navigation items with labels and paths
const menuItems = [
  { label: "Home", path: "/Home" },
  { label: "About Us", path: "/about-us" },
  { label: "Members", path: "/members" },
  { label: "Our Partners", path: "/ourpartners" },
  { label: "Online Services", path: "/OnlineServices" },
  { label: "Downloads", path: "/downloads" },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  // Function to navigate to a specific page and close the drawer or menu
  const gotoPage = (page: string) => {
    navigate(page);
    setDrawerOpen(false);
    setMenuAnchor(null);
  };

  // Event handler for clicking the hamburger icon
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  // Event handler for closing the menu
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      {/* AppBar with the responsive design */}
      <AppBar position="fixed" style={appBarStyle}>
        <Toolbar variant="dense">
          <Container maxWidth="xl" style={containerStyle}>
            <div style={imageStyle}>
              {/* Logo */}
              {["ph_logo0.png", "bagong_pilipinas_logo3.png"].map((logo, index) => (
                <img
                  key={index}
                  src={`https://www.philhealth.gov.ph/images/${logo}`}
                  alt={`Logo ${index + 1}`}
                  loading="lazy"
                  style={logoStyle}
                  onClick={() => gotoPage("/Home")}
                />
              ))}
            </div>
            <div>
              {/* Navigation buttons for large screens */}
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => gotoPage(item.path)}
                  sx={{
                    my: 1,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    display: { xs: "none", md: "inline-block" },
                    ...buttonStyle,
                  }}
                >
                  {item.label}
                </Button>
              ))}
              {/* Conditional rendering of the hamburger icon */}
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              {/* Dropdown menu for small screens */}
              <Menu
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={handleMenuClose}
              >
                {menuItems.map((item, index) => (
                  <MenuItem key={index} onClick={() => gotoPage(item.path)}>
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
      {/* Drawer (responsive menu) */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} onClick={() => gotoPage(item.path)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
