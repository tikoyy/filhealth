import { Grid, Stack, Button } from "@mui/material";

function Others() {
  return (
    <Grid item xs={12} md={2}>
      <Stack
        direction="row"
        spacing={2}  // Adjust spacing between buttons
        justifyContent="center" // Center the buttons on all screen sizes
      >
        <Button
          onClick={() => {
            window.location.href =
              "https://www.philhealth.gov.ph/circulars/2023/";
          }}
          sx={{ color: "White", fontWeight: "bold", ":hover": { textDecoration: "underline" } }}
        >
          Circulars
        </Button>
        <Button
          onClick={() => {
            window.location.href =
              "https://www.philhealth.gov.ph/advisories/2023/";
          }}
          sx={{ color: "White", fontWeight: "bold", ":hover": { textDecoration: "underline" } }}
        >
          Advisories
        </Button>
        <Button
          onClick={() => {
            window.location.href = "https://www.philhealth.gov.ph/news/";
          }}
          sx={{ color: "White", fontWeight: "bold", ":hover": { textDecoration: "underline" } }}
        >
          News
        </Button>
        <Button
          onClick={() => {
            window.location.href =
              "https://www.philhealth.gov.ph/ofclstmnts/2023/";
          }}
          sx={{ color: "White", fontWeight: "bold", ":hover": { textDecoration: "underline" } }}
        >
          Official Statements
        </Button>
        <Button
          onClick={() => {
            window.location.href =
              "https://www.philhealth.gov.ph/suppliers/iaeb/index.htm";
          }}
          sx={{ color: "White", fontWeight: "bold", ":hover": { textDecoration: "underline" } }}
        >
          ITB
        </Button>
        <Button
          onClick={() => {
            window.location.href =
              "https://www.philhealth.gov.ph/about_us/vacancies/2023/";
          }}
          sx={{ color: "White", fontWeight: "bold", ":hover": { textDecoration: "underline" } }}
        >
          Job Vacancies
        </Button>
        <Button
          onClick={() => {
            window.location.href =
              "https://www.philhealth.gov.ph/joint_issuances/";
          }}
          sx={{ color: "White", fontWeight: "bold", ":hover": { textDecoration: "underline" } }}
        >
          Joint Issuances
        </Button>
      </Stack>
    </Grid>
  );
}

export default Others;
