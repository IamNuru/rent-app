import { Box, Grid, Pagination, Stack } from "@mui/material";
import Property from "../../home/components/listings/Property"
import ourProperties from "../../../_mock/ourProperties";


const PropertiesList = () => {


  return (
    <section style={{ backgroundColor: 'F6F6F6' }}>
      <Box mt={2} mb={2} align="center">
        <Box sx={{ flexGrow: 1 }} mt={2}>
          <Grid container spacing={2} align="center">
            {ourProperties?.map((property) => {
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
        <Pagination count={ourProperties?.length} color="primary" />
      </Stack>
    </section>
  );
};

export default PropertiesList;
