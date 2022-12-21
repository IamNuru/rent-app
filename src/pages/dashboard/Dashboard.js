
// @mui
import { Grid, Container, Typography, CircularProgress } from '@mui/material';
// components
import Page from '../../components/Page';
// sections
import {
  /* AppTasks, */
  AppNewsUpdate,
  /* AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite, */
  AppWidgetSummary,
  /* AppCurrentSubject,
  AppConversionRates, */
} from './components/app';
import GroupIcon from '@mui/icons-material/Group';
import { useGetUsersQuery } from '../../features/api/userApiService'
import { useGetPostsQuery } from '../../features/api/postApiService'
import { useGetPropertiesQuery } from '../../features/api/propertyApiService'

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const { data: posts, isLoading:pLoading } = useGetPostsQuery();
  const { data: users } = useGetUsersQuery();
  const { data: properties } = useGetPropertiesQuery();

  let totalPosts = posts ? posts?.posts.length : 0;
  let totalUsers = users ? users?.users.length : 0;
  let totalProperties = properties ? properties?.properties.length : 0;

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="Users" total={totalUsers} color="rgb(6, 27, 100)" bgColor="rgb(209, 233, 252)" icon={<GroupIcon />} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="Posts" total={totalPosts} color="rgb(6, 27, 100)" bgColor="rgb(209, 233, 252)" icon={<GroupIcon />} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="Properties" total={totalProperties} color="rgb(6, 27, 100)" bgColor="rgb(209, 233, 252)" icon={<GroupIcon />} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            {
              pLoading ? (
                <CircularProgress />
              ) : (
                posts?.posts?.length > 0 ? (
                  <AppNewsUpdate
                    title="Blog Posts"
                    list={posts?.posts?.slice(0, 5).map((post, index) => ({
                      id: post.id,
                      title: post.title,
                      author: post.user.first_name,
                      image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                      postedAt: post.created_at,
                      slug: post.slug,
                    }))}
                  />
                )
                  : (
                    <Typography>No posts available </Typography>
                  )
              )
            }

          </Grid>
          
        </Grid>
      </Container>
    </Page>
  );
}
