import { AppBar, Box, Container, Button } from "@mui/material";


const appBarStyle = {
  backgroundColor: "#329900",
};

function Footer() {
  

  return (
    <AppBar position="static" style={appBarStyle}>
      <Container maxWidth="xl">
        <Box
          sx={{
            flexGrow: 0,
            display: {
              xs: "flex",
              md: "flex",
            },
          }}
          justifyContent={"center"}
        >
          <p> © 2014 Philippine Health Insurance Corporation | Citystate Centre, 709 Shaw Boulevard 1603 Pasig City | Call Center (+632) 441-7442 </p>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Footer;
