import React from "react";
import "../styles/style.css";
import { TextField, Typography, Button } from "@mui/material";
import { Search } from "@mui/icons-material";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="wrap-input">
        <Typography
          align="center"
          variant="h5"
          gutterBottom={true}
          className="title"
        >
          Search for that room/appartment that best fit you
        </Typography>
        <div className="flex">
          <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            className="search-input"
          />
          <Button variant="contained" endIcon={<Search />}>
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
