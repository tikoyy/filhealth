import React from "react";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import { Grid, Box, CardContent, Typography, Card, Stack } from "@mui/material";
import { CardActionArea } from "@mui/material";

const appStyle = {
  backgroundImage: "url(https://www.philhealth.gov.ph/images/bg_green.jpg)",
};
const bannerStyle = {
  width: "100%",
  height: "auto",
  paddingTop: "70px",
  paddingBottom: "10px",
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

interface PartnerCardProps {
  title: string;
  content: React.ReactNode;
  link: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ title, content, link }) => (
  <Grid item xs={12} sm={6}>
    <Card
      sx={{
        maxWidth: 500,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 5,
      }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <CardActionArea style={{ flexGrow: 1 }}></CardActionArea>
        <CardContent
          style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            alignItems={"center"}
            justifyContent={"center"}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </a>
    </Card>
  </Grid>
);

function OnlineServices() {
  return (
    <div className="App" style={appStyle}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <NavMenu />
        </Grid>
        <Box style={bannerStyle}>
          <img
            src="https://www.philhealth.gov.ph/services/images/os_banner.jpg"
            style={{ width: "100%", height: "auto" }}
            alt="Banner"
          />
        </Box>
        {/* Start here */}
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "-5px" }}>
          <Typography
            variant="h3"
            style={{
              color: "whitesmoke",
              fontWeight: "bold",
              backgroundColor: "transparent",
              padding: "8px",
              marginBottom: "20px",
            }}
          >
            Membership
          </Typography>
        </Grid>
        {/* Cards start here */}
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="stretch"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            sx={{ mb: 3 }}
          >
            {/* Card 1 */}
            <PartnerCard
              title="Member Portal"
              content={
                <>
                  <a href="https://memberinquiry.philhealth.gov.ph/member/"> Register/LogIn </a>
                  <br /> Enables members to check on the accuracy of their membership details
                </>
              }
              link="https://memberinquiry.philhealth.gov.ph/member/"
            />
            {/* Card 2 */}
            <PartnerCard
              title="Electronic Group Enrollment System"
              content={
                <>
                  <a href="https://egroup03.philhealth.gov.ph/"> Login </a>
                  <br /> Facilitates registration and billing of Organized Groups
                </>
              }
              link="https://egroup03.philhealth.gov.ph/"
            />
          </Stack>
          {/* Additional Stacks for more cards can be added here */}
        </Grid>
        {/* eND HERE */}

        {/* Grid with title start here */}
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "-5px" }}>
          <Typography
            variant="h3"
            style={{
              color: "whitesmoke",
              fontWeight: "bold",
              backgroundColor: "transparent",
              padding: "8px",
              marginBottom: "20px",
            }}
          >
            Benefits
          </Typography>
        </Grid>
        {/* Cards start here */}
        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="stretch"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            sx={{ mb: 3 }}
          >
            {/* Card 3 */}
            <PartnerCard
              title="Case Rates Search"
              content={
                <>
                  <a href="https://www.philhealth.gov.ph/services/acr/"> Begin Search </a>
                  <br /> Provides members with information on PhilHealth's benefit packages
                </>
              }
              link="https://www.philhealth.gov.ph/services/acr/"
            />
            {/* Card 4 */}
            <PartnerCard
              title="Claims Eligibility Checking"
              content={
                <>
                  <a href="https://cec.philhealth.gov.ph/"> Login </a>
                  <br /> Enables providers to ascertain the benefit availment eligibility of members
                </>
              }
              link="https://cec.philhealth.gov.ph/"
            />
          </Stack>
        </Grid>
        {/* Additional Stacks for more cards can be added here */}
        {/* Grid with title start here */}
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "-5px" }}>
          <Typography
            variant="h3"
            style={{
              color: "whitesmoke",
              fontWeight: "bold",
              backgroundColor: "transparent",
              padding: "8px",
              marginBottom: "20px",
            }}
          >
            Contribution
          </Typography>
        </Grid>
        {/* Cards start here */}
        <Grid
          container
          spacing={0}
          justifyContent="center" // Center the cards horizontally
          alignItems="center"
          alignContent={"center"}
        >
          {/* Card 5 */}
          <PartnerCard
            title="Electronic Premium Remittance System"
            content={
              <>
                <a href="https://eprs01.philhealth.gov.ph/"> LogIn </a>|
                <a href="https://epoaf.philhealth.gov.ph/employer/"> ePOAF </a>
                <br /> Enables employers to remit their premium contributions
                online
              </>
            }
            link="https://eprs01.philhealth.gov.ph/"
          />
        </Grid>
        {/* Collection */}
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "-5px" }}>
          <Typography
            variant="h3"
            style={{
              color: "whitesmoke",
              fontWeight: "bold",
              backgroundColor: "transparent",
              padding: "8px",
              marginBottom: "20px",
            }}
          >
            Collection
          </Typography>
        </Grid>
        {/* Cards start here */}
        <Grid
          container
          spacing={0}
          justifyContent="center" // Center the cards horizontally
          alignItems="center" // Center the cards vertically
        >
          {/* Card 6 */}
          <PartnerCard
            title="Electronic Collection Reporting System"
            content={
              <>
                <a href="https://ecrs.philhealth.gov.ph/"> LogIn </a>
                <br /> Enables PhilHealth Accredited Collecting Agents to submit
                daily RF2 reports online
              </>
            }
            link="https://ecrs.philhealth.gov.ph/"
          />
        </Grid>
        {/* Accreditation */}
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "-5px" }}>
          <Typography
            variant="h3"
            style={{
              color: "whitesmoke",
              fontWeight: "bold",
              backgroundColor: "transparent",
              padding: "8px",
              marginBottom: "20px",
            }}
          >
            Accreditation
          </Typography>
        </Grid>
        {/* Cards start here */}
        <Grid
          container
          spacing={0}
          justifyContent="center" // Center the cards horizontally
          alignItems="center" // Center the cards vertically
          paddingBottom={"10vh"}
          
        >
          {/* Card 7 */}
          <PartnerCard
            title="Health Care Institutions"
            content={
              <>
                <a href="https://ihcp.philhealth.gov.ph/"> LogIn </a>|
                <a href="https://www.philhealth.gov.ph/services/hci/">
                  How to Register
                </a>
                <br /> Shows the complete list of HCIs including accreditation
                status
              </>
            }
            link="https://ihcp.philhealth.gov.ph/"
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "-5px" }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default OnlineServices;
