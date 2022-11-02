import { Typography, Box, Grid } from "@mui/material";
import { config } from "../../../../config";
import Property from "./Property";
import ourProperties from "../../../../_mock/ourProperties";

const Listings = () => {

  return (
    <section style={{backgroundColor: 'F6F6F6'}}>
      <Box mt={8} mb={2} align="center">
        <Typography variant="h4" align="center" className="main-header">
          Available Listings on RentGh{" "}
          {config.appName ? config.appName : "RentGh"}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="main-header-description" gutterBottom>
          Take a deep dive and browse homes for sale, original neighborhood
          photos, resident reviews and local insights to find what is right for
          you.
        </Typography>
        <Box sx={{ flexGrow: 1 }} mt={2} className="">
          <Grid container spacing={2} align="center">
            {ourProperties?.slice(0, 6).map((property) => {
              return (
                <Grid item key={property.id} xs={12} sm={6} md={4}>
                  <Property property={property} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default Listings;
