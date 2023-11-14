import React from "react";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import {
  Grid,
  Box,
  Typography,
  Stack,
  Button,
  Card,
  CardContent,
  Paper,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

interface MainFeaturedPostProps {
  post?: {
    description: React.ReactNode;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

const postData = {
  description: (
    <div>
      Callback Channel: 0917-898-7442 (PHIC)
      <br />
      Text
      <span style={{ fontStyle: "italic" }}>
        PHICcallback [space] Mobile No. or Metro Manila landline [space] details of your concern
      </span>
      and we will call you during office hours, weekdays only.
      <br />
      (Callback request will expire after 72 hours.)
      <br/>
      <b> Call Center Hotline 84417442 (PHIC) </b>
      <br/> 
      (Self-help only; agent assistance temporarily not available)
      <Stack direction={"row"}>
        <FacebookIcon/>
        <EmailIcon/>
        <TwitterIcon/>
      </Stack>
      <br/>
        <span style={{textDecoration: "underline"}}>
          actioncenter@philhealth.gov.ph
        </span>
    </div>

  ),
  image: "https://www.philhealth.gov.ph/about_us/images/abt_bnnr.jpg",
  imageText: "Image Text",
  linkText: "Learn More",
  title: "Contact Information",
};

const appStyle: React.CSSProperties = {
  backgroundImage: "url(https://www.philhealth.gov.ph/images/bg_green.jpg)",
};

const bannerStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  maxHeight: "200px",
  paddingTop: "65px",
};

const bannerImageStyle: React.CSSProperties = {
  width: "100%",
  height: "80%",
  objectFit: "cover",
};

const overlayContainer: React.CSSProperties = {
  position: "absolute",
  top: "110%",
  left: "60%",
  transform: "translateY(-50%)",
};

const overlayText: React.CSSProperties = {
  backgroundColor: "transparent",
  padding: "10px",
  fontFamily: "Arial, sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#339999",
};
const otheroverlayText: React.CSSProperties = {
  backgroundColor: "transparent",
  padding: "10px",
  paddingBottom: "8px",
  paddingTop: "8px",
  fontFamily: "Arial, sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  color: "black",
};

const contentContainer: React.CSSProperties = {
  marginTop: "20px",
};

const italicizedText: React.CSSProperties = {
  fontStyle: "italic",
  fontFamily: "Arial, sans-serif",
  fontSize: "20px",
  fontWeight: "lighter",
  color: "black",
};

const linkStyles = {
  color: "black",
  textDecoration: "none",
  listStyleType: "none",
  padding: 0,
  ":hover": {
    color: "#2C9B00",
    textDecoration: 'underline',
  },
};
const bulletlinkStyles = {
  color: "black",
  textDecoration: "none",
  listStyleType: "disc",
  padding: 0,
  ":hover": {
    color: "#2C9B00",
  },
};

function AboutUs({post = postData}: MainFeaturedPostProps) {
  if(!post) {
    return null;
  }
  //const { image, imageText, title, description, linkText } = post;

  return (
    <div className="App" style={appStyle}>
      <Grid>
        <Grid item xs={12}>
          <NavMenu />
        </Grid>
        <Grid>
          <Paper
            sx={{
              position: "relative",
              backgroundColor: "grey.800",
              color: "#fff",
              mb: 4,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${post.image})`,
            }}
          >
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ 
                  display: "none"}}
                src={post.image}
                alt={post.imageText}
              />
            }
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,.3)", //color ng overlay
              }}
            />
            <Grid container>
              <Grid item md={6}>
                <Box
                  sx={{
                    position: "relative",
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                    textAlign: 'left',
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                    style={{paddingTop: '40px'}}
                  >
                    {post.title}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph >
                    {post.description}
                  </Typography>
                  <Link variant="subtitle1" href="#">
                    {post.linkText}
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Box
          style={contentContainer}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Grid
            container
            spacing={2}
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            {/* First Column */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 3,
                  background: "rgba(255, 255, 255, 250)",
                  marginX: { xs: 2, md: 4 },
                  paddingY: 2,
                  marginY: 1,
                  paddingX: { xs: 2, md: 2 },
                  flexGrow: 1,
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h3"
                    gutterBottom
                    style={{ textAlign: "left" }}
                  >
                    Profile
                  </Typography>
                  <Typography style={{ textAlign: "left" }}>History</Typography>
                  <Typography style={{ textAlign: "justify" }}>
                    The call to serve the rural indigents echoed since the early
                    '60s when the Philippine Medical Association introduced the
                    MARIA Project which prioritized aid to communities in need
                    of medical assistance.
                  </Typography>
                  <Typography>
                    <ul style={linkStyles}>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/mandate.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Agency's Mandate and Functions
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/vis_mis_core.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Vision, Mission, Core Values
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/bod.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Board of Directors
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/eos.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          Executive Officers
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/PhilHealth'sOrganizationalStructure.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          Organizational Structure
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/VisualBrandIdentityElements.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          Visual Brand Identity Elements
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/transparency/#iso"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          ISO Certification
                        </a>
                      </li>
                    </ul>
                  </Typography>
                  <Typography
                    variant="h5"
                    textAlign={"left"}
                    style={{ fontSize: "11px" }}
                  >
                    Affiliations - An attached agency of the Department of
                    Health and a proud member of the following:
                  </Typography>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"center"}
                  >
                    <Button
                      onClick={() => {
                        window.location.href = "https://www.issa.int/";
                      }}
                      sx={{ padding: 0, borderRadius: 2 }}
                    >
                      <img
                        src="	https://www.philhealth.gov.ph/about_us/images/issa.jpg"
                        alt="Foi"
                        width="50"
                        height="50"
                      />
                    </Button>
                    <Button
                      onClick={() => {
                        window.location.href = "https://www.asean-ssa.org/";
                      }}
                      sx={{ padding: 0, borderRadius: 2 }}
                    >
                      <img
                        src="https://www.philhealth.gov.ph/about_us/images/assa.jpg"
                        alt="Foi"
                        width="50"
                        height="50"
                      />
                    </Button>
                    <Button
                      onClick={() => {
                        window.location.href =
                          "https://code-ngo.org/partnership-of-philippine-support-service-agencies-philssa/";
                      }}
                      sx={{ padding: 0, borderRadius: 2 }}
                    >
                      <img
                        src="https://www.philhealth.gov.ph/about_us/images/philssa.jpg"
                        alt="Foi"
                        width="50"
                        height="50"
                      />
                    </Button>
                  </Stack>
                  <Typography
                    variant="h3"
                    gutterBottom
                    style={{ textAlign: "left" }}
                  >
                    References
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      color: "whitesmoke",
                      textAlign: "left",
                      backgroundColor: "#2C9B00",
                      padding: "8px",
                    }}
                  >
                    Enabling Laws
                  </Typography>
                  <Typography>
                    <ul style={linkStyles}>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/transparency/#iso"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          R.A 7875 and IRR
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/ra9241.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          R.A 9241 and IRR
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/ra10606.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          R.A 10606
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/IRR_NHIAct_2013.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          Revised IRR Of The National Health Insurance Act Of
                          2013 (R.A. 7875 As Amended By R.A. 9241 And 10606)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/IRR_NHIAct_2013.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          Revised IRR Of The National Health Insurance Act Of
                          2013 (R.A. 7875 As Amended By R.A. 9241 And 10606)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/RA11223_UHC.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          R.A. 11223 (Universal Health Care Act)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/UHC-IRR_Signed.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          UHC-IRR
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/UHC-IRR_Signed.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          UHC-IRR
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/IRR_RA11228.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          IRR Of R.A. 11228
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/AnnexA_PBRNo2571-PROAC.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          PhilHealth Rules On Administrative Cases (PROAC)
                          Involving Health Care Providers, Members And
                          PhilHealth Employees
                        </a>
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Second column goes here */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 3,
                  background: "rgba(255, 255, 255, 250)",
                  marginX: { xs: 2, md: 4 },
                  paddingY: 2,
                  marginY: 1,
                  paddingX: { xs: 2, md: 2 },
                  flexGrow: 1,
                  alignItems: "center",
                  height: "100%",
                  marginTop: { xs: 2, md: 0 },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      color: "whitesmoke",
                      textAlign: "left",
                      backgroundColor: "#2C9B00",
                      padding: "8px",
                    }}
                  >
                    PhilHealth Studies
                  </Typography>
                  <Button
                    onClick={() => {
                      window.location.href =
                        "https://www.philhealth.gov.ph/about_us/studies/";
                    }}
                    sx={{
                      display: "flex",

                      borderRadius: 2,
                      padding: 0,
                      height: "35vh",
                    }}
                  >
                    <img
                      src="https://www.philhealth.gov.ph/about_us/images/pstud.jpg"
                      alt="Ph studies"
                      width="250px"
                      height="200px"
                      style={{ objectFit: "cover", borderRadius: "inherit" }}
                    />
                  </Button>
                  <Typography
                    variant="h5"
                    style={{
                      color: "whitesmoke",
                      textAlign: "left",
                      backgroundColor: "#2C9B00",
                      padding: "8px",
                    }}
                  >
                    Annual Reports
                  </Typography>
                  <Button
                    onClick={() => {
                      window.location.href =
                        "https://www.philhealth.gov.ph/about_us/annual_report/";
                    }}
                    sx={{
                      display: "flex",

                      borderRadius: 2,
                      padding: 0,
                      height: "49vh",
                    }}
                  >
                    <img
                      src="https://www.philhealth.gov.ph/about_us/images/ar2021.png"
                      alt="Annual Reports"
                      width="200px"
                      height="300px"
                      style={{ objectFit: "cover", borderRadius: "inherit" }}
                    />
                  </Button>
                  <Typography>
                    <ul style={bulletlinkStyles}>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/annual_report/AR2021.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          2021
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/annual_report/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Archives
                        </a>
                      </li>
                    </ul>
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      color: "whitesmoke",
                      textAlign: "left",
                      backgroundColor: "#2C9B00",
                      padding: "8px",
                    }}
                  >
                    Status and Charts
                  </Typography>
                  <Button
                    onClick={() => {
                      window.location.href =
                        "https://www.philhealth.gov.ph/about_us/annual_report/";
                    }}
                    sx={{
                      display: "flex",

                      borderRadius: 2,
                      padding: 0,
                      height: "35vh",
                    }}
                  >
                    <img
                      src="https://www.philhealth.gov.ph/about_us/statsncharts/images/snc2023.jpg"
                      alt="Status and charts"
                      width="250px"
                      height="200px"
                      style={{ objectFit: "cover", borderRadius: "inherit" }}
                    />
                  </Button>
                  <Typography>
                    <ul style={bulletlinkStyles}>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/privacy/mbr_hcp.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          2023
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/about_us/statsncharts/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Archives
                        </a>
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Third column goes here */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 3,
                  background: "rgba(255, 255, 255, 250)",
                  marginX: { xs: 2, md: 4 },
                  paddingY: 2,
                  marginY: 1,
                  paddingX: { xs: 2, md: 2 },
                  flexGrow: 1,
                  alignItems: "center",
                  height: "100%",
                  marginTop: { XS: 2, md: 0 },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      color: "whitesmoke",
                      textAlign: "left",
                      backgroundColor: "#2C9B00",
                      padding: "8px",
                    }}
                  >
                    PhilHealth Strategic Plan for 2021-2023
                  </Typography>
                  <Button
                    onClick={() => {
                      window.location.href =
                        "https://www.philhealth.gov.ph/about_us/transparency/PhilHealthStratplan2021-23.pdf";
                    }}
                    sx={{
                      display: "flex",

                      borderRadius: 2,
                      padding: 0,
                      paddingTop: 5,
                      paddingBottom: 5,
                      height: "43vh",
                    }}
                  >
                    <img
                      src="https://www.philhealth.gov.ph/about_us/images/sp.png"
                      alt="Ph studies"
                      width="200px"
                      height="250px"
                      style={{ objectFit: "cover", borderRadius: "inherit" }}
                    />
                  </Button>

                  <Typography
                    variant="h5"
                    style={{
                      color: "whitesmoke",
                      textAlign: "left",
                      backgroundColor: "#2C9B00",
                      padding: "8px",
                    }}
                  >
                    Medical Literature
                  </Typography>
                  <ul style={bulletlinkStyles}>
                    <li>
                      <a
                        href="https://www.philhealth.gov.ph/partners/providers/pdf/PNF-EML_11022022.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Philippine National Formulary (PNF) Essential Medicines
                        List (EML){" "}
                        <i style={{ fontSize: "12px" }}>
                          (As Of November 2, 2022){" "}
                        </i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.philhealth.gov.ph/partners/providers/pdf/hta_forum_v4n1-2006.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        HTA Forum (2006)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.philhealth.gov.ph/partners/providers/pdf/NTCP_MoP2014.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        National TB Control Program Manual
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.philhealth.gov.ph/partners/providers/pdf/ComprehensiveUnifiedPolicy_TB.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Comprehensive And Unified Policy For TB Control
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.philhealth.gov.ph/partners/providers/pdf/Leptospirosis_Policy_Statements.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Policy Recommendations On Leptospirosis
                      </a>
                    </li>
                  </ul>
                  <Typography
                    variant="h5"
                    style={{
                      color: "whitesmoke",
                      textAlign: "left",
                      backgroundColor: "#2C9B00",
                      padding: "8px",
                    }}
                  >
                    Forum Materials
                  </Typography>
                  <Typography>
                    <ul style={bulletlinkStyles}>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/2018policyforum/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          2018
                        </a>
                      </li>
                    </ul>
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      color: "whitesmoke",
                      textAlign: "left",
                      backgroundColor: "#2C9B00",
                      padding: "8px",
                      marginTop: "10px",
                    }}
                  >
                    <a
                      href="https://www.philhealth.gov.ph/about_us/PhilHealthCorporateDataDictionary10052022.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "whitesmoke",
                        textAlign: "left",
                        textDecoration: "none",
                        backgroundColor: "#2C9B00",
                        padding: "5px",
                      }}
                    >
                      PhilHealth Corporate Data Dictionary
                      <p style={{ fontSize: "13px" }}>As of October 5, 2022</p>
                    </a>
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      color: "whitesmoke",
                      textAlign: "left",
                      backgroundColor: "#2C9B00",
                      padding: "5px",
                      marginTop: "10px",
                    }}
                  >
                    <a
                      href="https://www.philhealth.gov.ph/about_us/NationalHealthDataRepositoryFramework03282022.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "whitesmoke",
                        textAlign: "left",
                        textDecoration: "none",
                        backgroundColor: "#2C9B00",
                        padding: "5px",
                      }}
                    >
                      National Health Data Repository Framework
                      <p style={{ fontSize: "13px" }}>As of March 28, 2022</p>
                    </a>
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      color: "whitesmoke",
                      textAlign: "left",
                      backgroundColor: "#2C9B00",
                      padding: "5px",
                      marginTop: "10px",
                    }}
                  >
                    <a
                      href="https://www.philhealth.gov.ph/about_us/app/2023/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "whitesmoke",
                        textAlign: "left",
                        textDecoration: "none",
                        backgroundColor: "#2C9B00",
                        padding: "5px",
                      }}
                    >
                      Annual Procurement Plan
                    </a>
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      color: "whitesmoke",
                      textAlign: "left",
                      backgroundColor: "#2C9B00",
                      padding: "5px",
                      marginTop: "10px",
                    }}
                  >
                    Privacy Notices
                  </Typography>
                  <Typography>
                    <ul style={bulletlinkStyles}>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/privacy/mbr_hcp.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Members And Health Care Professionals
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/privacy/splr_cnslt.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Suppliers And Consultants
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.philhealth.gov.ph/privacy/applcnts_emplys.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Applicants And Employees
                        </a>
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Grid item xs={12} style={{ marginTop: "50px" }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUs;
