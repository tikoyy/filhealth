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

interface MenuItem {
  label: string;
  path: string;
}

const appBarStyle: React.CSSProperties = {
  backgroundColor: "#329900",
  height: "65px",
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const buttonStyle: React.CSSProperties = {
  marginLeft: "20px",
};

const imageStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const logoStyle: React.CSSProperties = {
  height: `calc(${appBarStyle.height} - 5px)`,
  width: "auto",
};

const menuItems: MenuItem[] = [
  { label: "Home", path: "/Home" },
  { label: "About Us", path: "/about-us" },
  { label: "Members", path: "/members" },
  { label: "Our Partners", path: "/ourpartners" },
  { label: "Online Services", path: "/OnlineServices" },
  { label: "Downloads", path: "/downloads" },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();

  const gotoPage = (page: string) => {
    navigate(page);
    setDrawerOpen(false);
    setMenuAnchor(null);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      <AppBar position="fixed" style={appBarStyle}>
        <Toolbar variant="dense">
          <Container maxWidth="xl" style={containerStyle}>
            <div style={imageStyle}>
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
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
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
};

export default Navbar;
