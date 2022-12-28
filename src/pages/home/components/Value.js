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
  const noImage = "/static/no-post-image.jpg";


  return (
    <Card sx={{
      maxWidth: { xs: 405 }, 
      padding: { sm: 0, md: 4, xs: '0.35rem 0.25rem' }, height: '100%',
      margin:{ sm:'0 0.155rem', md:'0 1rem'},
      mx:'auto',
      border:'1px solid #d3d3d3a9'
    }}
      elevation={tbs ? 20 : 0}>
      <CardActionArea sx={{mx:'0 auto', width:'100%'}}>
        <CardMedia
          component="img"
          height="180"
          width="100"
          image={value.image }
          alt={value.title}
          onError={e => { 
            e.target.src = noImage;
          }}
          sx={{ 
            borderRadius: { xs: '50%', sm: '0' }, height: { xs: 150, sm: 200 }, 
            width: { xs: 150, sm: '100%' }, margin:'0 auto' }}
        />
        <CardContent sx={{padding:{xs:0}}}>
          <Typography gutterBottom variant="h5" component="div" sx={{mt:4}}>
            {value?.title}
          </Typography>
          <Typography sx={{ fontSize: '20px' }} color="text.secondary">
            {value?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center', mt:4 }}>
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
