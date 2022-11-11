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
import { Link } from "react-router-dom"
import { titleCase, lowerCase } from "change-case-all"
import formatDistance from "date-fns/formatDistance";

import useMediaQuery from "@mui/material/useMediaQuery";

import CurrencyFormatter from "../../../../utils/CurrencyFormatter";
import FirstLetter from "../../../../utils/FirstLetter";
import { Box } from "@mui/system";

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

const Property = ({ property }) => {
  SwiperCore.use([Navigation, Virtual]);
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const sizes = isMediumScreen ? "medium" : "small";
  return (
    <Paper elevation={7} sx={{ height: '100%' }}>
      <Card sx={{ maxWidth: 345, boxShadow: 'none' }} >
        <Link to={`/property/id/slug`} style={{color:'black'}}>
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
            className="property-card-heder"
            title={property?.title ? titleCase(lowerCase(property?.title)) : 'No title'}
            titleTypographyProps={{
              fontSize: 16,
              fontFamily: 'Merriweather',
              fontWeight: 600,
              textAlign: 'left'
            }}
            subheader={formatDistance(property?.date, new Date(), { addSuffix: true })}
          />
        </Link>
        <Swiper
          navigation
          virtual
        >
          {
            property?.image.map((img, index) => {
              return <SwiperSlide key={img} virtualIndex={index}>
                <CardMedia
                  component="img"
                  height="194"
                  image={img}
                  alt={property?.title}
                />
              </SwiperSlide>
            })
          }

        </Swiper>
        <Typography mt={2} component="div" pl={2}>
          <Grid container>
            <Grid item>
              <Box>
                {
                  <Chip size="small"
                    label={property?.type === 'rent' ? 'For Rent' : 'For Sale'}
                    color={property?.type === 'rent' ? 'secondary' : 'success'}
                    sx={{ mr: '0.25rem', float: 'left' }} />
                }
                <Typography variant="body1" sx={{ textAlign: 'left' }}>{property?.title}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body2" my={1} align="left" className="merriweather" sx={{ fontWeight: '600', fontSize: { xs: '1.25rem', sm: '1.45rem' } }}>
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
    </Paper>
  );
};

export default Property;
