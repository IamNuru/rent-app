import { Typography, Box, Grid, Button } from "@mui/material";
import { config } from "../../../../config";
import Property from "./Property";
import ourProperties from "../../../../_mock/ourProperties";
import EmptyList from "../../../../components/EmptyList";

const Listings = () => {

  return (
    <section style={{ backgroundColor: 'F6F6F6' }}>
      <Box mt={12} sx={{ textAlign: 'center' }}>
        <Typography variant="h4" align="center" className="main-header">
          Available Listings on RentGh{" "}
          {config.appName ? config.appName : "RentGh"}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="main-header-description" gutterBottom>
          Take a deep dive and browse homes for sale, original neighborhood
          photos, resident reviews and local insights to find what is right for
          you.
        </Typography>
        {
          ourProperties?.length > 0 ? (
            <>
              <Box sx={{ width: '100%', textAlign: 'right' }}>
                <Button variant='contained' href='/properties'>View All</Button>
              </Box>
              <Box sx={{ flexGrow: 1 }} mt={2}>
                <Grid container spacing={2} align="center">
                  {ourProperties?.slice(0, 12).map((property) => {
                    return (
                      <Grid item key={property.id} xs={12} sm={4} lg={3}>
                        <Property property={property} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box></>
          ) : (
            <EmptyList
              title="No Properties"
              description='We currently any properties for listing Yet. Check back later'
              elevation={0}
              sx={{ border: '1px solid gray' }}
            />
          )
        }
      </Box>
    </section>
  );
};

export default Listings;
