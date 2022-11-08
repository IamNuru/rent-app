import {
  Container, Accordion, AccordionDetails, AccordionSummary, Box, Grid,
  Typography, ImageList, ImageListItem
} from '@mui/material'
import React from 'react'
import Page from '../../../components/Page'

//material icons
import VerifiedIcon from '@mui/icons-material/Verified';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReviewsAndRatings from './single-property/ReviewsAndRatings';

const SingleProperty = ({ title }) => {


  return (
    <Page title={title ? title : 'property details'}>
      <Container disableGutters>
        <Grid container>
          <Grid item container sx={{ mb: '1.4rem', px: '1rem' }} xs={12} sm={6}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography variant='h4'>The title of the property</Typography>
            </Grid>
            <Grid item xs={6}><Typography variant='body2'>31st Sept, 2022</Typography></Grid>
            <Grid item xs={6} style={{ justifyContent: 'right' }} container><Typography variant='body2'>verified</Typography> <VerifiedIcon /> <GppMaybeIcon /> </Grid>
            <Box sx={{ bgcolor: 'red', width: '100%' }}>
              {/*  <CardMedia 
             image='https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg'
                sx={{ height: { xs: '25rem', md: '20rem' }, borderRadius: '8px' }} /> */}
              <ImageList variant="masonry" cols={3} gap={8}>
                {images.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.image}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Images</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
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
              </Accordion>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

const images = [
  {
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg',
    title: 'Bed'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg',
    title: 'Bed room'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg',
    title: 'sofy Bed'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg',
    title: 'loote Bed'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg',
    title: 'Behhd d'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg',
    title: 'B  jfjed'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg',
    title: 'Bhf ed'
  },
  {
    image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sinfs k',
  },
]

export default SingleProperty