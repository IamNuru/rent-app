import { Card, CardMedia, Grid } from '@mui/material'
import React from 'react'



const ImageWrapper = ({ image, index }) => {
    const latestPostLarge = index === 0;
    const latestPost = index === 1 || index === 2;
    const noImage = '/static/no-post-image.jpg'


    return (
        <Grid item xs={12} sm={latestPostLarge ? 12 : 6}>
            <Card sx={{ position: 'relative', borderRadius: '16px', height: (!latestPostLarge && !latestPost) ? '35rem' : '24rem' }}>
                <CardMedia
                sx={{objectFit:'containe'}}
                    component="img"
                    height='100%'
                    width='100%'
                    image={image.url}
                    alt={image.title}
                    onError={e => { 
                        e.target.src = noImage;
                      }}
                />

                {/* <Box style={CardMediaStyle}>
                    <img style={CoverImgStyle} alt={image.title} src={image.url} onError={noImage} />
                </Box> */}
            </Card>
        </Grid>
    )
}

export default ImageWrapper