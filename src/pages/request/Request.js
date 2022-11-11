import { Box, Chip, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import {titleCase} from 'change-case-all';

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
            <Grid container sx={{ px: 1.2 }}>
                <Grid container item sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ mr: 2 }}>
                        <Chip size='small' label={`${titleCase(request?.type)}`}
                            color={request?.type === 'to buy' ? 'success' : 'secondary'} variant="contained"
                            sx={{ float: 'left', mr: '.25rem' }} />
                    </Box>
                    <Box>Ghc100 - Ghc200</Box>
                </Grid>
                <Typography sx={{ fontFamily: 'Merriweather', fontWeight: 600, fontSize: '1.14rem', my: 1, pl: 2 }}>I need a 3 bed room apartment</Typography>
                <Grid item sx={{ display: 'flex', alignItems: 'center', mb: 1 }} xs={12}>
                    <LocationOnIcon size="small" color="error" />
                    {
                        request?.addresses?.join(', ')
                    }
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', mb: 1 }} xs={12}>
                    <ListAltIcon size="small" color="primary" alt="Amenities" />
                    {
                        titleCase(request?.amenities?.join(', '))
                    }
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ textAlign: 'left' }}>
                        Remembering a whole file’s path that you want to import is completely redundant. Unfortunately, it can cause issues
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', background: 'white', mt: 2, p: 1.2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt={request.name} src="/static/images/avatar/1.jpg" sx={{ mr: 0.75 }} />
                    </StyledBadge>
                    <Typography sx={{ fontWeight: 600, mr: 2 }}>{request.name}</Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: 14, mr: 1 }}>posted on: </Typography>
                    <Typography sx={{ fontWeight: 100, fontSize: 12 }}>12/11/2022 </Typography>/
                </Box>
            </Box>
        </Paper>
    )
}

export default Request