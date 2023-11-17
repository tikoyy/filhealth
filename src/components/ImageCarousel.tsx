import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselItemProps {
  imageUrl: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ imageUrl }) => (
  <div>
    <img src={imageUrl} alt="" />
  </div>
);

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => (
  <Box sx={{ paddingY: 1 }} mt={8}>
    <Carousel
      showThumbs={false}
      autoPlay={true}
      showStatus={false}
      infiniteLoop={true}
      interval={3000}
    >
      {images.map((imageUrl, index) => (
        <CarouselItem key={index} imageUrl={imageUrl} />
      ))}
    </Carousel>
  </Box>
);

export default ImageCarousel;
