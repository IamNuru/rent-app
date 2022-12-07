import {
  Container,
  Grid,
  Pagination,
  Stack,
} from "@mui/material";
import Post from "./components/Post";
import Page from "../../components/Page.js";
import EmptyList from "../../components/EmptyList"
import { useState } from "react";
import { useGetPaginatedPostsQuery } from "../../features/api/postApiService";

const Blog = () => {
  const [page, setPage] = useState(1)
  const {data, isLoading, isFetching, isError, error} = useGetPaginatedPostsQuery(page);
  const posts = data ? data.posts : [];
  console.log(posts)
  console.log(data)
  
  const handleChange = (e, v) =>{
    setPage(v)
  }
  

  return (
    <Page title="Blog Posts">
      
      {
        isLoading ? <>
          <EmptyList type="loading" title="Loading Data" description="We are loading your data. Please wait" />
        </> : isFetching ? <>
          <EmptyList title="Fetching Posts" description="We are Fetching your data. Please wait" />
        </> : isError ? <>
          <EmptyList title="An Error Occured" 
          description={ error.status ==='FETCH_ERROR' ? 'Failed to fetch data' : 'Something went wrong... Refresh Page' } />
        </>:
        posts?.data?.length > 0 ? (
          <Container maxWidth="md">
            <Grid container spacing={3}>
              {posts?.data?.map((post) => {
                return (
                  <Grid item key={post.id} style={{ paddingLeft: 0, width:'100%' }}>
                    <Post post={post} />
                  </Grid>
                );
              })}
            </Grid>
            <Stack spacing={2} mt={4} style={{ alignItems: "center" }}>
              <Pagination type="next" page={page} count={Math.ceil(posts?.total / posts?.per_page)} 
              color="primary" onChange={handleChange} />
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
