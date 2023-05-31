import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";

const SingleCard = React.memo(
  React.forwardRef((props, ref) => {
    return (
      <div>
        <Card
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
