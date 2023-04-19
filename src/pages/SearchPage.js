import { Box, Container, Grid, Paper, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { createSearchParams, Link, useLocation, useNavigate } from "react-router-dom";
import EmptyList from "../components/EmptyList";
import Page from "../components/Page"
import RenderServerErrorMessage from "../components/RenderServerErrorMessage";
import { useGetSearchResultsQuery } from "../features/api/apiService";
import { Search } from "@mui/icons-material";
import {upperCaseFirst} from 'change-case-all';


const SearchPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q');
    const navigate = useNavigate()

    const {data, isLoading, isFetching, isSuccess, isError, error } = useGetSearchResultsQuery(searchQuery);

    const formik = useFormik({
        initialValues: {
            searchField: searchQuery ? searchQuery : '',
        },

        validationSchema: Yup.object({
            searchField: Yup.string()
                .min(2, 'Search field must contain minimum of 2 charaters')
                .max(20, 'Search field must contain maximum of 20 charaters')
        }),

        onSubmit: ({ searchField }) => {
            navigate({
              pathname: "/search",
              search: createSearchParams({
                q: searchField
              }).toString()
            });
          }
    })

    return (
        <Page title={searchQuery ? `Search ${searchQuery}` : 'Search Page'}>

            <Container maxWidth='md'>
            <Box sx={{mb:4}}>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                name="searchField"
                                size="small"
                                id="outlined-basic"
                                variant="outlined"
                                className="search-input"
                                placeholder="Example: Property for sale"
                                onChange={formik.handleChange}
                                value={formik.values.searchField}
                                error={!formik.isValid}
                                helperText={formik.errors.searchField}
                            />
                        </Grid>
                        <Grid item sx={{ textAlign: { xs: "right", sm:'left' } }} xs={12} sm={3}>
                            <Button variant="contained" endIcon={<Search />} type="submit" sx={{width:{sm:'100%'}}}>
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
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
                                                                <Paper sx={{ py: 4, px: 2, backgroundColor: '#eff7f6b5' }} className="search-item-paper">
                                                                    <Typography sx={{ color: '#03875ded', fontSize: 20, fontWeight:600 }}>Blog Post</Typography>
                                                                    <Typography sx={{fontSize:18, fontWeight:400}}>{ upperCaseFirst(post.title)}</Typography>
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
                                                                <Paper sx={{ py: 4, px: 2, backgroundColor:'#f4ede29b' }} className="search-item-paper">
                                                                    <Typography sx={{ color: '#e7b365e8', fontSize: 20, fontWeight:600 }}>A Request</Typography>
                                                                    <Typography sx={{fontSize:18}}>{request.title}</Typography>
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
                                                                <Paper sx={{ py: 4, px: 2, backgroundColor:'#caffff29' }} className="search-item-paper">
                                                                    <Typography sx={{ color: '#15cebb', fontSize: 20, fontWeight:600 }}>Property</Typography>
                                                                    <Typography sx={{fontSize:18}}>{property.title}</Typography>
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