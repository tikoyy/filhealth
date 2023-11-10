import React from "react";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import { Grid, Box, CardContent, Typography, Card, Stack } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const appStyle = {
  backgroundImage: "url(https://www.philhealth.gov.ph/images/bg_green.jpg)",
};
const bannerStyle = {
  width: "100%",
  height: "auto",
  paddingTop: "70px",
  paddingBottom: "30px",
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

interface PartnerCardProps {
  title: string;
  imageSrc: string;
  content: string;
  link: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  title,
  imageSrc,
  content,
  link,
}) => (
  <Grid item xs={12} sm={6}>
    <Card
      sx={{
        maxWidth: 500,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <CardActionArea style={{ flexGrow: 1 }}>
          <CardMedia
            component="img"
            height="250px"
            width="400px"
            src={imageSrc}
            alt={title}
          />
        </CardActionArea>
        <CardContent
          style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Typography gutterBottom variant="h5" component="div">
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

function OurPartners() {
  return (
    <div className="App" style={appStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavMenu />
        </Grid>
        <Box style={bannerStyle}>
          <img
            src="https://www.philhealth.gov.ph/partners/providers/images/hcp_bnnr.jpg"
            style={{ width: "100%", height: "auto" }}
            alt="Banner"
          />
        </Box>
        {/* Cards start here */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mb: 3 }}
          >
            {/* Card 1 */}
            <PartnerCard
              title="Healthcare Providers"
              imageSrc="https://www.philhealth.gov.ph/images/hcp_main.jpg"
              content="We forge partnerships with only the best in the industry to fulfill our mandate of providing all Filipinos with accessible, available, acceptable, and affordable health care services that will lead to better health outcomes and improved quality of life."
              link="https://www.philhealth.gov.ph/partners/providers/"
            />
            {/* Card 2 */}
            <PartnerCard
              title="Employers"
              imageSrc="https://www.philhealth.gov.ph/partners/images/emplyr_main.jpg"
              content="We partner with employers in the government and private sectors to ensure that all their employees are provided with social health insurance coverage as mandated by law."
              link="https://www.philhealth.gov.ph/partners/employers/"
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            {/* Card 3 */}
            <PartnerCard
              title="Service Providers"
              imageSrc="https://cdn-vz-info.ecomparemo.com/wordpress-media/2020/01/philhealthonlineservices-1280x670.jpg"
              content="We are moving towards electronic transactions and to help us achieve our goal, we have entered into partnerships with Health IT Providers for our e-claims and related processes."
              link="https://www.philhealth.gov.ph/partners/csp/"
            />
            {/* Card 4 */}
            <PartnerCard
              title="Collecting Partners"
              imageSrc="https://www.philhealth.gov.ph/partners/images/collect_main.jpg"
              content="We have tapped the services and networks of bank and non-bank institutions to make premium remittance more convenient for our members and employers. This section provides a complete list of these partners and their branch locations, and also includes basic information for collecting agencies that might be interested to partner with us in premium remittance."
              link="https://www.philhealth.gov.ph/partners/collecting/"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default OurPartners;
