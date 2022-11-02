import React from "react";
import { Grid, TextField, Button, Container, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchProperties = () => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={1}>
        <Grid item xs={10} sm={9}>
          <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            className="search-input"
          />
        </Grid>
        <Grid item xs={2} sm={3}>
          <Button variant="contained" endIcon={<Search />}>
            <Typography sx={{display:{xs:'none', sm:'block'}}}>Search</Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchProperties;
