import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
/* import "../styles/style.css"; */

const Value = ({value}) => {
    return (
        <Card sx={{ maxWidth: {sm:345}, padding:{md:4, xs:0}, margin:'0 auto' }}  elevation={20}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={value?.image}
              alt={value?.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {value?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {value?.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" size="small" color="primary" style={{margin:'auto', padding:'5px 15px'}}>
              Browse
            </Button>
          </CardActions>
        </Card>
      );
    }

export default Value;
