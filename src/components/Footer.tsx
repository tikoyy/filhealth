import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Stack,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface BootstrapDialogProps {
  theme: any;
}

const AppBarStyled = styled(AppBar)({
  backgroundColor: "#194D00",
});

const BootstrapDialogStyled = styled(Dialog)<BootstrapDialogProps>(
  ({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  })
);

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openLink = (url: string) => () => {
    window.location.href = url;
  };

  return (
    <AppBarStyled position="static">
      <Toolbar style={{ minHeight: "40px" }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={3} textAlign="center">
            <Stack spacing={0} sx={{ mt: 3 }}>
              <Button
                onClick={openLink(
                  "https://www.philhealth.gov.ph/about_us/map/regional.htm"
                )}
                sx={{ color: "#FFFFFF" }}
              >
                Contact Us
              </Button>
              <Button
                onClick={openLink("https://www.philhealth.gov.ph/sitemap.html")}
                sx={{ color: "#FFFFFF" }}
              >
                Sitemap
              </Button>
              <Button onClick={handleClickOpen} sx={{ color: "#FFFFFF" }}>
                Disclaimer
              </Button>
              <BootstrapDialogStyled
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                theme={undefined}
              >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                  Disclaimer
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    The PhilHealth Logo, Photographs and information on this Web
                    Site may not be reproduced, copied, or downloaded in any
                    form or by any means -- graphic, electronic, or mechanical,
                    including recording, taping, photocopying, or information
                    storage and retrieval systems -- for use in illegal,
                    damaging or pornographic material.
                  </Typography>
                  <Typography gutterBottom>
                    But PhilHealth information may be used for educational or
                    informative purposes and may be reproduced, copied, or
                    downloaded without the written permission from PhilHealth.
                  </Typography>
                </DialogContent>
              </BootstrapDialogStyled>
              <Button
                onClick={openLink("https://www.philhealth.gov.ph/privacy/")}
                sx={{ color: "#FFFFFF" }}
              >
                Privacy Notice
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <Stack spacing={1.5} sx={{ mt: 4 }}>
              <Stack direction="row" justifyContent="center" spacing={2}>
                <Button
                  onClick={openLink("https://www.philhealth.gov.ph/konsulta/")}
                  sx={{ padding: 0, borderRadius: 2, marginRight: 2 }}
                >
                  <img
                    src="https://www.philhealth.gov.ph/konsulta/images/konsulta_bnnr_sml.jpg"
                    alt="Konsulta"
                    width="130"
                    height="50"
                  />
                </Button>
                <Button
                  onClick={openLink(
                    "https://www.philhealth.gov.ph/about_us/map/regional.htm"
                  )}
                  sx={{ padding: 0, borderRadius: 2, marginRight: 2 }}
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/contact_btn.jpg"
                    alt="Q&A contact us"
                    width="130"
                    height="50"
                  />
                </Button>
                <Button
                  onClick={openLink(
                    "https://www.philhealth.gov.ph/uhc/LibreNaBa.pdf"
                  )}
                  sx={{ padding: 0, borderRadius: 2 }}
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/uhc_btn.jpg"
                    alt="UHC"
                    width="130"
                    height="50"
                  />
                </Button>
              </Stack>
              <Stack direction="row" justifyContent="center" spacing={1.5}>
                <Button
                  onClick={openLink("https://www.philhealth.gov.ph/arta/")}
                  sx={{ padding: 0, borderRadius: 2 }}
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/arta_bnnr_sml.jpg"
                    alt="Anti Red Tape Act"
                    width="130"
                    height="50"
                  />
                </Button>
                <Button
                  onClick={openLink(
                    "https://www.philhealth.gov.ph/unclaimedrefunds/"
                  )}
                  sx={{ padding: 0, borderRadius: 2 }}
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/UnclaimedRefunds.jpg"
                    alt="unclaimed funds"
                    width="130"
                    height="50"
                  />
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3} textAlign="center">
            <Stack spacing={1} sx={{ mt: 4 }}>
              <Stack direction="row" justifyContent="center">
                <Button
                  onClick={openLink(
                    "https://www.facebook.com/PhilHealthOfficial/"
                  )}
                  sx={{
                    padding: 0,
                    borderRadius: 5,
                    backgroundColor: "transparent",
                  }}
                >
                  <FacebookIcon style={{ fill: "white" }} />
                </Button>
                <Button
                  onClick={openLink("https://twitter.com/teamphilhealth")}
                  sx={{
                    padding: 0,
                    borderRadius: 5,
                    backgroundColor: "transparent",
                  }}
                >
                  <TwitterIcon style={{ fill: "white" }} />
                </Button>
                <Button
                  onClick={openLink(
                    "https://www.youtube.com/user/teamphilhealth"
                  )}
                  sx={{
                    padding: 0,
                    borderRadius: 5,
                    backgroundColor: "transparent",
                  }}
                >
                  <YouTubeIcon style={{ fill: "white" }} />
                </Button>
              </Stack>
              <Stack
                direction="row"
                spacing={0}
                alignItems="center"
                justifyContent="center"
              >
                <Button
                  onClick={openLink(
                    "https://www.philhealth.gov.ph/about_us/transparency/"
                  )}
                  sx={{ padding: 0, borderRadius: 2 }}
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/transparency_seal.png"
                    alt="Transparency seal"
                    width="50"
                    height="50"
                  />
                </Button>
                <Button
                  onClick={openLink(
                    "https://www.philhealth.gov.ph/about_us/transparency/GOCC_Scorecard.pdf"
                  )}
                  sx={{ borderRadius: 2 }}
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/corp_gov.png"
                    alt="Gov Score Card"
                    width="50"
                    height="50"
                  />
                </Button>
                <Button
                  onClick={openLink(
                    "https://www.foi.gov.ph/requests?agency=PH"
                  )}
                  sx={{ padding: 0, borderRadius: 2 }}
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/foi_logo.png"
                    alt="Foi"
                    width="50"
                    height="50"
                  />
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              color="inherit"
              sx={{
                fontSize: "12px",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              &copy; 2014 Philippine Health Insurance Corporation | Citystate
              Centre, 709 Shaw Boulevard 1603 Pasig City | Action Center
              8441-7442
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBarStyled>
  );
};

export default Footer;
