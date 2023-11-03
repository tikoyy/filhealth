import { AppBar, Box, Container, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const appBarStyle = {
  backgroundColor: "#329900",
};

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let navigate = useNavigate();
  const gotoHome = function () {
    navigate("/Home");
  };
  const gotoAboutUs = function () {
    navigate("/about-us");
  };
  const gotoMembers = function () {
    navigate("/members");
  };
  const gotoOurPartners = function () {
    navigate("/ourpartners");
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Container maxWidth="xl">
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "flex",
              md: "flex",
            },
          }}
          justifyContent={"center"}
        >
          <Button
            onClick={gotoHome}
            sx={{ my: 2, color: "#FFFFFF", display: "block" }}
          >
            Home
          </Button>
          <Button
            onClick={gotoAboutUs}
            sx={{ my: 2, color: "#FFFFFF", display: "block" }}
          >
            About Us
          </Button>
          <Button
            onClick={gotoMembers}
            sx={{ my: 2, color: "#FFFFFF", display: "block" }}
          >
            Members
          </Button>
          <Button
            onClick={gotoOurPartners}
            sx={{ my: 2, color: "#FFFFFF", display: "block" }}
          >
            Our Partners
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "#FFFFFF", display: "block" }}
          >
            Online Services
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "#FFFFFF", display: "block" }}
          >
            Downloads
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navbar;
