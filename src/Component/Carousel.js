import { Box, IconButton } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CardContext } from "../use-context/CardContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import styles from "./Carousel.module.css";
import PlayPause from "./PlayPause";
import SingleCard from "./SingleCard";
const Carousel = () => {
  const { CARD_DATA, selectedCardHandler } = useContext(CardContext);
  const cardRef = useRef([]);
  let currentSlide = 0;

  useEffect(() => {
    cardRef.current.forEach((card, index) => {
      card.style.transform = `translateX(${(index - currentSlide) * 110}%)`;
    });
    console.log(CARD_DATA);
  }, [CARD_DATA, currentSlide]);

  const forwards = () => {
    if (currentSlide === CARD_DATA.length - 3) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    cardRef.current.forEach((card, index) => {
      card.style.transform = `translateX(${(index - currentSlide) * 110}%)`;
    });
  };

  const backwards = () => {
    if (currentSlide === 0) {
      currentSlide = CARD_DATA.length - 3;
    } else {
      currentSlide--;
    }
    cardRef.current.forEach((card, index) => {
      card.style.transform = `translateX(${(index - currentSlide) * 110}%)`;
    });
  };

  const cardSelectionHandler = (cardId) => {
    selectedCardHandler(cardId);
  };

  return (
    <Box className={styles.container} maxWidth="xl">
      <Box className={styles.carousel_container}>
        <Box>
          {CARD_DATA.map((card, index) => (
            <SingleCard
              key={card.id}
              card={card}
              onCardSelection={cardSelectionHandler}
              ref={cardRef}
              index={index}
            />
          ))}
        </Box>
        <Box className={styles.btn_container}>
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
      </Box>
      <PlayPause />
    </Box>
  );
};

export default Carousel;
