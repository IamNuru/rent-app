import {
Avatar,
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import toDate from "date-fns/toDate";
import format from "date-fns/format";
import FirstLetter from "../../../utils/FirstLetter";
import { deepOrange } from "@mui/material/colors";

const SingleBlogPost = () => {
  const post = {
    id: 4,
    title: "My first Blog post is here live for you",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, incidunt Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, incidunt ratione quaerat pariatur! Autem, animi mollitia. Nisi aliquid debitis minima optio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, incidunt ratione quaerat pariatur! Autem, animi mollitia. Nisi aliquid debitis minima optio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, incidunt ratione quaerat pariatur! Autem, animi mollitia. Nisi aliquid debitis minima optio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, incidunt ratione quaerat pariatur! Autem, animi mollitia. Nisi aliquid debitis minima optio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, incidunt ratione quaerat pariatur! Autem, animi mollitia. Nisi aliquid debitis minima optio! ratione quaerat pariatur! Autem, animi mollitia. Nisi aliquid debitis minima optio!",
    date: "122554335545",
    slug: "slug-of-post",
    owner: "Nuru-deen",
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
  };

  return (
    <Container maxWidth="md">
      <Box align="center" mb={2}>
        <Typography variant="h5" style={{ fontWeight: 600 }}>
          {post?.title}
        </Typography>
      </Box>
      <Card p={2}>
        <Paper elevation={0} >
          <Grid container mb={2} style={{padding:"0.015rem 0.45rem"}}>
            <Grid item xs={6} sm={6}>
              <Stack direction="row" spacing={2} align="center">
                <Avatar
                  sx={{ bgcolor: deepOrange[500] }}
                  alt={post?.owner}
                  src={post?.image}
                >
                  {FirstLetter(post?.owner)}
                </Avatar>
                <Typography>{post?.owner}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={6} align="right">
              <Typography
                sx={{ fontSize: {xs:'0.75rem', sm: "1rem"}, color: "gray" }}
              >
                {format(toDate(parseInt(post?.date)), "do MMM, yyyy")}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Divider flexItem py={1} style={{margin:'0.1rem 0.25rem 0.5rem 0.25rem'}}/>
        <CardMedia
          component="img"
          height="300"
          image={post?.image}
          alt={post?.title}
        />

        <CardContent>
          <Typography>{post?.description}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SingleBlogPost;
