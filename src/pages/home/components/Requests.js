import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HomeRequestCard from '../../request/HomeRequestCard'
import requests from '../../../_mock/requests'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import useWindowDimensions from '../../../hooks/useWindowsDimensions'

const Requests = () => {
    SwiperCore.use([Navigation]);
    const { width } = useWindowDimensions();
    return (
        <Box mt={15} sx={{ backgroundColor: '#d3d3d329', px: { xs: 1 } }}>
            <Typography variant="h4" align="center" className="main-header">
                Requests
            </Typography>
            <Typography variant="body2" color="text.secondary" className="main-header-description" gutterBottom align='center'>
                Are you an agent or land lord?. They following people are request/looking for places to rent or buy.
            </Typography>
            <Box sx={{ width: '100%', textAlign: 'right' }}>
                <Button variant='contained' href='/requests'>View All</Button>
            </Box>
            {/* <Box className='home-request-wrapper' mt={1} style={{ overflow: 'auto', paddingBottom: "2.5rem" }}>
                <Grid container spacing={2} align="center" wrap="nowrap"
                    sx={{ display: 'grid', gridAutoRows: '1fr', gridTemplateColumns: 'repeat(10, 1fr)' }}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            requests?.slice(0, 10).map((request) => {
                                return <SwiperSlide><Grid item key={request.id}>
                                    <Link to={`/request/${request.id}/${request.slug}`}>
                                        <HomeRequestCard request={request} />
                                    </Link>
                                </Grid></SwiperSlide>
                            })
                        }
                    </Swiper>
                </Grid>
            </Box> */}
            <Box className='home-request-wrapper' mt={1} sx={{ paddingBottom: '2.5rem' }}>
                {/* <Grid container spacing={2} align="center" wrap="nowrap"
                    sx={{ display: 'grid', gridAutoRows: '1fr', gridTemplateColumns: 'repeat(10, 1fr)' }}> */}
                <Swiper
                    style={{paddingBottom:'16px',}}
                    navigation
                    spaceBetween={2}
                    slidesPerView={width < 600 ? 1 : width < 800 ? 2 : width < 968 ? 3 : width < 1200 ? 4 : 5}
                >
                    {
                        requests?.slice(0, 10).map((request) => {
                            return <SwiperSlide style={{ marginRight: 0 }}><Box item key={request.id} sx={{ mx: 2 }}>
                                <Link to={`/request/${request.id}/${request.slug}`}>
                                    <HomeRequestCard request={request} />
                                </Link>
                            </Box></SwiperSlide>
                        })
                    }
                </Swiper>
                {/* </Grid> */}
            </Box>
        </Box>
    )
}

export default Requests