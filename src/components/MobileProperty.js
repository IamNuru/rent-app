import { Box, Card, CardMedia, Chip, Typography } from '@mui/material';
import { formatDistance } from 'date-fns';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ShieldIcon from '@mui/icons-material/Shield';

//swiper
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import { lowerCase, titleCase } from 'change-case-all';
import CurrencyFormatter from '../utils/CurrencyFormatter';
import { Link } from 'react-router-dom';


const MobileProperty = ({ property }) => {
    const noImage = "/static/no-post-image.jpg"
    return (
        <Card sx={{
            minWidth:'300px',
            display: 'flex',
            borderRadius: '0.65rem',
            my: 1.5,
            minHeight: '8rem',
            backgroundColor: 'white',
            px: 1,
            py: 1.5,
            overflowX:'auto'
        }} elevation={3}>
            <Box sx={{ width: '35%', borderRadius: 2.5, border: 0.1, borderColor: '#dfdfdf' }}>
                {
                    property?.imageslist?.length > 0 ?
                        property?.imageslist?.map((img, index) => {
                            return <SwiperSlide key={index}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image={img.url}
                                    onError={e => {
                                        e.target.src = noImage;
                                    }}
                                    alt={img.title}
                                    sx={{ borderRadius: 2.5, border: 0.1, borderColor: '#dfdfdf' }}
                                />
                            </SwiperSlide>
                        })
                        :
                        <CardMedia
                            component="img"
                            height="100%"
                            image={noImage}
                            alt="No image for this property"
                            sx={{ borderRadius: 2.5, border: 0.1, borderColor: '#dfdfdf' }}
                        />

                }
            </Box>
            <Box sx={{ textAlign: 'left', display: 'grid', pl: 2, width:'70%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={`/property/${property.id}/${property.slug}`} style={{ color: 'black' }}>
                    <Typography className='merriweather' sx={{ fontSize: '1rem', fontWeight: 600,  }}>
                        {property?.title ? titleCase(lowerCase(property.title)) : 'No title'}
                    </Typography>
                    </Link>
                    <Chip size="small"
                        label={property?.type === 'rent' ? 'For Rent' : 'For Sale'}
                        color={property?.type === 'rent' ? 'secondary' : 'success'}
                         />
                </Box>
                <Typography className='merriweather' sx={{ fontSize: '0.75rem', fontWeight: 400, py:2 }}>Address 1, Address 2, Address 3</Typography>
                <Box sx={{ display: 'flex', gap: 2.5 }}>
                    <ShieldIcon fontSize='small' color='disabled' sx={{ color: 'rgb(0 0 0 / 48%)', backgroundColor: '#f3f3f3a6', px: 2, py: 0.8, borderRadius: 2, }} />
                    <LocalParkingIcon fontSize='small' color='disabled' sx={{ color: 'rgb(0 0 0 / 48%)', backgroundColor: '#f3f3f3a6', px: 2, py: 0.8, borderRadius: 2, }} />
                    <BathtubIcon fontSize='small' color='disabled' sx={{ color: 'rgb(0 0 0 / 48%)', backgroundColor: '#f3f3f3a6', px: 2, py: 0.8, borderRadius: 2, }} />
                    <MicrowaveIcon fontSize='small' color='disabled' sx={{ color: 'rgb(0 0 0 / 48%)', backgroundColor: '#f3f3f3a6', px: 2, py: 0.8, borderRadius: 2, }} />
                </Box>
                <Typography className='merriweather' sx={{ py:2, color: '#097155', fontSize: '1rem', fontWeight: 600 }} >{CurrencyFormatter.format(property?.price)}</Typography>
                <Typography className='merriweather'
                    sx={{
                        fontWeight: 400, textAlign: 'right',
                        lineHeight: 1,
                        color: 'rgba(0, 0, 0, 0.6)',
                        letterSpacing: '0.00938em',
                        fontSize:'0.75rem',
                    }} >{formatDistance(new Date(property?.created_at), new Date(), { addSuffix: true })}</Typography>
            </Box>

        </Card>
    )
}


export default MobileProperty