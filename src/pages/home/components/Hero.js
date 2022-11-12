import React from "react";
import "../styles/style.css";
import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import { Search } from "@mui/icons-material";

const Hero = () => {
  return (
    <Box className="hero-section" >
      <Box className="wrap-input" sx={{zIndex:10}}>
        <Typography
          align="center"
          variant="h5"
          gutterBottom={true}
          className="title"
        >
          Search for that room/appartment that best fit you
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={9}>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              className="search-input"
              
            />
          </Grid>
          <Grid item sx={{ marginLeft: { xs: "auto" } }} xs={12} sm={3}>
            <Button variant="contained" endIcon={<Search />}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
