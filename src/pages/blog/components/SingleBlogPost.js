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
import { useGetPostQuery } from "../../../features/api/postApiService";
import { useParams } from "react-router-dom";
import EmptyList from "../../../components/EmptyList";
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";
import { upperCaseFirst } from "change-case-all";
import Page from "../../../components/Page";
import GoBackButton from "../../../components/GoBackButton";
import CenterLoading from "../../../components/CenterLoading";

const SingleBlogPost = () => {
  let { id } = useParams();
  const { data, isLoading, isFetching, isError, error } = useGetPostQuery(id);
  const post = data ? data.post : null;
  const noImage = "/static/no-post-image.jpg"


  return (
    <Page title={post?.title}>
      <GoBackButton />
      <Container maxWidth="md">
        {
          isLoading ? <>
          <CenterLoading />
          </> : isFetching ? <>
            <EmptyList title="Fetching Requests" description="We are Fetching your data. Please wait" />
          </> : isError ? <>
            <EmptyList title="An Error Occured"
              description={error.status === 'FETCH_ERROR' ? 'Failed to fetch data' : 'Something went wrong... Refresh Page'} />
          </> :
            <>
              <Box align="center" mb={2}>
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  {post?.title}
                </Typography>
              </Box>
              <Card p={2}>
                <Paper elevation={0}>
                  <Grid container mb={2} style={{ padding: "0.015rem 0.45rem" }}>
                    <Grid item xs={6} sm={6}>
                      <Stack direction="row" spacing={2} align="center">
                        <Avatar
                          sx={{ bgcolor: deepOrange[500] }}
                          alt={post?.user.first_name}
                          src={post.user.photo}
                        >
                          {capitalizeFirstLetter(FirstLetter(post?.user.first_name))}
                        </Avatar>
                        <Typography>{upperCaseFirst(post?.user.first_name)}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={6} sm={6} align="right">
                      <Typography
                        sx={{ fontSize: { xs: '0.75rem', sm: "1rem" }, color: "gray" }}
                      >
                        {format(toDate(new Date(post?.created_at)), "do MMM, yyyy")}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
                <Divider flexItem py={1} style={{ margin: '0.1rem 0.25rem 0.5rem 0.25rem' }} />
                <CardMedia
                  component="img"
                  height="300"
                  image={post?.image}
                  onError={e => {
                    e.target.src = noImage;
                  }}
                  alt={post?.title}
                />

                <CardContent>
                  <Typography variant="h5">{post.description}</Typography>
                </CardContent>
                <CardContent>
                  <Typography>{post.content}</Typography>
                </CardContent>
              </Card>
            </>
        }
      </Container>
    </Page>
  );
};

export default SingleBlogPost;
