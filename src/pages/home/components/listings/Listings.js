import { Typography, Box, Grid, Button } from "@mui/material";
import { config } from "../../../../config";
import Property from "./Property";
import EmptyList from "../../../../components/EmptyList";
import PropertySkeleton from "../../../../components/skeletons/PropertySkeleton";
import { useGetPropertiesQuery } from "../../../../features/api/propertyApiService";
import MobileProperty from "../../../../components/MobileProperty";
import useMobile from "../../../../hooks/useMobile";
import ServerErrorMessage from "../../../../components/errors/ServerErrorMessage";

const Listings = () => {
  const { data, isLoading, isFetching, isError, error } = useGetPropertiesQuery();
  const properties = data ? data.properties : null
  const mobile = useMobile();

  return (
    <section style={{ backgroundColor: 'F6F6F6' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" align="center" className="main-header" sx={{ fontSize: { xs: '1.75rem !important' } }}>
          Available Listings on RentGh{" "}
          {config.appName ? config.appName : "RentGh"}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="main-header-description" gutterBottom>
          Take a deep dive and browse homes for sale, original neighborhood
          photos, resident reviews and local insights to find what is right for
          you.
        </Typography>
        {
          isLoading && properties?.length > 0 ? <>
            <PropertySkeleton />
          </> : isFetching ? <>
            <EmptyList title="Fetching Properties" description="We are Fetching your data. Please wait" />
          </> : isError ? <>
            <ServerErrorMessage title="An Error Occured" error={error}/>
          </> :
            properties?.length > 0 ? (
              <>
                <Box sx={{ width: '100%', textAlign: 'right' }}>
                  <Button variant='contained' href='/properties'>View All</Button>
                </Box>

                <Box sx={{ flexGrow: 1 }} mt={2}>
                  {
                    !mobile ?
                      <Grid container spacing={5} align="center" sx={{ justifyContent: 'center' }}>
                        {properties?.slice(0, 12).map((property) => {
                          return (
                            <Grid item key={property.id} xs={12} sm={4} lg={3}>
                              <Property property={property} />
                            </Grid>
                          );
                        })}
                      </Grid>
                      :
                      <Box>
                        {properties?.slice(0, 12).map((property) => {
                          return (
                            <Box key={property.id} sx={{overflowX:'scroll'}}>
                              <MobileProperty property={property} />
                            </Box>
                          );
                        })}
                      </Box>

                  }
                </Box></>
            ) : (
              <EmptyList
                title="No Properties"
                description='We currently have no properties for listing Yet. Check back later'
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
