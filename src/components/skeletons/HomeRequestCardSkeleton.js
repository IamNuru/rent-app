import { Grid, Paper, Skeleton, Stack } from '@mui/material'
import React from 'react'

const HomeRequestCardSkeleton = ({ number = 3 }) => {
    return (
        <Grid container sx={{ px: 5, my:4, justifyContent:'center', width:'100%' }}>
            <Stack spacing={2} sx={{ width: {xs:'100%', sm:'30%'}, mx:'0.5%', mb:4 }}>
                <Skeleton variant='circular' width={60} height={60} />
                <Skeleton variant='text' />
                <Skeleton variant='rectangle' height={80} />
                <Skeleton variant='text' />
            </Stack>
            <Stack spacing={1} sx={{ width: {xs:'100%', sm:'30%'}, mx:'0.5%', mb:4 }}>
                <Skeleton variant='circular' width={60} height={60} />
                <Skeleton variant='text' />
                <Skeleton variant='rectangle' height={80} />
                <Skeleton variant='text' />
            </Stack>
            <Stack spacing={2} sx={{ width: {xs:'100%', sm:'30%'}, mx:'0.5%', mb:4 }}>
                <Skeleton variant='circular' width={60} height={60} />
                <Skeleton variant='text' />
                <Skeleton variant='rectangle' height={80} />
                <Skeleton variant='text' />
            </Stack>
        </Grid>
    )
}

export default HomeRequestCardSkeleton