import { Box, Grid, Pagination, Stack } from "@mui/material";
import Property from "../../home/components/listings/Property"

const PropertiesList = () => {
  const properties = [
    {
      id:8,
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
      id:1,
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
      id:2,
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
      id:3,
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
      id:4,
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
      id:5,
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
      <Box mt={2} mb={2} align="center">
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
      <Stack spacing={2} mt={4} style={{ alignItems: "center" }}>
          <Pagination count={properties?.length} color="primary" />
        </Stack>
    </section>
  );
};

export default PropertiesList;
