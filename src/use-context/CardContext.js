import React, { createContext, useState } from "react";
import elephants from "../images/elephants.jpg";
import robots from "../images/robots.jpg";
import lonelyGirl from "../images/lonely-girl.jpg";
import family from "../images/family.jpg";
import waterfall from "../images/waterfall.jpg";
import baby from "../images/baby.jpg";
import blueCity from "../images/jodhpur.jpg";
import kerala from "../images/kerala.jpg";
import { Card, cardHeaderClasses } from "@mui/material";

const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const CARD_DATA = [
    {
      id: "c1",
      src: waterfall,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: "Beauty of Earth",
      selected: false,
    },
    {
      id: "c2",
      src: robots,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: "Robots family",
      selected: false,
    },
    {
      id: "c3",
      src: lonelyGirl,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: "Lonely Girl",
      selected: false,
    },
    {
      id: "c4",
      src: family,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: "Happy Family",
      selected: false,
    },
    {
      id: "c5",
      src: baby,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: "Sleeping Baby",
      selected: false,
    },
    {
      id: "c6",
      src: elephants,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: "The mama Elephant and its baby",
      selected: false,
    },
    {
      id: "c7",
      src: blueCity,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: "Jodhpur (Blue City)",
      selected: false,
    },
    {
      id: "c8",
      src: kerala,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: "Kerala",
      selected: false,
    },
  ];

  const selectedCardHandler = (cardId) => {
    const theCard = CARD_DATA.filter((card) => card.id === cardId);
    setSelectedCard(...theCard);
    const otherCards = CARD_DATA.filter((card) => card.id !== cardId);
    otherCards.forEach((card) => {
      card.selected = false;
    });
    CARD_DATA[CARD_DATA.indexOf(theCard[0])].selected = true;
  };

  return (
    <CardContext.Provider
      value={{
        CARD_DATA,
        selectedCardHandler,
        selectedCard,
        isPlaying,
        setSelectedCard,
        setIsPlaying,
      }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContextProvider, CardContext };
