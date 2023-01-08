import { Alert, Button, CircularProgress, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Page from "../../components/Page";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { Link as RouterLink, useParams } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useUpdatePostMutation, useGetPostsQuery, useGetPostQuery } from "../../features/api/postApiService";
import isEmptyObject from "../../utils/isEmptyObject";
import RenderServerErrorMessage from "../../components/RenderServerErrorMessage";
import RenderFormikErrors from "../../components/RenderFormikErrors";
import EmptyList from "../../components/EmptyList";





export default function UpdatePost() {
    const { id } = useParams();
    const { data, isError, isLoading, isSuccess, error } = useGetPostQuery(id);
    const [updatePost, { isLoading: pLoading, isError: pIsError, isSuccess: pIsSuccess, error: pError }] = useUpdatePostMutation();
    const { refetch } = useGetPostsQuery();

    const formik = useFormik({
        initialValues: {
            title: data?.post?.title ? data?.post?.title : '',
            description: data?.post?.description ? data?.post?.description : '',
            content: data?.post?.content ? data?.post?.content : '',
            cover: data?.post?.cover ? data?.post?.cover : '',
        },

        validationSchema: Yup.object({
            title: Yup.string()
                .required('The title field is required')
                .min(15, 'The title field must not be less than 15 characters')
                .max(75, 'The title field must not be more than 75 characters'),
            description: Yup.string()
                .required('The description field is required')
                .min(20, 'The description field must not be less than 20 characters')
                .max(200, 'The description field must not be more than 200 characters'),
            content: Yup.string()
                .required('The content field is required')
                .min(20, 'The content field must not be less than 20 characters'),
            cover: Yup.string().required('Cover photo is required')
                .url()

        }),

        enableReinitialize: true,

        onSubmit: async (data, { setSubmitting }) => {
            await updatePost({...data, id});
            setSubmitting(false)
            refetch();
        }
    })


    return (
        <Page title="Dashboard: Update Blog Post">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: { xs: 600 }, fontSize: { xs: '1.35rem' } }}>
                        Update Post
                    </Typography>
                    <Button variant="contained" component={RouterLink} to="/dashboard/posts" startIcon={<ListAltIcon />}>
                        Posts
                    </Button>
                </Stack>

                {
                    isLoading ? (
                        <EmptyList title="Loading Content" type='loading' description="Please wait for few seconds" />
                    ) : isError ? (<RenderServerErrorMessage error={error} />)
                            : isSuccess ?
                                (<form onSubmit={formik.handleSubmit}>
                                    <Grid container sx={{ display: 'grid', gap: '2rem' }}>
                                        <TextField
                                            name="title"
                                            type="text"
                                            label="Title"
                                            variant="outlined"
                                            size="large"
                                            fullWidth
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.title}
                                        />
                                        <TextField
                                            name="description"
                                            type="text"
                                            label="Description"
                                            variant="outlined"
                                            size="large"
                                            fullWidth
                                            multiline
                                            rows={3}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.description}
                                        />
                                        <TextField
                                            name="content"
                                            type="text"
                                            label="Content"
                                            variant="outlined"
                                            size="large"
                                            fullWidth
                                            multiline
                                            rows={6}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.content}
                                        />
                                        <TextField
                                            name="cover"
                                            type="url"
                                            label="Cover photo"
                                            variant="outlined"
                                            size="large"
                                            fullWidth
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.cover}
                                        />
                                    </Grid>


                                    {
                                        formik.touched && !isEmptyObject(formik.errors) && <RenderFormikErrors formik={formik} />
                                    }
                                    {
                                        pIsSuccess && <Alert severity="success" sx={{ my: 2 }}>Post Created Succesfully</Alert>
                                    }
                                    {
                                        pIsError && <RenderServerErrorMessage error={pError} />
                                    }


                                    <Button
                                        fullWidth
                                        color="primary"
                                        variant="contained"
                                        disabled={formik.isSubmitting || !isEmptyObject(formik.errors) || isLoading}
                                        type="submit"
                                        size="large"
                                        sx={{ mt: 4, mb: 4 }}
                                    >
                                        {formik.isSubmitting || pLoading ? (
                                            <CircularProgress size={50} color="primary" />
                                        ) : (
                                            "Update Post"
                                        )}
                                    </Button>
                                </form>)
                                : null
                }

            </Container>
        </Page>
    );
}