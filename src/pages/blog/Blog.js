import {
  Container,
  Grid,
  Pagination,
  Stack,
} from "@mui/material";
import Post from "./components/Post";
import Page from "../../components/Page.js";
import posts from "../../_mock/blog";

const Blog = () => {
  
  return (
    <Page title="Blog Posts">
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {posts?.map((post) => {
            return (
              <Grid item key={post.id} style={{ paddingLeft: 0 }}>
                <Post post={post} />
              </Grid>
            );
          })}
        </Grid>
        <Stack spacing={2} mt={4} style={{ alignItems: "center" }}>
          <Pagination count={posts?.length} color="primary" />
        </Stack>
      </Container>
    </Page>
  );
};

export default Blog;
