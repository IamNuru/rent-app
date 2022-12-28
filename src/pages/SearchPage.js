import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import EmptyList from "../components/EmptyList";
import Page from "../components/Page"
import RenderServerErrorMessage from "../components/RenderServerErrorMessage";
import { useGetSearchResultsQuery } from "../features/api/apiService";

const SearchPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q');

    const { data, isLoading, isFetching, isSuccess, isError, error } = useGetSearchResultsQuery(searchQuery);



    return (
        <Page title={searchQuery ? `Search ${searchQuery}` : 'Search Page'}>
            <Container maxWidth='md'>
                {
                    isLoading ? <EmptyList type='loading' title="Loading Data" description="Loading your search results... Please wait" />
                        : isFetching ? <EmptyList type='loading' title="Loading Data" description="Loading your search results... Please wait" />
                            : isError ? <RenderServerErrorMessage error={error} />
                                : isSuccess ? <>
                                    <Box>
                                        <Typography gutterBottom>Your Search returns &nbsp;
                                            <small style={{ color: '#fe4545', fontSize: '16px' }}>{data?.posts?.length}</small> {data?.posts?.length > 1 ? 'Posts' : 'Post'},&nbsp;
                                            <small style={{ color: '#fe4545', fontSize: '16px' }}>{data?.requests?.length}</small> {data?.requests?.length > 1 ? 'Requests' : 'Request'},&nbsp;
                                            <small style={{ color: '#fe4545', fontSize: '16px' }}>{data?.properties?.length}</small> {data?.properties?.length > 1 ? 'Properties' : 'Property'},&nbsp;
                                        </Typography>
                                        {
                                            data?.posts?.length > 0 && <Grid container spacing={2} sx={{ my: 2 }}>
                                                {
                                                    data?.posts.map((post) => {
                                                        return <Grid item key={post.id} sx={{ width: '100%' }}>
                                                            <Link to={`/post/${post.id}/${post.slug}`}>
                                                                <Paper sx={{ py: 4, px: 2 }} className="search-item-paper">
                                                                    <Typography sx={{ color: '#65e79fe8', fontSize: '16px' }}>Blog Post</Typography>
                                                                    <Typography>{post.title}</Typography>
                                                                </Paper>
                                                            </Link>
                                                        </Grid>
                                                    })
                                                }
                                            </Grid>
                                        }
                                        {
                                            data?.requests?.length > 0 && <Grid container spacing={2} sx={{ my: 2 }}>
                                                {
                                                    data?.requests.map((request) => {
                                                        return <Grid item key={request.id} sx={{ width: '100%' }}>
                                                            <Link to={`/request/${request.id}/${request.slug}`}>
                                                                <Paper sx={{ py: 4, px: 2 }} className="search-item-paper">
                                                                    <Typography sx={{ color: '#e7b365e8', fontSize: '16px' }}>A Request</Typography>
                                                                    <Typography>{request.title}</Typography>
                                                                </Paper>
                                                            </Link>
                                                        </Grid>
                                                    })
                                                }
                                            </Grid>
                                        }
                                        {
                                            data?.properties?.length > 0 && <Grid container spacing={2} sx={{ my: 2 }}>
                                                {
                                                    data?.properties.map((property) => {
                                                        return <Grid item key={property.id} sx={{ width: '100%' }}>
                                                            <Link to={`/property/${property.id}/${property.slug}`}>
                                                            <Paper sx={{ py: 4, px: 2 }} className="search-item-paper">
                                                                <Typography sx={{ color: '#23dfcd', fontSize: '16px' }}>Property</Typography>
                                                                <Typography>{property.title}</Typography>
                                                            </Paper>
                                                            </Link>
                                                        </Grid>
                                                    })
                                                }
                                            </Grid>
                                        }
                                    </Box>
                                </> : 'Something went wrong'
                }
            </Container>
        </Page>
    )
}

export default SearchPage