import Explore from "./components/explore-rooms/Explore";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Listings from "./components/listings/Listings";
import Values from "./components/Values";
import "./styles/style.css";
import Page from "../../components/Page.js"

const Home = () => {
  return (<Page title="Home Page" className="home">
        <Hero />
        <Values />
        <Explore />
        <Listings />
        <Statistics />
      </Page>
  );
};

export default Home;
