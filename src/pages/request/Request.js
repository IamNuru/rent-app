import { Box, Chip, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import {titleCase} from 'change-case-all';
import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';

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
            <Box component={RouterLink} to={`/request/${request.id}/${request.slug}`} sx={{color:'gray'}}>
            <Grid container sx={{ px: 1.2 }}>
                <Grid container item sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ mr: 2 }}>
                        <Chip size='small' label={`${titleCase(request?.type ==='buy' ? 'To Buy':'To Rent')}`}
                            color={request?.type === 'buy' ? 'success' : 'secondary'} variant="contained"
                            sx={{ float: 'left', mr: '.25rem' }} />
                    </Box>
                    <Box>Ghc100 - Ghc200</Box>
                </Grid>
                <Typography sx={{ fontFamily: 'Merriweather', fontWeight: 600, fontSize: '1.14rem', my: 1, pl: 2 }}>{titleCase(request.title)}</Typography>
                <Grid item sx={{ display: 'flex', alignItems: 'center', mb: 2 }} xs={12}>
                    <LocationOnIcon size="small" color="error" />
                    {
                        Array.isArray(request.addresses) && request.addresses?.length > 0 ? request.addresses.map((a, i) =>{
                            return <span key={i}>{a.name}</span>
                        })
                        :
                        'No address'
                    }
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', mb: 2 }} xs={12}>
                    <ListAltIcon size="small" color="primary" alt="Amenities" />
                    {
                        Array.isArray(request.amenities) && request.amenities?.length > 0 ? request.addresses.map((a, i) =>{
                            return <span key={i}>{a.name}</span>
                        })
                        :
                        'No Amenities'
                    }
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ textAlign: 'left' }}>
                        {request.message}
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
                    <Typography sx={{ fontWeight: 300, fontSize: 14, mr: 1 }}>Posted : </Typography>
                    <Typography sx={{ fontWeight: 100, fontSize: 12, color:"#ccc" }}>{ formatDistance(new Date(request.created_at), new Date(), {addSuffix:true}) } </Typography>
                </Box>
            </Box>
            </Box>
        </Paper>
    )
}

export default Request