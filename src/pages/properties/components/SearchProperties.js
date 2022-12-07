import React from "react";
import { Grid, TextField, Button, Container, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { propertyActions } from "../../../redux/slices/propertySlice";

const SearchProperties = () => {
  const { properties, filteredProperties } = useSelector(state => state.properties);
  const dispatch = useDispatch();

  const handleChange = e =>{
    dispatch(propertyActions.filterProperties(e.target.value))
  }

  return (
    <Container maxWidth="sm">
      <Grid container spacing={1}>
        <Grid item xs={10} sm={9}>
          <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            className="search-input"
            onChange = {handleChange}
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
