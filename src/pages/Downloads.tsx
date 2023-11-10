import React, { useEffect, useState } from "react";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import {
  Grid,
  Box,
  CardContent,
  Typography,
  Card,
  Button,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { link } from "fs";

const appStyle = {
  backgroundImage: "url(https://www.philhealth.gov.ph/images/bg_green.jpg)",
};
const bannerStyle = {
  width: "100%",
  height: "auto",
  paddingTop: "70px",
};

const textDesign: React.CSSProperties = {
  backgroundColor: "transparent",
  fontFamily: "Arial, sans-serif",
  fontSize: "20px",

  color: "#28A600",
  textDecoration: "none",
};

const linkStyles = {
  color: "black",

  listStyleType: "none",
  padding: 0,
  textDecoration: "none", // Remove underline
  "&:hover": {
    color: "#2C9B00", // Change color on hover
    textDecoration: "underline", // Add underline on hover if needed
  },
};

function Downloads() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="App" style={appStyle}>
      <Grid>
        <Grid item xs={12}>
          <NavMenu />
        </Grid>
        <Box>
          <img
            src="https://www.philhealth.gov.ph/downloads/images/downloads.jpg"
            alt="Banner pic"
            style={bannerStyle}
          />
        </Box>
        <Card
          sx={{
            boxShadow: 3,
            borderRadius: 5,
            background: "rgba(250, 250, 250, .5)",
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
            {/* Start of the first accordion */}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  style={{
                    width: "33%",
                    flexShrink: 0,
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    fontSize: "20px",
                  }}
                >
                  Forms
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body1" style={textDesign}>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          Membership
                        </Typography>

                        <a
                          href="https://www.philhealth.gov.ph/downloads/membership/pmrf_012020.pdf"
                          style={linkStyles}
                        >
                          PMRF: PhilHealth Member Registration Form
                        </a>
                        <br />
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          Claims
                        </Typography>

                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/ClaimSignatureForm_2018.pdf"
                          style={linkStyles}
                        >
                          PMRF-FN: PhilHealth Member Registration Form for
                          Foreign Nationals
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/ClaimForm1_092018.pdf"
                          style={linkStyles}
                        >
                          Claim Form 1: Member and Patient Information (Revised
                          September 2018)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/ClaimForm2_092018.pdf"
                          style={linkStyles}
                        >
                          Claim Form 2: Provider Information (Revised September
                          2018)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Claim Form 3: Patient's Clinical Record
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Claim Form 4: Clinical Summary
                        </a>
                        <br />
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          E-Claims
                        </Typography>

                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Software Certification Application Form (SCAF)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Non-Disclosure Agreement (NDA)»
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Software Certification Agreement (SCAF)
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          Dialysis Database
                        </Typography>

                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Registration Form
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Certification on Diagnosis and Management of CKD Stage
                          5
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          Payment
                        </Typography>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          PPPS: PhilHealth Premium Payment Slip (for ACAs)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          PPPS: PhilHealth Premium Payment Slip (for PhilHealth
                          Use Only)
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          Employers
                        </Typography>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          ER1: Employer Data Record
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          ER2: Report of Employee-Members
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          ER3: Employer Data Amendment Form
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          RF1: Employer's Remittance Report»
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          PhilHealth Employers' Engagement Representative (PEER)
                          Information Sheet
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Non Disclosure Agreement
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          Accredited Collecting Agents (ACAs)
                        </Typography>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Non-Disclosure Agreement (NDA)
                        </a>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          PhilHealth Online Access Form (POAF)
                        </a>
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      {/* Second space */}
                      <Typography variant="body1" style={textDesign}>
                        <br />
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          {" "}
                          Kasambahay
                        </Typography>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          PPS-HEUR1: Household Employer Unified Registration
                          Form
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          PPS-HEUR2: Household Employment Unified Report Form
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          PPS-KUR FORM: Kasambahay Unified Registration Form
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          PPS: Household PhilHealth Payment Slip
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          PhilHealth Employers' Engagement Representative (PEER)
                          Information Sheet
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Non Disclosure Agreement
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          COVID-19 Home Isolation Benefit Package
                        </Typography>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          COVID-19 Testing Package
                        </Typography>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex C - SARS-CoV-2 claims summary form and
                          instructions for electronic submission
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex D - Waiver for Directly Filed Claims for
                          SARS-CoV-2 Testing Package
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex E - Certificate of classification of at-risk
                          individuals and actual charges for SARS-CoV-2 test
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          RT PCR Test
                        </Typography>

                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex C - SARS-CoV-2 claims summary form and
                          instructions for electronic submission
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex D - Waiver for Directly Filed Claims for
                          SARS-CoV-2 Testing Package
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          PhilHealth Employers' Engagement Representative (PEER)
                          Information Sheet
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Annex E - Certificate of classification of at-risk
                          individuals and actual charges for SARS-CoV-2 test
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          Rheumatic Fever/Rheumatic Heart Disease (RF/RHD)
                        </Typography>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          I. Requirements for pre-authorization
                        </Typography>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          A. When claiming for Tranche 1
                        </Typography>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          1. Transmittal Form (Annex H)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          2. Checklist of Mandatory Services & Other services
                          (Annex C1 –RF/RHD)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          3. RF/RHD Satisfaction Questionnaire (Annex D-RF/RHD)
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          4. Checklist of Requirement for Reimbursement (Annex
                          E-RF/RHD)
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          B. When claiming for Tranche 2
                        </Typography>

                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          1. Transmittal Form (Annex H)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          2. Checklist of Mandatory Services & Other services
                          (Annex C2 –RF/RHD)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          3. RF/RHD Satisfaction Questionnaire (Annex D-RF/RHD)
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          4. Checklist of Requirement for Reimbursement (Annex
                          E-RF/RHD)
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          III. For patients requesting for a transfer to another
                          RF/RHD provider
                        </Typography>

                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          1. Letter of intent for transfer of RF/RHD care to a
                          referral RF/RHD provider(Annex G-RF/RHD)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          2. Checklist for Patient Transfer (Annex M-RF/RHD)
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          IV. Other forms
                        </Typography>

                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          1. RF/RHD systematic clinical assessment and follow-up
                          form (Annex N-RF/RHD)(Annex H)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          2. National RF/RHD Registry Data Sheet (Annex
                          O-RF/RHD)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          3. Clinical Pathway (Annex P-RF/RHD)
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          4. RF/RHD Passport
                        </a>
                        <br />
                      </Typography>
                    </Grid>
                  </Grid>
                  ;
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* End of the first accordion */}
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  style={{
                    width: "33%",
                    flexShrink: 0,
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    fontSize: "20px",
                  }}
                >
                  Accreditation Documents
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body1" style={textDesign}>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          Health IT partners
                        </Typography>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          e-Claims Implementation Guide »
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          Health Care Professionals
                        </Typography>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex A: Documentary Requirements for Accreditation of
                          Health Care Professionals
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex B: Provider Data Record for Health Care
                          Professionals
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex C: Supporting Documents for Updating of Records
                          of Health Care Professionals
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex D: Performance Commitment for Health Care
                          Professionals (Revised October 2022)
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Annex E: PhilHealth Regional Offices' Coverage Areas
                          and Contact Information
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          Health Care Facilitiess
                        </Typography>

                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex A: Documentary Requirement for Accreditation of
                          Health Facilities
                        </a>
                        <br />
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex B: Provider Data Record for Health Care
                          Facilities (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex C: Performance Commitment for Health Facilities
                          (Revised June 2023) (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex D: Classification of Administrative Offenses of
                          Health Care Providers as Provided in RA No. 10606
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Annex E: Classification of Offenses of Health Care
                          Providers as Provided in the PROAC of RA No. 11223
                        </a>
                        <Typography
                          variant="h5"
                          style={{
                            color: "#6DAD01",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            padding: "8px",
                          }}
                        >
                          ACPS Forms
                        </Typography>

                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          A. Notice of ACPS compliance for private facilities
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          B. Notice of ACPS compliance for public facilities
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          C. Notice of ACPS compliance for LGU-owned facilities
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          E. Notice of Change of Bank account for private
                          facilities
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          F. Notice of Change of Bank account for public
                          facilities
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          G. Notice of Change of Bank account for LGU-owned
                          facilities (p1)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          G. Notice of Change of Bank account for LGU-owned
                          facilities (p2)
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Email addresses of the Accreditation and Quality
                          Assurance Section ot the PROs
                        </a>
                        <br />
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      {/*Second space */}
                      <Typography variant="body1" style={textDesign}>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex A: Documentary Requirement for Accreditation of
                          Health Facilities
                        </a>
                        <br />
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex B: Provider Data Record for Health Care
                          Facilities (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex C: Performance Commitment for Health Facilities
                          (Revised June 2023) (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex D: Classification of Administrative Offenses of
                          Health Care Providers as Provided in RA No. 10606
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Annex E: Classification of Offenses of Health Care
                          Providers as Provided in the PROAC of RA No. 11223
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex A: Documentary Requirement for Accreditation of
                          Health Facilities
                        </a>
                        <br />
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex B: Provider Data Record for Health Care
                          Facilities (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex C: Performance Commitment for Health Facilities
                          (Revised June 2023) (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex D: Classification of Administrative Offenses of
                          Health Care Providers as Provided in RA No. 10606
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Annex E: Classification of Offenses of Health Care
                          Providers as Provided in the PROAC of RA No. 11223
                        </a>
                        <br />
                      </Typography>
                    </Grid>
                  </Grid>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography
                  style={{
                    width: "33%",
                    flexShrink: 0,
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    fontSize: "20px",
                  }}
                >
                  Z Benefit Documents
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Grid container spacing={1}>
                    <Grid item lg={20}>
                      <Typography variant="body1" style={textDesign}>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex A: Documentary Requirement for Accreditation of
                          Health Facilities
                        </a>
                        <br />
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex B: Provider Data Record for Health Care
                          Facilities (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex C: Performance Commitment for Health Facilities
                          (Revised June 2023) (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex D: Classification of Administrative Offenses of
                          Health Care Providers as Provided in RA No. 10606
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Annex E: Classification of Offenses of Health Care
                          Providers as Provided in the PROAC of RA No. 11223
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex A: Documentary Requirement for Accreditation of
                          Health Facilities
                        </a>
                        <br />
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex B: Provider Data Record for Health Care
                          Facilities (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex C: Performance Commitment for Health Facilities
                          (Revised June 2023) (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex D: Classification of Administrative Offenses of
                          Health Care Providers as Provided in RA No. 10606
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Annex E: Classification of Offenses of Health Care
                          Providers as Provided in the PROAC of RA No. 11223
                        </a>
                        <br />
                      </Typography>
                    </Grid>
                  </Grid>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography
                  style={{
                    width: "33%",
                    flexShrink: 0,
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    fontSize: "20px",
                  }}
                >
                  Konsulta
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Grid container spacing={1}>
                    <Grid item lg={20}>
                      <Typography variant="body1" style={textDesign}>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex A: Documentary Requirement for Accreditation of
                          Health Facilities
                        </a>
                        <br />
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex B: Provider Data Record for Health Care
                          Facilities (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex C: Performance Commitment for Health Facilities
                          (Revised June 2023) (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex D: Classification of Administrative Offenses of
                          Health Care Providers as Provided in RA No. 10606
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Annex E: Classification of Offenses of Health Care
                          Providers as Provided in the PROAC of RA No. 11223
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex A: Documentary Requirement for Accreditation of
                          Health Facilities
                        </a>
                        <br />
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex B: Provider Data Record for Health Care
                          Facilities (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex C: Performance Commitment for Health Facilities
                          (Revised June 2023) (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex D: Classification of Administrative Offenses of
                          Health Care Providers as Provided in RA No. 10606
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Annex E: Classification of Offenses of Health Care
                          Providers as Provided in the PROAC of RA No. 11223
                        </a>
                        <br />
                      </Typography>
                    </Grid>
                  </Grid>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography
                  style={{
                    width: "33%",
                    flexShrink: 0,
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    fontSize: "20px",
                  }}
                >
                  IEC Materials
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Typography
                    variant="h5"
                    style={{
                      color: "#6DAD01",
                      fontWeight: "bold",
                      backgroundColor: "transparent",
                      padding: "8px",
                    }}
                  >
                    Infomercials
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item lg={20}>
                      <Typography variant="body1" style={textDesign}>
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex A: Documentary Requirement for Accreditation of
                          Health Facilities
                        </a>
                        <br />
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex B: Provider Data Record for Health Care
                          Facilities (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex C: Performance Commitment for Health Facilities
                          (Revised June 2023) (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex D: Classification of Administrative Offenses of
                          Health Care Providers as Provided in RA No. 10606
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Annex E: Classification of Offenses of Health Care
                          Providers as Provided in the PROAC of RA No. 11223
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex A: Documentary Requirement for Accreditation of
                          Health Facilities
                        </a>
                        <br />
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex B: Provider Data Record for Health Care
                          Facilities (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex C: Performance Commitment for Health Facilities
                          (Revised June 2023) (FILLABLE)
                        </a>
                        <br />
                        <a
                          href="https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf"
                          style={linkStyles}
                        >
                          Annex D: Classification of Administrative Offenses of
                          Health Care Providers as Provided in RA No. 10606
                        </a>
                        <br />
                        <a
                          href="https://memberinquiry.philhealth.gov.ph/member/"
                          style={linkStyles}
                        >
                          Annex E: Classification of Offenses of Health Care
                          Providers as Provided in the PROAC of RA No. 11223
                        </a>
                        <br />
                      </Typography>
                    </Grid>
                  </Grid>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Downloads;
