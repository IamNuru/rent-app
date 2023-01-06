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
import { titleCase, lowerCase, upperCase } from "change-case-all"
import formatDistance from "date-fns/formatDistance";
import { isArray } from 'lodash'

import useMediaQuery from "@mui/material/useMediaQuery";

import CurrencyFormatter from "../../../../utils/CurrencyFormatter";
import FirstLetter from "../../../../utils/FirstLetter";
import { Box } from "@mui/system";
import {PROPERTY_AMENITIES} from '../../../../Constants'

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
  const noImage = "/static/no-post-image.jpg"
  return (
    <Paper elevation={7} sx={{ height: '100%' }}>
      <Card sx={{ boxShadow: 'none' }} >
        <Link to={`/property/${property.id}/${property.slug}`} style={{ color: 'black' }}>
          <CardHeader
            avatar={
              isMediumScreen ? (
                <Avatar sx={{ bgcolor: red[500] }} aria-label={property?.title}>
                  {upperCase(FirstLetter(property?.user.first_name))}
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
            subheader={formatDistance(new Date(property?.created_at), new Date(), { addSuffix: true })}
          />
        </Link>
        <Swiper
          navigation
        >
          {
            property?.imageslist?.length > 0 ?
              property?.imageslist?.map((img, index) => {
                return <SwiperSlide key={index}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={img.url}
                    onError={e => {
                      e.target.src = noImage;
                    }}
                    alt={img.title ? img.title : 'No title'}
                  />
                </SwiperSlide>
              })
              :
              <CardMedia
                component="img"
                height="194"
                image={noImage}
                alt="No image for this property"
              />

          }

        </Swiper>
        <Typography mt={2} component="div" pl={2}>
          <Grid container>
            <Grid item>
              <Box >
                {
                  <Chip size="small"
                    label={property?.type === 'rent' ? 'For Rent' : 'For Sale'}
                    color={property?.type === 'rent' ? 'secondary' : 'success'}
                    sx={{  float:'left'}} />
                }
                <Typography className="property-description" variant="body1" sx={{ textAlign: 'left' }}>{property?.description}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body2" my={1} align="left" className="merriweather" sx={{ fontWeight: '600', fontSize: { xs: '1.25rem', sm: '1.45rem' } }}>
            {CurrencyFormatter.format(property?.price)}
          </Typography>
        </Typography>
        <CardContent>
          <Grid container rowSpacing={1} columnSpacing={2}>
            {
              PROPERTY_AMENITIES?.map((ame, i) => {
                return <Grid item key={i}>
                  {
                    isArray(property?.amenities) ? (
                      <Chip
                        size={sizes}
                        sx={{
                          "& .MuiChip-icon": {
                            color: property?.amenities?.length > 0 ? property?.amenities?.some((p) => p.name === ame.name) ? "#2e7d32" : "#d32f2f" : "#d32f2f",
                          },
                        }}
                        icon={
                          property?.amenities?.length > 0 ? property?.amenities?.some((p) => p.name === ame.name) ? (
                            <CheckBoxIcon />
                          ) : (
                            <CancelPresentationIcon />
                          ): (
                            <CancelPresentationIcon />
                          )
                        }
                        label={ame.name}
                      />
                      ) : (
                      <Chip
                        size={sizes}
                        sx={{
                          "& .MuiChip-icon": {
                            color:  "#d32f2f",
                          },
                        }}
                        icon={<CancelPresentationIcon /> }
                        label={ame.name}
                      />
                    )
                  }
                </Grid>
              })
            }
          </Grid>
        </CardContent>
        <Typography variant="body2">{property?.address}</Typography>
      </Card>
    </Paper>
  );
};

export default Property;
