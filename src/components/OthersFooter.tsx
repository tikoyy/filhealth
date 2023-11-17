import React from "react";
import { Grid, Stack, Button } from "@mui/material";

interface LinkButtonProps {
  href: string;
  label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, label }) => (
  <Button
    onClick={() => {
      window.location.href = href;
    }}
    sx={{ color: "White", fontWeight: "bold", ":hover": { textDecoration: "underline" } }}
  >
    {label}
  </Button>
);

function Others() {
  return (
    <Grid item xs={12} md={2}>
      <Stack
        direction="row"
        spacing={2}  // Adjust spacing between buttons
        justifyContent="center" // Center the buttons on all screen sizes
      >
        <LinkButton href="https://www.philhealth.gov.ph/circulars/2023/" label="Circulars" />
        <LinkButton href="https://www.philhealth.gov.ph/advisories/2023/" label="Advisories" />
        <LinkButton href="https://www.philhealth.gov.ph/news/" label="News" />
        <LinkButton href="https://www.philhealth.gov.ph/ofclstmnts/2023/" label="Official Statements" />
        <LinkButton href="https://www.philhealth.gov.ph/suppliers/iaeb/index.htm" label="ITB" />
        <LinkButton href="https://www.philhealth.gov.ph/about_us/vacancies/2023/" label="Job Vacancies" />
        <LinkButton href="https://www.philhealth.gov.ph/joint_issuances/" label="Joint Issuances" />
      </Stack>
    </Grid>
  );
}

export default Others;
