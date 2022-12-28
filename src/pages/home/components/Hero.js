import "../styles/style.css";
import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import { Search } from "@mui/icons-material";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup'

const Hero = () => {
  const navigate = useNavigate()


  const formik = useFormik({
    initialValues: {
      searchField: '',
    },

    validationSchema: Yup.object({
      searchField: Yup.string()
        .min(2, 'Search field must contain minimum of 2 charaters')
        .max(20, 'Search field must contain maximum of 20 charaters')
    }),

    onSubmit: ({ searchField }) => {
      navigate({
        pathname: "search",
        search: createSearchParams({
          q: searchField
        }).toString()
      });
    }
  })

  return (
    <Box className="hero-section" >
      <Box className="wrap-input" sx={{ zIndex: 10 }}>
        <Typography
          align="center"
          variant="h5"
          gutterBottom={true}
          className="title"
        >
          Search for that room/appartment that best fit you
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={9}>
              <TextField
                name="searchField"
                size="small"
                id="outlined-basic"
                variant="outlined"
                className="search-input"
                placeholder="Example: Property for sale"
                onChange={formik.handleChange}
                value={formik.values.searchField}
                error={formik.errors.searchField}
                helperText={formik.errors.searchField}
              />
            </Grid>
            <Grid item sx={{ marginLeft: { xs: "auto" } }} xs={12} sm={3}>
              <Button variant="contained" endIcon={<Search />} type="submit">
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Hero;
