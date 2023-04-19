import { Box } from '@mui/material'
import React from 'react'
import LoadingDots from './LoadingDots'

const CenterLoading = () => {
    return (
        <Box sx={{ minHeight: { xs: '70vh', sm: '80vh' }, display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
            <LoadingDots />
        </Box>
    )
}

export default CenterLoading