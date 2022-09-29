import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Region = ({ region }) => {
  return (
    <Card sx={{ minWidth: { xs: 200, sm: 300 } }} className="vakkklue">
      <Typography gutterBottom variant="subtitle1" component="div">
        {region?.region+' region'}
      </Typography>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ minHeight: { xs: 200, sm: 300 } }}
          image={region?.image}
          alt={region?.title ? region?.title : "region"}
        />
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" style={{backgroundColor: 'gray'}}>
          view Rooms
        </Button>
      </CardActions>
    </Card>
  );
};

export default Region;
