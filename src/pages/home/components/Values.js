import React from "react";
import Value from "./Value";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
/* import "../styles/style.css"; */

const Values = () => {
  const ourValues = [
    {
      id: 1,
      title: "Rent a room",
      description:
        "Get the best room of your choice and rent.Review the room and then go for it.",
      image:
        "https://cdn.pixabay.com/photo/2017/05/18/11/04/key-2323278_640.jpg",
    },
    {
      id: 2,
      title: "Rent an apartment",
      description:
        "Get the best room of your choice and rent.Review the room and then go for it.",
      image:
        "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_640.jpg",
    },
    {
      id: 3,
      description:
        "Get the best room of your choice and rent.Review the room and then go for it.",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }} mt={2} className="valuelllls">
      <Grid container rowSpacing={4} align="center">
        {ourValues?.map((value) => {
          return (
            <Grid item xs={12} md={4} key={value.id}>
              <Value value={value} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Values;