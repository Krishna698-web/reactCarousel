import React, { useContext, useEffect, useState } from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { CardContext } from "../use-content/CardContext";

// import styles from
const ImageCard = () => {
  const { CARD_DATA, selectedCard, isPlaying, setSelectedCard } =
    useContext(CardContext);

  let slideIndex = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex === CARD_DATA.length) {
        slideIndex = 0;
      } else {
        if (isPlaying) {
          setSelectedCard(CARD_DATA[slideIndex]);
          slideIndex++;
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [slideIndex, isPlaying]);

  return (
    <div>
      {selectedCard ? (
        <Card
          key={selectedCard.id}
          sx={{
            height: { md: "35rem", sm: "35rem" },
            width: { md: "100%", xs: "100%" },
            display: "flex",
            flexDirection: { md: "row", sm: "column", xs: "column" },
            mb: 2,
          }}>
          <CardMedia
            image={selectedCard.src}
            sx={{ height: "100%", width: "100%" }}
          />
          <CardContent sx={{ width: { md: "50%", xs: "100%" }, py: 3 }}>
            <Typography variant="h4">{selectedCard.title}</Typography>
            <Typography>{selectedCard.description}</Typography>
          </CardContent>
        </Card>
      ) : (
        <h2>Please select a card from the Carousel</h2>
      )}
    </div>
  );
};

export default ImageCard;
