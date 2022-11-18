import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HomeRequestCard from '../../request/HomeRequestCard'
import requests from '../../../_mock/requests'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import useWindowDimensions from '../../../hooks/useWindowsDimensions'
import EmptyList from '../../../components/EmptyList'

const Requests = () => {
    SwiperCore.use([Navigation, Autoplay]);
    const { width } = useWindowDimensions();
    return (
        <Box mt={15} sx={{ backgroundColor: '#d3d3d329', px: { xs: 1 } }}>
            <Typography variant="h4" align="center" className="main-header">
                Requests
            </Typography>
            <Typography variant="body2" color="text.secondary" className="main-header-description" gutterBottom align='center'>
                Are you an agent or land lord?. They following people are request/looking for places to rent or buy.
            </Typography>
            {
                requests?.length > 100 ? (
                    <>
                        <Box sx={{ width: '100%', textAlign: 'right' }}>
                            <Link to="/requests">
                                <Button variant='contained'>View All</Button>
                            </Link>
                        </Box>

                        <Box className='home-request-wrapper' mt={1} sx={{ paddingBottom: '2.5rem' }}>
                            <Swiper
                                style={{ paddingBottom: '16px', }}
                                navigation
                                autoplay={{ delay: 5000, }}
                                spaceBetween={2}
                                slidesPerView={width < 600 ? 1 : width < 800 ? 2 : width < 968 ? 3 : width < 1200 ? 4 : 5}
                            >
                                {
                                    requests?.slice(0, 10).map((request) => {
                                        return <SwiperSlide key={request.id} style={{ marginRight: 0 }}><Box item sx={{ mx: 2 }}>
                                            <Link to={`/request/${request.id}/${request.slug}`}>
                                                <HomeRequestCard request={request} />
                                            </Link>
                                        </Box></SwiperSlide>
                                    })
                                }
                            </Swiper>
                        </Box>
                    </>
                ) : (
                    <EmptyList
                        title="No Request"
                        description='No one made Request for accomodation.'
                        elevation={0}
                        sx={{ border: '1px solid gray' }}
                    />
                )
            }
        </Box>
    )
}

export default Requests