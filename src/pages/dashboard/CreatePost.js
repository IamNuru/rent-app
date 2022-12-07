import { Alert, Button, CircularProgress, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, TextField, Typography } from "@mui/material";
import Page from "../../components/Page";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { Link as RouterLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import ReportIcon from "@mui/icons-material/Report";
import { useCreatePostMutation, useGetPostsQuery } from "../../features/api/postApiService";
import isEmptyObject from "../../utils/isEmptyObject";





export default function CreatePost() {
    const [createPost, { isLoading, isError, isSuccess }] = useCreatePostMutation();
    const { refetch } = useGetPostsQuery();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            content: '',
            cover: '',
        },

        validationSchema: Yup.object({
            title: Yup.string()
                .required('The title field is required')
                .min(15, 'The title field must not be less than 15 characters')
                .max(75, 'The title field must not be more than 75 characters'),
            description: Yup.string()
                .required('The description field is required')
                .min(20, 'The description field must not be less than 20 characters')
                .max(200, 'The description field must not be more than 150 characters'),
            content: Yup.string()
            .required('The content field is required')
            .min(20, 'The content field must not be less than 20 characters'),
            cover: Yup.string()
            .url()
            
        }),

        onSubmit: async (data, { setSubmitting }) =>{
            await createPost(data);
            setSubmitting(false)
            refetch();
        }
    })


    return (
        <Page title="Dashboard: Create Blog">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Create a New Post
                    </Typography>
                    <Button variant="contained" component={RouterLink} to="#" startIcon={<AddIcon />}>
                        Posts
                    </Button>
                </Stack>

                

                <form onSubmit={formik.handleSubmit}>
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


                {formik.touched && formik.errors && !isEmptyObject(formik.errors) ? (
                    <List style={{ paddingTop: 0 }}>
                        {Object.keys(formik.errors).map(function (value, index) {
                            return (
                                <ListItem
                                    key={value}
                                    alignItems="flex-start"
                                    className="listItem"
                                    style={{
                                        color: "#e31414",
                                        marginTop: "4px",
                                        paddingTop: "0px",
                                        paddingBottom: "0px",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                    }}
                                >
                                    <ListItemIcon
                                        style={{ minWidth: "30px", color: "red", margin: 0 }}
                                    >
                                        <ReportIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText disableTypography
                                        sx={{ margin: 0, fontWeight: 'lighter', fontSize: '0.85rem', lineHeight: 1.5 }}
                                        primary={formik.errors[value]}
                                    />
                                </ListItem>
                            );
                        })}
                    </List>
                ) : null}
                {
                    isSuccess && <Alert severity="success">Post Created Succesfully</Alert>
                }
                {
                    isError && <Alert severity="warning">An error occured</Alert>
                }


                    <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        disabled={formik.isSubmitting || !isEmptyObject(formik.errors) || isLoading}
                        type="submit"
                        size="large"
                        sx={{mt:4, mb:4}}
                    >
                        {formik.isSubmitting || isLoading ? (
                            <CircularProgress size={50} color="primary" />
                        ) : (
                            "Submit Post"
                        )}
                    </Button>
                </form>
                
            </Container>
        </Page>
    );
}