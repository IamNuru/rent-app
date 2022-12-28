import { Alert, Button, CircularProgress, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Page from '../../components/Page'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import phoneRegExp from '../../utils/phoneRegExp';
import { useGetMyTenantsQuery, useGetTenantQuery, useUpdateTenantMutation } from '../../features/api/tenantApiService';
import isEmptyObject from '../../utils/isEmptyObject';
import EmptyList from '../../components/EmptyList';
import RenderServerErrorMessage from '../../components/RenderServerErrorMessage';


const EditTenant = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: tenantD, refetch, isLoading: tLoading, isFetching: tFetching, isError: tisError } = useGetTenantQuery(id);
    const tenantData = tenantD?.tenant ? tenantD.tenant : null;

    const { refetch: refetchTenants } = useGetMyTenantsQuery();
    const [updateTenant, { isLoading, isSuccess, isError, error }] = useUpdateTenantMutation()
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('active');

    const handleGender = (e) => {
        console.log(e.target.value)
        setGender(e.target.value)
    }
    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    useEffect(() => {
        if (id) {
            refetch(id)
            setStatus(tenantData?.status)
            setGender(tenantData?.gender)
        }

    // eslint-disable-next-line
    }, [id])

    useEffect(() => {
        if (isSuccess) {
            refetchTenants()
            navigate('/profile')
        }

        // eslint-disable-next-line
    }, [isSuccess])




    const formik = useFormik({
        initialValues: {
            firstName: tenantData?.first_name ? tenantData.first_name : "",
            lastName: tenantData?.last_name ? tenantData.last_name : "",
            email: tenantData?.email ? tenantData.email : "",
            phoneNumber:tenantData?.phone_number ? tenantData.phone_number :  "",
            photo: tenantData?.photo ? tenantData.photo : '',
            owing: tenantData?.owing ? tenantData.owing : 0,
            occupation: tenantData?.occupation ? tenantData.occupation : ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required("First Name is required.")
                .min(2, "First Name must be more than 2 characters."),
            lastName: Yup.string()
                .required("Last Name is required.")
                .min(2, "Last Name must be more than 2 characters."),
            email: Yup.string().email('Email must be a valid email address').required("Email is required."),
            phoneNumber: Yup.string()
                .min(9, 'Phone Number should not be less than 9')
                .max(16, 'Phone Number should not be more than 16')
                .matches(phoneRegExp, 'Phone number is not valid'),
            occupation: Yup.string()
                .min(1, 'Occupation must not have only 1 character')
                .max(20, 'Occupation must not have more tha 20 characters'),
            owing: Yup.number('Owing amount must be a number'),
            photo: Yup.string(),

        }),

        enableReinitialize: true,

        onSubmit: async (data, { setSubmitting }) => {
            await updateTenant({ ...data, id, gender, status });
            setSubmitting(false);
        },
    })



    return (
        <Page title="Edit Tenant">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Add a New Tenant
                    </Typography>
                    <Button variant="contained" component={RouterLink} to="/profile" startIcon={<ListAltIcon />}>
                        My Tenants
                    </Button>
                </Stack>
                <Typography variant='body2' sx={{ marginBottom: 3 }}><span style={{ color: 'pink' }}>NOTE:</span> You can asked the tenant to link himself to you as his tenant</Typography>
                {
                    tLoading || tFetching ? (
                        <EmptyList title="Loading Content" type='loading' description="Please wait for few seconds"></EmptyList>
                    ) : tisError ? (
                        <EmptyList title="Oppss!!" description="Something went wrong: Refresh page"></EmptyList>
                    ) : (
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        name="firstName"
                                        type="text"
                                        label="First Name"
                                        placeholder="First Name"
                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                        error={formik.errors.firstName}
                                        helperText={formik.errors.firstName}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        name="lastName"
                                        type="text"
                                        label="Last Name"
                                        placeholder="Last Name"
                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastName}
                                        error={formik.errors.lastName}
                                        helperText={formik.errors.lastName}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        name="email"
                                        type="text"
                                        label="Email"
                                        placeholder="Email"
                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        error={formik.errors.email}
                                        helperText={formik.errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
                                        name="owing"
                                        type="text"
                                        label="Amount Owing"
                                        placeholder="An amount the tenant owes"
                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.owing}
                                        error={formik.errors.owing}
                                        helperText={formik.errors.owing}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <FormControl sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgb(0 0 0 / 8%)', px: 2 }} color="secondary">
                                        <FormLabel id="status" sx={{ mr: 2, mt: 1 }}>Status</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="status"
                                            defaultValue={1}
                                            name="status"
                                            onChange={handleStatus}
                                            sx={{ display: 'flex', flexDirection: 'row' }}
                                        >
                                            <FormControlLabel value={'active'} control={<Radio />} label="Active" />
                                            <FormControlLabel value={'inactive'} control={<Radio />} label="In Active" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <FormControl sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgb(0 0 0 / 8%)', px: 2 }}>
                                        <FormLabel id="gender" sx={{ mr: 2, mt: 1 }}>Gender</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="dender"
                                            defaultValue="male"
                                            name="gender"
                                            onChange={handleGender}
                                            sx={{ display: 'flex', flexDirection: 'row' }}
                                        >
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        name="phoneNumber"
                                        type="text"
                                        label="Phone Number"
                                        placeholder="Phone Number"
                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phoneNumber}
                                        error={formik.errors.phoneNumber}
                                        helperText={formik.errors.phoneNumber}
                                        
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        name="occupation"
                                        type="text"
                                        label="Occupation"
                                        placeholder="What work does he do?"
                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.occupation}
                                        error={formik.errors.occupation}
                                        helperText={formik.errors.occupation}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        name="photo"
                                        type="url"
                                        label="Photo"
                                        placeholder="Photo"
                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.photo}
                                        error={formik.errors.photo}
                                        helperText={formik.errors.photo}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    {
                                        formik.touched && formik.errors && !isEmptyObject(formik.errors) ?
                                            <Typography variant='body1' sx={{ color: 'red', textAlign: 'center' }}>Your form contain errors</Typography>
                                            :
                                            null
                                    }
                                    {
                                        isSuccess && <Alert severity="success" sx={{ mt: 4 }}>Tenant Added Succesfully</Alert>
                                    }
                                    {
                                        isError && <RenderServerErrorMessage error={error} />
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
                                        {formik.isSubmitting || isLoading ? (
                                            <CircularProgress size={50} color="primary" />
                                        ) : (
                                            "Update Tenant"
                                        )}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )
                }

            </Container>
        </Page>
    )
}

export default EditTenant