import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useIsTabletScreen } from "../../../hooks/useMediaScreens"
/* import "../styles/style.css"; */

const Value = ({ value }) => {
  const tbs = useIsTabletScreen()
  return (
    <Card sx={{
      maxWidth: { xs: 345 }, 
      padding: { sm: 0, md: 4, xs: 0 }, height: '100%',
      margin:{sm:'0 0.155rem', md:'0 1rem'}
    }}
      elevation={tbs ? 20 : 0}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          width="100"
          image={value?.image}
          alt={value?.title}
          sx={{ borderRadius: { xs: '50%', sm: '0' }, height: { xs: 150, sm: '100%' }, width: { xs: 150, sm: '100%' } }}
        />
        <CardContent sx={{padding:{xs:0}}}>
          <Typography gutterBottom variant="h5" component="div" className=''>
            {value?.title}
          </Typography>
          <Typography sx={{ fontSize: '20px' }} color="text.secondary">
            {value?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Link to={`${value?.url}`}>
          <Button variant="contained" size="small" color="primary" style={{ margin: 'auto', padding: '5px 15px' }}>
            {value?.title ? value.title : 'Browse'}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Value;
