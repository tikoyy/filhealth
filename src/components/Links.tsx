import { AppBar, Box, Container, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const appBarStyle = {
  backgroundColor: "#329900",
};

function Links() {
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
    <AppBar position="static" style={appBarStyle} sx={{ height: '40px'}}>
      <Container maxWidth="xl">
        <Box
          sx={{
            flexGrow: 0,
            display: {
              xs: "flex",
              md: "flex",
            },
            paddingY: '.5px'
          }}
          justifyContent={"center"}
        >
          <Button
            onClick={gotoHome}
            sx={{ my: 1, color: "#FFFFFF", display: "block" }}
          >
            Home
          </Button>
          <Button
            onClick={gotoAboutUs}
            sx={{ my: 1, color: "#FFFFFF", display: "block" }}
          >
            Contact Us
          </Button>
          <Button
            onClick={gotoMembers}
            sx={{ my: 1, color: "#FFFFFF", display: "block" }}
          >
            SiteMap
          </Button>
          <Button
            onClick={gotoOurPartners}
            sx={{ my: 1, color: "#FFFFFF", display: "block" }}
          >
            Disclaimer
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 1, color: "#FFFFFF", display: "block" }}
          >
            Privacy Notice
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Links;
