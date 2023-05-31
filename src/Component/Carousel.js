import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  IconButton,
} from "@mui/material";
import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { CardContext } from "../use-context/CardContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import styles from "./Carousel.module.css";
import PlayPause from "./PlayPause";
import SingleCard from "./SingleCard";
const Carousel = () => {
  const [isSelected, setIsSelected] = useState(false);
  const { CARD_DATA, selectedCardHandler } = useContext(CardContext);
  const cardRef = useRef([]);

  useEffect(() => {
    cardRef.current.forEach((card, index) => {
      card.style.transform = `translateX(${(index - currentSlide) * 110}%)`;
    });
    console.log(cardRef.current);
  }, [CARD_DATA]);

  let currentSlide = 0;
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

  cardRef.current.forEach((card, index) => {
    card.style.transform = `translateX(${index * 110}%)`;
    if (isSelected) {
      card.style.filter = "grayscale(0%)";
    } else {
      card.style.filter = "grayscale(100%)";
    }
  });

  const selectCardHandler = (cardId) => {
    selectedCardHandler(cardId);
    setIsSelected(true);
  };

  return (
    <Box className={styles.container} maxWidth="xl">
      <Box className={styles.carousel_container}>
        <Box>
          {CARD_DATA.map((card, index) => (
            <SingleCard
              card={card}
              onCardSelection={selectCardHandler}
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
