import React from "react";
import { Grid, TextField, Button, Container } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchProperties = () => {
  return (
    <Container maxWidth="sm">
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
    </Container>
  );
};

export default SearchProperties;
