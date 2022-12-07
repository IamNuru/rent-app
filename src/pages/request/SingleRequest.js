import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { upperCaseFirst } from "change-case-all";
import { format, toDate } from "date-fns";
import { useParams } from "react-router-dom";
import EmptyList from "../../components/EmptyList";
import Page from "../../components/Page";
import FirstLetter from "../../utils/FirstLetter";
import { useGetRequestQuery } from "../../features/api/requestApiService";
import { Link as RouterLink } from 'react-router-dom';


const SingleRequest = () => {
    let { id, slug } = useParams();
    console.log(slug)
    const { data, isLoading, isFetching, isError, error } = useGetRequestQuery(id,slug);
    const request = data ? data.request : null;

    return (
        <Page title={`Request | ${request?.title}`}>
            <Container maxWidth="md">
                {
                    isLoading  ? <>
                        <EmptyList title="Loading Data" type="loading" description="We are loading your data. Please wait" />
                    </> : isFetching ? <>
                        <EmptyList title="Fetching Requests" description="We are Fetching your data. Please wait" />
                    </> : isError ? <>
                        <EmptyList title="An Error Occured" type="error"
                            description={error.status === 'FETCH_ERROR' ? 'Failed to fetch data' : 'Something went wrong... Refresh Page'} />
                    </>
                        :
                        <>
                            <Box align="center" mb={2}>
                                <Typography variant="h5" style={{ fontWeight: 600 }}>
                                    {request?.title}
                                </Typography>
                            </Box>
                            <Card p={2}>
                                <Paper elevation={0}>
                                    <Grid container mb={2} style={{ padding: "0.015rem 0.45rem" }}>
                                        <Grid item xs={6} sm={6}>
                                            <Stack direction="row" spacing={2} align="center">
                                                <Avatar
                                                    sx={{ bgcolor: deepOrange[500] }}
                                                    alt={request?.user.first_name}
                                                    src={request?.user.photo}
                                                >
                                                    {upperCaseFirst(FirstLetter(request?.user.first_name))}
                                                </Avatar>
                                                <Typography>{upperCaseFirst(request?.user.first_name)}</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={6} sm={6} align="right">
                                            <Typography
                                                sx={{ fontSize: { xs: '0.75rem', sm: "1rem" }, color: "gray" }}
                                            >
                                                {format(toDate(new Date(request?.created_at)), "do MMM, yyyy")}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Divider flexItem py={1} style={{ margin: '0.1rem 0.25rem 0.5rem 0.25rem' }} />


                                <CardContent>
                                    <Typography variant="h5">{request.message}</Typography>
                                </CardContent>

                                <CardContent sx={{ mt: 4, bgcolor: 'ccc', py: 2, display:'grid', justifyContent:'center' }}>
                                    <Stack direction="row" spacing={2} align="center">
                                        <Button variant="contained" component={RouterLink} to={`/chat/${request.user.id}`}>{`Chat ${request.user.gender === "male" ? 'Him' : request.user.gender === "female" ? 'Her' : ''}`}</Button>
                                        <Button variant="contained">{`Call ${request.user.gender === "male" ? 'Him' : request.user.gender === "female" ? 'Her' : ''}`}</Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </>
                }
            </Container>
        </Page>
    )
}

export default SingleRequest;