import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
/* import "../styles/style.css"; */

const Value = ({ value }) => {
  return (
    <Card sx={{ maxWidth: { sm: 345 }, padding: { md: 4, xs: 0 }, margin: '0 auto' }} elevation={20}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={value?.image}
          alt={value?.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className=''>
            {value?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {value?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent:'center'}}>
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
