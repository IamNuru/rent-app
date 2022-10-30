import { Accordion, AccordionDetails, AccordionSummary, Box, CardMedia, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Page from '../../../components/Page'

//material icons
import VerifiedIcon from '@mui/icons-material/Verified';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReviewsAndRatings from './single-property/ReviewsAndRatings';

const SingleProperty = ({title}) => {
  return (
    <Page title={title ? title : 'property details'}>
      <Container>
        <Grid container sx={{ mb:'1.4rem', px:'1rem' }}>
          <Grid item xs={12} style={{textAlign:'center'}}>
            <Typography variant='h4'>The title of the property</Typography>
          </Grid>
          <Grid item xs={6}><Typography variant='body2'>31st Sept, 2022</Typography></Grid>
          <Grid item xs={6} style={{justifyContent:'right'}} container><Typography variant='body2'>verified</Typography> <VerifiedIcon /> <GppMaybeIcon /> </Grid>
        </Grid>
        <CardMedia image='https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg'
        sx={{height:{xs:'25rem', md:'20rem'}, borderRadius:'8px'}}/>
        <Box>
        <Accordion>
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
      <Accordion>
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
      <Accordion>
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
        
      </Container>
    </Page>
  )
}

export default SingleProperty