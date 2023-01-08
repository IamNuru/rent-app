import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Grid, Button, Container, Stack, Typography, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// components
import Page from '../../components/Page';
//import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from './blog';
import BlogPostCard from './blog/BlogPostCard';
/* import BlogPostsSort from './blog/BlogPostsSort';
import BlogPostsSearch from './blog/BlogPostsSearch'; */


import { useGetPostsQuery } from '../../features/api/postApiService';

// ----------------------------------------------------------------------

/* const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
]; */

// ----------------------------------------------------------------------

export default function DashboardPosts() {
  const { data, isLoading, isError, refetch } = useGetPostsQuery();
  const POSTS = data ? data.posts : null;

  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom sx={{fontWeight:{xs:600}, fontSize:{xs:'1.35rem'}}}>
            Blog
          </Typography>
          <Button variant="contained" component={RouterLink} to="/dashboard/create-post" startIcon={<AddIcon />}>
            New Post
          </Button>
        </Stack>
        {
          isLoading ? (<Box sx={{ display: 'grid', justifyContent: 'center' }}>
            <Box sx={{ display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
              <CircularProgress />
              <Typography>Loading Posts</Typography>
            </Box>
          </Box>
          ) : isError ? (
            <Box sx={{ display: 'grid', justifyContent: 'center' }}>
              <Box>
                <Typography variant='h4'>An Error Occured: Please refresh page</Typography>
              </Box>
            </Box>
          ) : <>
            {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
              <BlogPostsSearch posts={POSTS} />
              <BlogPostsSort options={SORT_OPTIONS} />
            </Stack> */}

            <Grid container spacing={3}>
              {POSTS.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} refetch={refetch} />
              ))}
            </Grid>
          </>
        }
      </Container>
    </Page>
  );
}
