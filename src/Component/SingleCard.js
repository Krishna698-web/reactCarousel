import { Card, CardActionArea, CardMedia } from "@mui/material";
import React, { memo, useContext } from "react";
import styles from "./Carousel.module.css";
import { CardContext } from "../use-context/CardContext";

const SingleCard = memo(
  React.forwardRef(({ card, onCardSelection, index, isSelected }, ref) => {
    return (
      <div>
        <Card
          className={`card ${isSelected ? styles.active : styles.not_active}`}
          sx={{
            heigth: "100%",
            borderRadius: 1,
            width: "max-content",
            display: "inline-block",
            position: "absolute",
            top: "10%",
            transition: ".4s",
          }}
          id={card.id}
          ref={(el) => (ref.current[index] = el)}
          onClick={() => onCardSelection(card.id)}>
          <CardActionArea>
            <CardMedia
              image={card.src}
              sx={{
                height: 120,
                width: 170,
              }}
            />
          </CardActionArea>
        </Card>
      </div>
    );
  })
);

export default SingleCard;
