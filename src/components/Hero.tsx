import React, { useEffect, useState } from "react";
import {Grid, Typography, Card, CardContent } from "@mui/material";

interface HeroProps {
  title?: string;
  subTitle?: string;
  header?: string;
  body?: string;
}

export default function Hero(props: HeroProps) {
  const maxHeight = 400;
  const [cardHeight, setCardHeight] = useState(maxHeight);

  const handleCardHeightChange = () => {
    const cardContent = document.querySelector(".card-content") as HTMLElement;

    if (cardContent) {
      const newCardHeight = cardContent.offsetHeight;
      setCardHeight(Math.min(newCardHeight, maxHeight));
    }
  };

  useEffect(() => {
    handleCardHeightChange();
  }, [props]);

  return (
    <Grid item sm={12} md={6}>
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 5,
          background: "rgba(255, 255, 255, 255)",
          marginX: { md: 2 },
          paddingY: 5,
          marginY: 1,
          paddingX: { md: 2 },
          flexGrow: 1,
          height: cardHeight,
        }}
      >
        <CardContent className="card-content">
          {props.header && <Typography variant="h4">{props.header}</Typography>}
          {props.title && <Typography variant="h5">{props.title}</Typography>}
          {props.subTitle && <Typography variant="h6">{props.subTitle}</Typography>}
          {props.body && <Typography variant="body1">{props.body}</Typography>}
        </CardContent>
      </Card>
    </Grid>
  );
}
