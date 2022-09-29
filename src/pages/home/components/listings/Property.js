import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Paper, Grid, Chip, Typography } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import CircleIcon from "@mui/icons-material/Circle";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import CurrencyFormatter from "../../../../utils/CurrencyFormatter";
import FirstLetter from "../../../../utils/FirstLetter";

const Property = ({ property }) => {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const sizes = isMediumScreen ? "medium" : "small";

  return (
    <Paper elevation={7}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            isMediumScreen ? (
              <Avatar sx={{ bgcolor: red[500] }} aria-label={property?.title}>
                {FirstLetter(property?.owner)}
              </Avatar>
            ) : (
              ""
            )
          }
          title={property?.title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={property?.image}
          alt={property?.title}
        />
        <Typography mt={2} component="div" pl={2}>
          <Grid container>
            <Grid item style={{display:"flex"}}>
              <CircleIcon size="small" style={{color:"#88EAFF"}} />
              <Typography variant="body1">{property?.title}</Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" my={1} align="left">
            {CurrencyFormatter.format(property?.price)}
          </Typography>
        </Typography>
        <CardContent>
          <Grid container rowSpacing={1} columnSpacing={2}>
            <Grid item>
              <Chip
                size={sizes}
                sx={{
                  "& .MuiChip-icon": {
                    color: property?.kitchen ? "#2e7d32" : "#d32f2f",
                  },
                }}
                icon={
                  property?.kitchen ? (
                    <CheckBoxIcon />
                  ) : (
                    <CancelPresentationIcon />
                  )
                }
                label="Kitchen"
              />
            </Grid>
            <Grid item>
              <Chip
                size={sizes}
                sx={{
                  "& .MuiChip-icon": {
                    color: property?.toilet ? "#2e7d32" : "#d32f2f",
                  },
                }}
                icon={
                  property?.toilet ? (
                    <CheckBoxIcon />
                  ) : (
                    <CancelPresentationIcon />
                  )
                }
                label="toilet"
              />
            </Grid>
            <Grid item>
              <Chip
                size={sizes}
                sx={{
                  "& .MuiChip-icon": {
                    color: property?.bath ? "#2e7d32" : "#d32f2f",
                  },
                }}
                icon={
                  property?.bath ? <CheckBoxIcon /> : <CancelPresentationIcon />
                }
                label="bath"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Typography variant="body2">{property?.address}</Typography>
        <Typography my={2} variant="body1">
          {" "}
          GPS: {property?.gps}{" "}
        </Typography>
      </Card>
    </Paper>
  );
};

export default Property;
