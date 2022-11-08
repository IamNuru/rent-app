import { Typography, Box, Grid } from "@mui/material";
import { config } from "../../../../config";
import Region from "./Region";


const Explore = () => {
  const regions = [
    {
      name: "Savanah",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
    {
      name: "Western",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
    {
      name: "Northern",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
    {
      name: "Ashanti",
      image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
  ];
  return (
    <section>
      <Box mt={15} align="center">
        <Typography variant="h4" align="center" className="main-header">
          Explore Rooms on {config.appName ? config.appName : "RentGh"}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="main-header-description" gutterBottom>
          Take a deep dive and browse homes for sale, original neighborhood
          photos, resident reviews and local insights to find what is right for
          you.
        </Typography>
        <Box sx={{ flexGrow: 1 }} mt={2} style={{overflow:'auto', paddingBottom:"0.5rem"}}>
          <Grid container spacing={2} align="center" wrap="nowrap">
            {regions?.map((region) => {
              return (
                <Grid item key={region.name}>
                  <Region region={region} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default Explore;
