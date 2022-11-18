import {
  Container,
  Grid,
  Pagination,
  Stack,
} from "@mui/material";
import Post from "./components/Post";
import Page from "../../components/Page.js";
import posts from "../../_mock/blog";
import EmptyList from "../../components/EmptyList"

const Blog = () => {
  
  return (
    <Page title="Blog Posts">
      {
        posts?.length > 0 ? (
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
        ) : (
          <EmptyList title="No Posts" description="We don't have blog posts Yet. Come back later" />
        )
      }
    </Page>
  );
};

export default Blog;
