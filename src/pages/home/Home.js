import Explore from "./components/explore-rooms/Explore";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Listings from "./components/listings/Listings";
import Values from "./components/Values";
import "./styles/style.css";

const Home = () => {
  return (<div className="home">
        <Hero />
        <Values />
        <Explore />
        <Listings />
        <Statistics />
      </div>
  );
};

export default Home;
