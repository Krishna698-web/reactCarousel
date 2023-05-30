import { Box, Button, Card, CardActionArea, CardMedia } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { CardContext } from "../use-content/CardContext";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const Carousel = () => {
  const { CARD_DATA, selectedCardHandler } = useContext(CardContext);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      card.style.transform = `translateX(${index * 110}%)`;
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "whitesmoke",
        p: 3,
        position: "relative",
        maxWidth: "700px",
        width: "100%",
        height: 100,
        // background: "blue",
        display: "grid",
        alignItems: "center",
        gap: 1,
        overflow: "hidden",
      }}>
      {CARD_DATA.map((card) => (
        <Card
          key={card.id}
          className="card"
          sx={{
            heigth: "100%",
            borderRadius: 1,
            width: "max-content",
            display: "inline-block",
            position: "absolute",
          }}
          onClick={() => selectedCardHandler(card.id)}>
          <CardActionArea>
            <CardMedia image={card.src} sx={{ height: 120, width: 170 }} />
          </CardActionArea>
        </Card>
      ))}
      <Button
        sx={{
          borderRadius: 2,
          boxShadow: "0 2px 1rem -8px black",
          width: 2,
          background: "white",
          mx: 1,
          position: "absolute",
          left: 2,
          top: "40%",
        }}>
        <ArrowLeftIcon sx={{ fontSize: "2rem" }} />
      </Button>
      <Button
        sx={{
          borderRadius: 2,
          boxShadow: "0 2px 1rem -8px black",
          width: 2,
          background: "white",
          mx: 1,
          position: "absolute",
          right: 2,
          top: "40%",
        }}
        size="small">
        <ArrowRightIcon sx={{ fontSize: "2rem" }} />
      </Button>
    </Box>
  );
};

export default Carousel;
