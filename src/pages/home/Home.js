import Hero from "./components/Hero";
//import Explore from "./components/explore-rooms/Explore";
import Statistics from "./components/Statistics";
import Listings from "./components/listings/Listings";
import Values from "./components/Values";
import "./styles/style.css";
import Page from "../../components/Page.js"
import Requests from "./components/Requests";
import { Box } from "@mui/material";

const Home = () => {
  return (<Page title="Home Page" className="home">
    <Hero />
    <Box mt={0}>
      <Values />
    </Box>
    <Box mt={25}>
      <Requests />
    </Box>
    {/* <Box mt={24}>
      <Explore />
    </Box> */}
    <Box sx={{ marginTop: { xs: 5, sm: 8, md: 15 } }}>
      <Listings />
    </Box>
    <Box mt={25}>
      <Statistics />
    </Box>
  </Page>
  );
};

export default Home;
