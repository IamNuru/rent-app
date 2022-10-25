import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Region = ({ region }) => {
  return (
    <Card sx={{ minWidth: { xs: 200, sm: 300 } }} className="vakkklue">
      <Typography gutterBottom variant="subtitle1" component="div" style={{fontWeight:600}}>
        {region?.name ? region?.name+' region': ''}
      </Typography>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ minHeight: { xs: 200, sm: 300 } }}
          image={region?.image}
          alt={region?.name ? region?.name : "region"}
        />
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" sx={{mx:'auto'}}>
          view Rooms
        </Button>
      </CardActions>
    </Card>
  );
};

export default Region;
