import React, { useContext } from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { CardContext } from "../use-content/CardContext";

const ImageCard = () => {
  const { CARD_DATA, selectedCard } = useContext(CardContext);
  return (
    <div>
      {selectedCard ? (
        <Card
          key={selectedCard.id}
          sx={{
            height: { md: "100%", xs: "50%" },
            width: { md: "80%", xs: "100%" },
            display: "flex",
            flexDirection: { xs: "column", md: "row", sm: "row" },
          }}>
          <CardMedia
            image={selectedCard.src}
            sx={{ height: { sx: "50%" }, width: "69%" }}
          />
          <CardContent sx={{ width: "30%" }}>
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
