import { Grid, Skeleton, Stack, Paper } from '@mui/material'
import React from 'react'

const PropertySkeleton = () => {
    return (
        <Grid container sx={{ px: 5, my: 4, justifyContent: 'center', width: '100%' }}>
            <Paper elevation={7} sx={{ width: { xs: '100%', sm: '30%' }, mx: '0.5%', mb: 4, py:4, px:3 }} >
                <Stack spacing={2} >
                    <Skeleton variant='text' height={20} />
                    <Skeleton variant='text' width={40} sx={{ mx: 'auto' }} />
                    <Skeleton variant='rectangle' height={80} />
                    <Skeleton variant='text' />
                    <Skeleton variant='text' height={30} />
                </Stack>
            </Paper>
            
            <Paper elevation={7} sx={{ width: { xs: '100%', sm: '30%' }, mx: '0.5%', mb: 4, py:4, px:3 }} >
                <Stack spacing={2} >
                    <Skeleton variant='text' height={20} />
                    <Skeleton variant='text' width={40} sx={{ mx: 'auto' }} />
                    <Skeleton variant='rectangle' height={80} />
                    <Skeleton variant='text' />
                    <Skeleton variant='text' height={30} />
                </Stack>
            </Paper>
            <Paper elevation={7} sx={{ width: { xs: '100%', sm: '30%' }, mx: '0.5%', mb: 4, py:4, px:3 }} >
                <Stack spacing={2} >
                    <Skeleton variant='text' height={20} />
                    <Skeleton variant='text' width={40} sx={{ mx: 'auto' }} />
                    <Skeleton variant='rectangle' height={80} />
                    <Skeleton variant='text' />
                    <Skeleton variant='text' height={30} />
                </Stack>
            </Paper>
        </Grid>

    )
}

export default PropertySkeleton