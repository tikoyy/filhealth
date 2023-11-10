import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel() {
  return (
    <Box sx={{ paddingY: 1 }} mt={8}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
        interval={3000}
      >
        <div>
          <img src="https://www.philhealth.gov.ph/images/thankyou_bnnr01.jpg" />
        </div>
        <div>
          <img src="https://www.philhealth.gov.ph/images/membership_bnnr02.jpg" />
        </div>
        <div>
          <img src="https://www.philhealth.gov.ph/images/konpckg_bnnr03.jpg" />
        </div>
        <div>
          <img src="https://www.philhealth.gov.ph/images/netsatisfaction_bnnr.jpg" />
        </div>
        <div>
          <img src="https://www.philhealth.gov.ph/images/hotline_bnnr_v1.jpg" />
        </div>
        <div>
          <img src="https://www.philhealth.gov.ph/images/callback_33.jpg" />
        </div>
        <div>
          <img src="https://www.philhealth.gov.ph/images/bagongpilipinas_bnnr_v1.jpg" />
        </div>
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;
