import { Typography, Box, Grid, Button } from "@mui/material";
import { config } from "../../../../config";
import Property from "./Property";
import ourProperties from "../../../../_mock/ourProperties";

const Listings = () => {

  return (
    <section style={{ backgroundColor: 'F6F6F6' }}>
      <Box mt={15} align="center">
        <Typography variant="h4" align="center" className="main-header">
          Available Listings on RentGh{" "}
          {config.appName ? config.appName : "RentGh"}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="main-header-description" gutterBottom>
          Take a deep dive and browse homes for sale, original neighborhood
          photos, resident reviews and local insights to find what is right for
          you.
        </Typography>
        <Box sx={{ width: '100%', textAlign: 'right' }}>
          <Button variant='contained' href='/properties'>View All</Button>
        </Box>
        <Box sx={{ flexGrow: 1 }} mt={2} className="">
          <Grid container spacing={2} align="center" 
          sx={{display:'grid', gridTemplateColumns:{xs:'repeat(2, 1fr)', sm:'repeat(2, 1fr)', md:'repeat(3, 1fr)', lg:'repeat(4, 1fr)'}, gridAutoRows:'1fr'}}>
            {ourProperties?.slice(0, 12).map((property) => {
              return (
                <Grid item key={property.id} sx={{maxWidth:{xs:'100%',sm:'100%', md:'100%'}}}>
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
