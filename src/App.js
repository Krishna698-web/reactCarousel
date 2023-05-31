import ImageCard from "./Component/ImageCard";
import "./App.css";
import Carousel from "./Component/Carousel";
import { Container, Stack } from "@mui/material";
import PlayPause from "./Component/PlayPause";

function App() {
  return (
    <div>
      <Container
        direction={{ sm: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ width: "100%", p: 1 }}>
        <ImageCard />
        <Carousel />
      </Container>
    </div>
  );
}

export default App;
