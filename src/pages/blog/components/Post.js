import toDate from "date-fns/toDate";
import format from "date-fns/format";
import { Card, Grid, Typography, Button, CardMedia, Divider } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";

/* import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery"; */

const Post = ({ post }) => {
  /* const theme = useTheme();
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const sizes = isMediumScreen ? "medium" : "small"; */

  return (
    <Card
      className="wrap-post"
      p={2}
      style={{ padding: "0.45rem", width:"100%" }}
      elevation={7}
      >
      <Grid container>
        <Grid item className="date" xs={12}>
          <Typography variant="body2" style={{ color: "gray" }} align="right">
            {format(toDate(5*post.id*78098443000), "do MMM, yyyy")}
          </Typography>
        </Grid>
        <Grid item className="wrap-image" xs={0} sm={3} sx={{display:{xs:'none', sm:'block'}}}>
          <CardMedia 
          component="img"
          height="120"
          image={post?.image}
          alt={post?.title}
          />
        </Grid>
        <Grid item className="title" my={0.5} xs={12} sm={9} px={0.75}>
          <Typography variant="body1" style={{ fontWeight: 600, fontSize:'1.45rem' }}>
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
