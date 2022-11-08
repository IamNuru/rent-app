import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import HomeRequestCard from '../../request/HomeRequestCard'
import requests from '../../../_mock/requests'
import { Link } from 'react-router-dom'

const Requests = () => {
    return (
        <Box mt={15} sx={{backgroundColor:'#d3d3d329', px:{xs:1}}}>
            <Typography variant="h4" align="center" className="main-header">
                Requests
            </Typography>
            <Typography variant="body2" color="text.secondary" className="main-header-description" gutterBottom align='center'>
                Are you an agent or land lord?. They following people are request/looking for places to rent or buy.
            </Typography>
            <Box sx={{ width: '100%', textAlign: 'right' }}>
                <Button variant='contained' href='/requests'>View All</Button>
            </Box>
            <Box className='home-request-wrapper' sx={{ flexGrow: 1 }} mt={1} style={{ overflow: 'auto', paddingBottom: "2.5rem" }}>
                <Grid container spacing={2} align="center" wrap="nowrap">
                    {
                        requests?.slice(0, 10).map((request) => {
                            return <Grid item key={request.id}>
                                <Link to={`/request/${request.id}/${request.slug}`}>
                                    <HomeRequestCard request={request} />
                                </Link>
                            </Grid>
                        })
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Requests