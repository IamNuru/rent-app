import { Avatar, Badge, Card, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import CallIcon from '@mui/icons-material/Call';
import React from 'react';
import "../style.css";



const ChatHeader = () => {

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
        <Card className='chat-header' sx={{ height: { xs: '8rem', sm: '8.5rem', md: '10rem' } }}>
            <Grid container spacing={2} sx={{ my: 0.5 }}>
                <Grid item xs={2} sx={{ ml: 4 }}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar sx={{ height: '4.5rem', width: '4.5rem' }} alt='name' src="/static/images/avatar/1.jpg" />
                    </StyledBadge>
                </Grid>
                <Grid item>
                    <Typography variant='h5' sx={{ mt: 2 }}>Abdulai Nuru-deen</Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'grid', justifyContent: 'right', mx: 1 }}>
                    <Avatar sx={{background:'#052121'}}>
                        <CallIcon />
                    </Avatar>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ChatHeader