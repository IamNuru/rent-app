import { Box, Grid, Pagination, Stack } from "@mui/material";
import Property from "../../home/components/listings/Property"


const PropertiesList = ({ properties, page, setPage, data }) => {

  const handleChange = (e, v) =>{
    setPage(v)
  }

  return (
    <section style={{ backgroundColor: 'F6F6F6' }}>
      <Box mt={2} mb={2} align="center">
        <Box sx={{ flexGrow: 1 }} mt={2}>
          <Grid container spacing={2} align="center">
            {properties?.map((property) => {
              return (
                <Grid item key={property.id} xs={12} sm={6} md={4}>
                  <Property property={property} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Stack spacing={2} mt={4} style={{ alignItems: "center" }}>
        <Pagination type="next" page={page} count={Math.ceil(data?.total / data?.per_page)}
          color="primary" onChange={handleChange} />
      </Stack>
    </section>
  );
};

export default PropertiesList;
