import { Box, Paper, Typography } from '@mui/material'

const EmptyList = ({ title, description, header = null, type = null, ...other }) => {
    const loadingGif = "/static/icons/Loading_icon.gif"
    return (
        <Paper style={{ height: '20rem', display: 'grid', justifyContent: 'center', alignItems: 'center' }} {...other}>
            <Box>
                <Typography gutterBottom align="center" sx={{fontWeight:600, fontSize:'1.6rem', color:type === 'error' ? '#f1816f' : '#010205'}}>
                    {title}
                </Typography>
                <Box sx={{width:'100%', display:'grid', justifyContent:'center'}}>
                    {
                        type === 'loading' ?
                            (
                                <img
                                    src={loadingGif}
                                    srcSet={loadingGif}
                                    alt="loading"
                                    loading="lazy"
                                    style={{maxHeight:"10rem", background:'red', margin:'0 auto'}}
                                />
                            ) : null
                    }
                </Box>
                <Typography variant="body2" align="center" className="main-header-description">
                    {description}
                </Typography>
            </Box>
        </Paper>
    )
}

export default EmptyList