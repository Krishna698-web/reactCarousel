import { Card, CardActionArea, CardMedia } from "@mui/material";
import React, { memo, useContext } from "react";
import styles from "./Carousel.module.css";
import { CardContext } from "../use-context/CardContext";

const SingleCard = memo(
  React.forwardRef((props, ref) => {
    const { isSelected } = useContext(CardContext);
    console.log(isSelected);
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
          id={props.card.id}
          ref={(el) => (ref.current[props.index] = el)}
          onClick={() => props.onCardSelection(props.card.id)}>
          <CardActionArea>
            <CardMedia
              image={props.card.src}
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
