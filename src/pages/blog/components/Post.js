import toDate from "date-fns/toDate";
import format from "date-fns/format";
import { Card, Grid, Typography, Button, CardMedia, Divider } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import '../styles.css'

import useMediaQuery from "@mui/material/useMediaQuery";

const Post = ({ post }) => {

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  
  return (
    <Card
      className="card"
      style={{ padding: "0.55rem 1rem", width:"100%" }}
      elevation={isMediumScreen ? 7 : 1}
      >
      <Grid container>
        <Grid item className="date" xs={12}>
          <Typography variant="body2" style={{ color: "gray" }} align="right">
            {format(toDate(5*post.id*78098443000), "do MMM, yyyy")}
          </Typography>
        </Grid>
        <Grid item className="wrap-image" xs={12} sm={3} >
        <Typography variant="body1" style={{ fontWeight: 600, fontSize:'1.45rem' }} sx={{display:{xs:'block', sm:'none'}}}>
            {post?.title}
          </Typography>
          <CardMedia 
          component="img"
          height={isMediumScreen ? '120' : '180'}
          image={post?.image}
          alt={post?.title}
          />
        </Grid>
        <Grid item className="title" my={0.5} xs={12} sm={9} px={0.75}>
          <Typography variant="body1" style={{ fontWeight: 600, fontSize:'1.45rem' }} sx={{display:{xs:'none', sm:'block'}}}>
            {post?.title}
          </Typography>
          <Typography variant="p" xs={0} sx={{display:{xs:'none', sm:'block'}, fontSize:{ sm:'1.25rem'}}}>{post?.description}</Typography>
        </Grid>
        <Grid item className="description" xs={12} sx={{display:{xs:'block', sm:'none'}}}>
          <Typography variant="p">{post?.description}</Typography>
        </Grid>
        <Grid item className="button" xs={12} align="right">
        <Divider flexItem py={1} style={{margin:'0.3rem 0 0.2rem 0'}}/>
          <Button
            variant="contained"
            size="small"
            color="primary"
            endIcon={<LaunchIcon />}
          >
            <Link to={`/post/${post?.id}/${post?.slug}`} style={{width:'100%',height:'100%',color:"white"}}>Read More</Link>
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Post;
