import React, { useEffect, useState } from "react";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import { Grid, Box, CardContent, Typography, Card } from "@mui/material";

const appStyle = {
  backgroundImage: "url(https://www.philhealth.gov.ph/images/bg_green.jpg)",
};
const bannerStyle = {
  width: "100%",
  height: "auto",
  paddingTop: "70px",
};

function Members() {
  return (
    <div className="App" style={appStyle}>
      <Grid>
        <Grid item xs={12}>
          <NavMenu />
        </Grid>
        <Box>
          <img
            src="https://www.philhealth.gov.ph/members/images/mbrs_bnnr.jpg"
            alt="Banner pic"
            style={bannerStyle}
          />
        </Box>
        <Card
          sx={{
            boxShadow: 3,
            borderRadius: 5,
            background: "rgba(255, 255, 255, 250)",
            marginX: { xs: 2, md: 4 },
            paddingY: 2,
            marginY: 1,
            paddingX: { xs: 2, md: 2 },
            flexGrow: 1,
            marginTop: "10vh",
            marginBottom: "10vh",

          }}
        >
          <CardContent sx={{ justifyContent: "left" }}>
            <Typography variant="h3" gutterBottom style={{ textAlign: "left" }}>
              Direct Contributors
            </Typography>
            <ul style={{ textAlign: "left" }}>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/members/formal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "black",
                  }}
                >
                  Employees with formal employment
                </a>
              </li>
              <li>Kasambahays</li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/members/informal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "black",
                  }}
                >
                  Self-earning individuals; Professional practitioners
                </a>
              </li>
              <li>Overseas Filipino Workers</li>
              <li>Filipinos living abroad and those with dual citizenship</li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/members/lifetime/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "black",
                  }}
                >
                  Lifetime members
                </a>
              </li>
              <li>
                All Filipinos aged 21 years and above with capacity to pay
              </li>
            </ul>
            <Typography variant="h3" gutterBottom style={{ textAlign: "left" }}>
              Indirect Contributors
            </Typography>
            <ul style={{ textAlign: "left" }}>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/members/sponsored/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "black",
                  }}
                >
                  Indigents identified by the DSWD
                </a>
              </li>
              <li>Beneficiaries of Pantawid Pamilyang Pilipino Program</li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/members/senior/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "black",
                  }}
                >
                  Senior citizens
                </a>
              </li>
              <li>Persons with disability</li>
              <li>Sangguniang Kabataan officials</li>
              <li>
                Previously identified at point-of-service / sponsored by LGUs
              </li>
              <li>
                Filipinos aged 21 years old and above without capacity to pay
                premiums
              </li>
            </ul>
          </CardContent>
        </Card>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Members;
