import { Box, Paper, Typography } from '@mui/material'

const EmptyList = ({ title, description, header=null, ...other }) => {
    return (
        <Paper style={{ height: '20rem', display: 'grid', justifyContent: 'center', alignItems:'center' }} {...other}>
            <Box>
                <Typography gutterBottom align="center" className={header ? header : 'main-header'}>
                    {title}
                </Typography>
                <Typography variant="body2" align="center" className="main-header-description">
                    {description}
                </Typography>
            </Box>
        </Paper>
    )
}

export default EmptyList