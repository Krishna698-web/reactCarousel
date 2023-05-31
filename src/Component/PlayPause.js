import React, { useContext } from "react";
import { CardContext } from "../use-content/CardContext";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { IconButton } from "@mui/material";
import styles from "./Carousel.module.css";

const PlayPause = () => {
  const { isPlaying, setIsPlaying } = useContext(CardContext);

  return (
    <IconButton onClick={() => setIsPlaying(!isPlaying)}>
      {!isPlaying ? (
        <PlayCircleFilledWhiteIcon
          sx={{ fontSize: "5rem" }}
          color="primary"
          className={styles.playButton}
        />
      ) : (
        <PauseCircleFilledIcon
          sx={{ fontSize: "5rem" }}
          color="primary"
          className={styles.pauseButton}
        />
      )}
    </IconButton>
  );
};

export default PlayPause;
