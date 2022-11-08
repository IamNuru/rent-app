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
import HouseIcon from '@mui/icons-material/House';
import KeyIcon from '@mui/icons-material/Key';
import { Link } from "react-router-dom"
import {titleCase, lowerCase} from "change-case-all"
import formatDistance from "date-fns/formatDistance";

import useMediaQuery from "@mui/material/useMediaQuery";

import CurrencyFormatter from "../../../../utils/CurrencyFormatter";
import FirstLetter from "../../../../utils/FirstLetter";

const Property = ({ property }) => {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const sizes = isMediumScreen ? "medium" : "small";
  const rentIconStyle = {
    background: '#c3d0d3',
    padding: '3px',
    borderRadius: '4px',
    color: '#052124',
  }
  const homeIconStyle = {
    padding: '3px',
    borderRadius: '4px',
    background: '#c3d0d3',
    color: 'rgb(22 70 2)',
  }

  return (
    <Paper elevation={7}>
      <Link to={`/property/id/slug`}>
      <Card sx={{ maxWidth: 345, boxShadow:'none'}} >
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
          sx={{fontFamily:'Oswald'}}
          title={property?.title ? titleCase(lowerCase(property?.title)) : 'No title'}
          subheader={formatDistance(property?.date, new Date(), { addSuffix: true})}
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
              {
                property?.type === 'rent' ? 
                  <KeyIcon size='small' style={rentIconStyle} sx={{mr:'0.25rem'}} /> :
                  <HouseIcon size='small' style={homeIconStyle} sx={{mr:'0.25rem'}} /> 
              }
              <Typography variant="body1">{property?.title}</Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" my={1} align="left" className="merriweather" style={{fontWeight:'600'}}>
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
          GPS: 
        </Typography>
      </Card>
      </Link>
    </Paper>
  );
};

export default Property;
