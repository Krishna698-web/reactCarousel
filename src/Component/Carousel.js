import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  IconButton,
} from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import { CardContext } from "../use-content/CardContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import styles from "./Carousel.module.css";
const Carousel = () => {
  const { CARD_DATA, selectedCardHandler } = useContext(CardContext);
  // const cardsRef = useRef(null);
  // console.log(cardsRef.current.children);
  const cards = document.querySelectorAll(".card");
  let currentSlide = 0;
  const forwards = () => {
    if (currentSlide === cards.length - 3) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    cards.forEach((card, index) => {
      card.style.transform = `translateX(${(index - currentSlide) * 110}%)`;
    });
  };

  const backwards = () => {
    if (currentSlide === 0) {
      currentSlide = cards.length - 3;
    } else {
      currentSlide--;
    }
    cards.forEach((card, index) => {
      card.style.transform = `translateX(${(index - currentSlide) * 110}%)`;
    });
  };

  cards.forEach((card, index) => {
    card.style.transform = `translateX(${index * 110}%)`;
  });
  //   useEffect(() => {}, [currentSlide]);

  return (
    <Box className={styles.carousel_container}>
      <Box sx={{ position: "absolute", top: 0 }}>
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
              top: "10%",
              transition: ".4s",
            }}
            onClick={() => selectedCardHandler(card.id)}>
            <CardActionArea>
              <CardMedia image={card.src} sx={{ height: 120, width: 170 }} />
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <IconButton
        onClick={backwards}
        className={styles.backward_btn}
        sx={{ background: "white" }}
        disableRipple>
        <ArrowBackIosNewIcon sx={{ fontSize: "1.2rem" }} />
      </IconButton>
      <IconButton
        onClick={forwards}
        className={styles.forward_btn}
        sx={{ background: "white" }}
        disableRipple>
        <ArrowForwardIosIcon sx={{ fontSize: "1.2rem" }} />
      </IconButton>
    </Box>
  );
};

export default Carousel;
