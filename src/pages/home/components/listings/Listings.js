import { Typography, Box, Grid } from "@mui/material";
import { config } from "../../../../config";
import Property from "./Property";

const Listings = () => {
  const properties = [
    {
      title: "Single bed room",
      owner: "Nuru-deen",
      price: 3500,
      kitchen: false,
      toilet: true,
      bath: false,
      address: "Kokomelele adabaraka, Greater Accra region, Accra",
      gps: "AS-1084-2444",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
    {
      title: "Single bed room",
      owner: "Nuru-deen",
      price: 3500,
      kitchen: false,
      toilet: true,
      bath: false,
      address: "Kokomelele adabaraka, Greater Accra region, Accra",
      gps: "AS-1084-2444",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
    {
      title: "Single bed room",
      owner: "Nuru-deen",
      price: 3500,
      kitchen: false,
      toilet: true,
      bath: true,
      address: "Kokomelele adabaraka, Greater Accra region, Accra",
      gps: "AS-1084-2444",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
    {
      title: "Single bed room",
      owner: "Owner",
      price: 3500,
      kitchen: true,
      toilet: true,
      bath: false,
      address: "Kokomelele adabaraka, Greater Accra region, Accra",
      gps: "AS-1084-2444",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
    {
      title: "Single bed room",
      owner: "",
      price: 3500,
      kitchen: false,
      toilet: true,
      bath: false,
      address: "Kokomelele adabaraka, Greater Accra region, Accra",
      gps: "AS-1084-2444",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
    {
      title: "Single bed room",
      owner: "Nuru-deen",
      price: 3500,
      kitchen: false,
      toilet: true,
      bath: false,
      address: "Kokomelele adabaraka, Greater Accra region, Accra",
      gps: "AS-1084-2444",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
  ];

  return (
    <section style={{backgroundColor: 'F6F6F6'}}>
      <Box mt={8} mb={2} align="center">
        <Typography variant="h4" align="center">
          Available Listings on RentGh{" "}
          {config.appName ? config.appName : "RentGh"}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Take a deep dive and browse homes for sale, original neighborhood
          photos, resident reviews and local insights to find what is right for
          you.
        </Typography>
        <Box sx={{ flexGrow: 1 }} mt={2} className="">
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
    </section>
  );
};

export default Listings;
