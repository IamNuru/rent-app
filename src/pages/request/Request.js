import { Box, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import React from 'react'

const Request = ({ request }) => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));





    return (
        <Paper sx={{ backgroundColor: '#d3d3d329', mb: 4, pt: 2 }} elevation={2}>
            <Grid container sx={{px: 1.2}}>
                <Grid container item>
                    <Grid item xs={2}>For rent</Grid>
                    <Grid item xs={10}>Ghc100 - Ghc200</Grid>
                </Grid>
                <Grid item sx={{ display: 'flex' }} xs={12}>
                    icon : address of the user
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ textAlign: 'left' }}>
                        Remembering a whole file’s path that you want to import is completely redundant. Unfortunately, it can cause issues
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', background: 'white', mt:2, p:1.2 }}>
                <Box sx={{ display: 'flex', alignItems:'center', ml:'auto' }}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </StyledBadge>
                    <Typography>Nurudeen</Typography>
                    <Typography>posted on: </Typography>
                    <Typography>12/11/2022 </Typography>/
                </Box>
            </Box>
        </Paper>
    )
}

export default Request