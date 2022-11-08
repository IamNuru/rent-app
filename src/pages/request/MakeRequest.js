import React from 'react'
import { Container, Box, CircularProgress, Button, TextField } from '@mui/material'
import Page from '../../components/Page'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import phoneRegExp from '../../utils/phoneRegExp'
import isEmptyObject from '../../utils/isEmptyObject'

const MakeRequest = () => {

    const formik = useFormik({
        initialValues: {
            title: '',
            message: ''
        },

        validationSchema: Yup.object({
            title: Yup.string()
                .required('The title field is required')
                .min(5, 'The title field must not be less than 5 characters')
                .max(60, 'The title field must not be more than 60 characters'),
            message: Yup.string()
                .required('The title field is required')
                .min(10, 'The title field must not be less than 10 characters')
                .max(150, 'The title field must not be more than 150 characters'),
            phone: Yup.string()
                .min(9, 'Phone Number should not be less than 9')
                .max(16, 'Phone Number should not be more than 16')
                .matches(phoneRegExp, 'Phone number is not valid'),
        }),

        onSubmit: async (credentials, { setSubmitting }) => {
            /* await registerUser(credentials); */
            setSubmitting(false);
        },
    })

    return (
        <Page title="Make a request">
            <Container sx={{ maxWidth: "60rem !important", mx: "auto" }}>
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ mb: 4 }}>
                        <TextField
                            name="title"
                            type="text"
                            label="Request Title"
                            placeholder="I need a 3 bedroom flat for rent"
                            variant="outlined"
                            size="medium"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                        />
                    </Box>
                    {
                        //use default registered user phone number if he already update it
                    }
                    <Box sx={{ mb: 4 }}>
                        <TextField
                            name="phone"
                            type="text"
                            label="Phone Number"
                            placeholder="+233543027058"
                            size="medium"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                        />
                    </Box>
                    <Box sx={{ mb: 4 }}>
                        <TextField
                            name="message"
                            multiline
                            rows={4}
                            label="Request Message"
                            placeholder="Write details of what you want"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                        />
                    </Box>


                    <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        disabled={!isEmptyObject(formik.errors)}
                        type="submit"
                    >
                        {formik.isSubmitting ? (
                            <CircularProgress size={30} color="secondary" />
                        ) : (
                            "Submit Request"
                        )}
                    </Button>
                </form>
            </Container>
        </Page>
    )
}

export default MakeRequest