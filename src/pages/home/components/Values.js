import React from "react";
import Value from "./Value";
import Box from "@mui/material/Box";
/* import "../styles/style.css"; */

const Values = () => {
  const ourValues = [
    {
      id: 123,
      title: "Rent a room",
      url: '/properties',
      description:
        "Get the best room of your choice and rent.Review the room and then go for it.",
      image:
        "https://cdn.pixabay.com/photo/2017/05/18/11/04/key-2323278_960_720.jpg",
        
    },
    {
      id: 200,
      title: "Buy a house",
      url: '/properties',
      description:
        "Browse through most affordable houses and go for the best offer.",
      image:
        "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_640.jpg",
    },
    {
      id: 143,
      title: "Make a Request",
      url: '/make-request',
      description:
        "Create a request for any you want. Be it renting a room, apartment, office or buying a house.",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
  ];

  return (
    <Box sx={{textAlign:'center'}}>
      <Box 
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' },
          justifyContent: 'center',
          gap:4
        }}>

        {ourValues?.map((value, index) => {
          return (
            <Box key={value.id} sx={{ zIndex: 100, height: '100%', mt:{xs:4} }}>
              <Value value={value}  />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Values;
