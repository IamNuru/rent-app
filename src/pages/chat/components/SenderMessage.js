import { Box, Typography } from '@mui/material'
import React from 'react'

const SenderMessage = ({message}) => {
    return (
        <Box sx={{float:'right'}}>
            <Typography sx={{ background: '#0abdc2', color:'white', width: 'max-content', py: 1, px: 2, borderRadius: '2rem 0rem 2rem 2rem' }}>
                {message}
            </Typography>
            <Typography sx={{ fontSize: '0.70rem', fontWeight: '100', color:'#bcbdbd', pr: 4 }}>12:56</Typography>
        </Box>
    )
}

export default SenderMessage