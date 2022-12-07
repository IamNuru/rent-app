import toDate from "date-fns/toDate";
import format from "date-fns/format";
import { Card, Grid, Typography, Button, CardMedia } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import '../styles.css'

import useMediaQuery from "@mui/material/useMediaQuery";

const Post = ({ post }) => {
  const noImage = "/static/no-post-image.jpg"

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Card
      className="card"
      style={{ padding: "0.55rem 1rem", width: "100%" }}
      elevation={isMediumScreen ? 7 : 1}
    >
      <Grid container>

        <Grid item className="wrap-image" xs={12} sm={3} >
          <Typography variant="body1" sx={{ display: { xs: 'block', sm: 'none' }, fontWeight: 600, fontSize: '1.45rem', px: '0.45rem' }}>
            {post?.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray", fontSize: '12px' }} align="right">
            {format(toDate(new Date(post?.created_at)), "do MMM, yyyy")}
          </Typography>
          <CardMedia
            component="img"
            height={isMediumScreen ? '120' : '180'}
            image={post?.image ? post.image : noImage}
            onError={e => { 
              e.target.src = noImage;
            }}
            alt={post?.title}
          />
        </Grid>

        <Grid item className="title" my={0.5} xs={12} sm={9} px={0.75}>
          <Typography variant="body1" style={{ fontWeight: 600, fontSize: '1.45rem', }} sx={{ display: { xs: 'none', sm: 'block' } }}>
            {post?.title}
          </Typography>
          <Typography variant="p" xs={0} sx={{ display: { xs: 'none', sm: 'block' }, fontSize: { sm: '1.25rem' } }}>
            {post?.description.split(" ").splice(0, 25).join(" ") + " ..."}</Typography>
        </Grid>
        <Grid item className="description" xs={12} sx={{ display: { xs: 'block', sm: 'none' }, fontSize: '1.15rem' }}>
          <Typography variant="p" sx={{lineHeight:'24px'}}>{post?.description.split(" ").splice(0, 20).join(" ")}</Typography>
        </Grid>
        <Grid item className="button" xs={12} align="right" sx={{mt:1.2}}>
          <Link to={`/post/${post?.id}/${post?.slug}`}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              endIcon={<LaunchIcon />}
            >
              Read More
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Post;
