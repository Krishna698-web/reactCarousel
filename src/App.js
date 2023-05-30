import ImageCard from "./Component/ImageCard";
import "./App.css";
import Carousel from "./Component/Carousel";
import { Stack } from "@mui/material";

function App() {
  return (
    <div>
      <Stack
        direction={{ sm: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ width: "100%", p: 1 }}
        useFlexGap>
        <ImageCard />
        <Carousel />
      </Stack>
    </div>
  );
}

export default App;
