import {
  Container, Accordion, AccordionDetails, AccordionSummary, Box, Grid,
  Typography,
  CardMedia,
  Button,
  Stack,
} from '@mui/material'
import React from 'react'
import Page from '../../../components/Page'
import EmptyList from '../../../components/EmptyList';
import { Link as RouterLink } from 'react-router-dom';

//material icons
import VerifiedIcon from '@mui/icons-material/Verified';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom'
import { useGetPropertyQuery } from '../../../features/api/propertyApiService'
import ImageWrapper from './single-property/ImageWrapper';
import { format, toDate } from 'date-fns';
import useWindowDimensions from '../../../hooks/useWindowsDimensions';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import ShowMyItem from '../../../helpers/showMyItem';

const SingleProperty = () => {
  SwiperCore.use([Navigation, Virtual]);
  const { width } = useWindowDimensions();
  const { id } = useParams();
  const { data, isLoading, isError, isFetching } = useGetPropertyQuery(id);
  const property = data ? data.property : null;
  const noImage = '/static/no-post-image.jpg'


  return (
    <Page title={property?.title ? property.title : 'No property found'}>
      {
        isLoading ? (
          <EmptyList title="Loading property details" description="Please wait... we are loading the property details" type="loading" />
        ) : isFetching ? (
          <EmptyList title="Fetching property details" description="Please wait... we are fetching the property details" type="loading" />

        ) : property ? (
          <Container disableGutters>
            <Grid container>
              <Grid item className='custom-scroll-bar' sx={{ mb: '1.4rem', px: '1rem', maxHeight: '100vh', overflowY: 'auto' }} xs={12} sm={4}>
                <Box item xs={12} style={{ textAlign: 'center' }}>
                  <Typography variant='h4' sx={{
                    fontSize: 30,
                    fontFamily: 'Merriweather',
                    fontWeight: 600,
                  }}>{property.title}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6, mb: 2 }}>
                  <Box>
                    <Typography variant='body2'>{format(toDate(new Date(property?.created_at)), "do MMM, yyyy")}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Typography variant='body1'>verified</Typography>
                    {
                      property.user?.verified ? <VerifiedIcon color="success" /> : <GppMaybeIcon color="error" />
                    }

                  </Box>
                </Box>
                <Box sx={{ width: '100%' }}>
                  {/* <ImageList variant="masonry" cols={3} gap={8}> */}
                  {
                    property?.imageslist.length > 0 ?
                      width < 600 ? (
                        <Swiper navigation>
                          {
                            property.imageslist.map((image, index) => (
                              <SwiperSlide key={image.id}>
                                <CardMedia
                                  component="img"
                                  height="250"
                                  image={image.url}
                                  onError={e => {
                                    e.target.src = noImage;
                                  }}
                                  alt={image.title ? image.title : 'No title'}
                                />
                              </SwiperSlide>
                            ))
                          }
                        </Swiper>
                      ) :
                        <Grid container spacing={3}>
                          {
                            property.imageslist.map((image, index) => (
                              <ImageWrapper image={image} key={image.id} index={index} />
                            ))
                          }
                        </Grid>
                      :
                      <img
                        src={noImage}
                        srcSet={noImage}
                        alt={noImage}
                        loading="lazy"
                        style={{ width: '100%' }}
                      />
                  }
                  {/* </ImageList> */}
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box>
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant='h5' sx={{ fontWeight: 600, fontSize: '20px' }}>Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {property.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography variant='h5' sx={{ fontWeight: 600, fontSize: '20px' }}>Amenities{' (' + property.amenities?.length + ')'}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box>
                        {
                          property.amenities?.length > 0 ? property.amenities.map((amenity) => {
                            return <Typography>{amenity.name}</Typography>
                          })
                            :
                            <Typography>There are no amenities for this property</Typography>
                        }
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography variant='h5' sx={{ fontWeight: 600, fontSize: '20px' }}>Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  {/* <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography>Reviews and Ratings</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ReviewsAndRatings />
                    </AccordionDetails>
                  </Accordion> */}
                </Box>
              </Grid>
            </Grid>
            <ShowMyItem user_id={property.user?.id}>
              <Box sx={{ width: '100%', textAlign: 'right', mt: 4 }}>
                <Button variant='outlined' component={RouterLink} to={`/dashboard/edit-property/${property.id}`}>Edit this property</Button>
              </Box>
            </ShowMyItem>
            <Stack direction="row" spacing={2} align="center" sx={{justifyContent:'center', mt:4}}>
              <Button variant="contained" component={RouterLink} to={`/chat/${property.user.id}`}>{`Chat ${property.user.gender === "male" ? 'Him' : property.user.gender === "female" ? 'Her' : 'Owner'}`}</Button>
              <Button variant="contained" color='warning'>{`Call ${property.user.gender === "male" ? 'Him' : property.user.gender === "female" ? 'Her' : 'Owner'}`}</Button>
            </Stack>
          </Container>
        )
          : isError ? (
            <EmptyList title="An Error Occured" type="error"
              description={
                "Something went wrong fetching property. Please refresh page or try again later"
              } />
          ) : (
            <EmptyList title="Property Not Found" type="NotFound" description={"Property is either deleted or removed"} />
          )
      }

    </Page>
  )
}



export default SingleProperty