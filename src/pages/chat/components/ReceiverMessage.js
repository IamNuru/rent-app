import { Box, Typography } from '@mui/material'
import React from 'react'

const ReceiverMessage = ({message}) => {
    return (
        <Box>
            <Typography sx={{ background: 'lightgray', width:'max-content', color: 'dark', py: 1, px: 2, borderRadius: '2rem 2rem 2rem 0rem' }}>
                {message}
            </Typography>
            <Typography sx={{fontSize:'0.70rem', fontWeight:'200', color:'#bcbdbd', pl:4}}>12:56</Typography>
        </Box>
    )
}

export default ReceiverMessage