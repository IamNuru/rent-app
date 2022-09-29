import { Container, Typography, Box, Grid, Pagination, Stack } from "@mui/material";
import Post from "./components/Post";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "My first Blog post is here live",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, incidunt ratione quaerat pariatur! Autem, animi mollitia. Nisi aliquid debitis minima optio!",
      date: "122554335545",
      slug: "slug-of-post",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
    {
      id: 2,
      title: "My first Blog post is here live",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, incidunt ratione quaerat pariatur! Autem, animi mollitia. Nisi aliquid debitis minima optio!",
      date: "122554335545",
      slug: "slug-of-post",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
    {
      id: 3,
      title: "My first Blog post is here live",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, incidunt ratione quaerat pariatur! Autem, animi mollitia. Nisi aliquid debitis minima optio!",
      date: "122554335545",
      slug: "slug-of-post",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
    {
      id: 4,
      title: "My first Blog post is here live",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, incidunt ratione quaerat pariatur! Autem, animi mollitia. Nisi aliquid debitis minima optio!",
      date: "122554335545",
      slug: "slug-of-post",
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
    },
  ];
  return (
    <Container maxWidth="md">
      <Box align="center" mb={4}>
        <Typography variant="h5">Blog / Posts</Typography>
      </Box>
      <Grid container spacing={2}>
        {posts?.map((post) => {
          return (
            <Grid item key={post.id} style={{ paddingLeft:0}}>
              <Post post={post} />
            </Grid>
          );
        })}
      </Grid>
      <Stack spacing={2} mt={4} style={{alignItems:"center"}}>
       <Pagination count={posts?.length} color="primary" />
      </Stack>
    </Container>
  );
};

export default Blog;
