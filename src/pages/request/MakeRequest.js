import React, { useState } from 'react'
import {
    Select, MenuItem, InputLabel, Radio, RadioGroup, FormControlLabel, FormControl,
    FormLabel, Container, Box, CircularProgress, Button, TextField,
    Typography, Autocomplete, Alert
} from '@mui/material'
import Page from '../../components/Page'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import phoneRegExp from '../../utils/phoneRegExp'
import isEmptyObject from '../../utils/isEmptyObject';
import { usePostRequestMutation } from '../../features/api/apiService'

const MakeRequest = () => {

    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const [addresses, setAddresses] = useState('')
    const [amenities, setAmenities] = useState('')
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleAddressChange = (event, value) => {
        setAddresses(value);
    };
    const handleAmenitiesChange = (event, value) => {
        setAmenities(value);
    };
    const [postRequest, { isLoading, isError, error, isSuccess }] = usePostRequestMutation()

    const formik = useFormik({
        initialValues: {
            title: '',
            message: '',
            min_price: '',
            max_price: '',
            phone_number: '',
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
            phone_number: Yup.string()
                .min(9, 'Phone Number should not be less than 9')
                .max(16, 'Phone Number should not be more than 16')
                .matches(phoneRegExp, 'Phone number is not valid'),
            type: Yup.string(),
        }),

        onSubmit: async (request, { setSubmitting }) => {
            console.log({ ...request, category, type, addresses, amenities })
            postRequest({ ...request, category, type, addresses, amenities })
            setSubmitting(false);
        },
    })

    return (
        <Page title="Make a request">
            <Container sx={{ maxWidth: "60rem !important", mx: "auto" }}>
                <Typography className='main-header' sx={{ textAlign: 'center' }}>
                    Make a Request
                </Typography>
                <Typography className='main-header-description' sx={{ textAlign: 'center', mb: 4 }}>
                    In need of a place to rent or a house to buy?.
                    You are at the right place. Just make your request,
                    an agent may contact you or a colleague might refer you.
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ mb: 4 }}>
                        <FormControl>
                            <FormLabel id="select-type-of-request">What are you requesting for? I want:</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="select-type-of-request"
                                name="type"
                                value={type}
                                onChange={handleTypeChange}
                            >
                                <FormControlLabel
                                    sx={{ border: '1px solid #38373721', backgroundColor: '#38373721', px: { xs: '0.75rem', sm: '1rem', md: '1.2rem' }, borderRadius: '40px' }}
                                    value="rent" control={<Radio color='secondary' />} label="To Rent" />
                                <FormControlLabel
                                    sx={{ border: '1px solid #38373721', px: { xs: '0.75rem', sm: '1rem', md: '1.2rem' }, borderRadius: '40px' }}
                                    value="buy" control={<Radio />} label="To Buy" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box sx={{ mb: 4 }}>
                        <FormControl fullWidth>
                            <InputLabel id="select-category">Category</InputLabel>
                            <Select
                                labelId="select-category"
                                id="select-property-category"
                                value={category}
                                label="Category"
                                onChange={handleCategoryChange}
                                name="category"
                            >
                                {
                                    categories?.map((category) => {
                                        return <MenuItem value={category.name} key={category.id}>{category.name}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ mb: 4 }}>
                        <Autocomplete
                            multiple
                            id="amenities"
                            options={items}
                            getOptionLabel={(option) => option.name}
                            isOptionEqualToValue={(option, value) => option.name === value.name}
                            name="amenities"
                            onChange={handleAmenitiesChange}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Select Amenities"
                                    placeholder="Amenities"
                                />
                            )}
                        />
                    </Box>
                    <Box sx={{ mb: 4 }}>
                        <Autocomplete
                            multiple
                            id="addresses"
                            options={places}
                            getOptionLabel={(option) => option.name}
                            isOptionEqualToValue={(option, value) => option.name === value.name}
                            name='addresses'
                            onChange={handleAddressChange}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Select locations"
                                    placeholder="addresses"

                                />
                            )}
                        />
                    </Box>
                    <Box sx={{ mb: 4, display: 'flex' }}>
                        <TextField
                            id="outlined-number1"
                            label="Min Price(GHC)"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            size="small"
                            sx={{ mr: 1 }}
                            name="min_price"
                            value={formik.values.min_price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField
                            id="outlined-number2"
                            label="Max Price(GHC)"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            size="small"
                            name="max_price"
                            value={formik.values.max_price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Box>
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
                            name="phone_number"
                            type="text"
                            label="Phone Number"
                            placeholder="+233543027058"
                            size="medium"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone_number}
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

                    {
                        isError ?
                            <Alert severity="error" sx={{mb:4}}>
                                { 
                                error.status === 'FETCH_ERROR' ? 'Failed to fetch : Check network and try again'
                                :
                                error.status === 500 ? 'Something bad happened. Try again later'
                                : error.status === 402 ?
                                Object.values(error.data.errors)[0][0]
                                :error.status === 401 ?
                                'Unauthenticated : Please login/register to be able to make a request'
                                :
                                'Something went wrong: Refresh and try again'
                                
                                }
                            </Alert>
                            : isSuccess &&
                                <Alert severity="success" sx={{mb:4}}>Request Created Successfully</Alert>
                                
                    }

                    <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        disabled={!isEmptyObject(formik.errors) || isLoading}
                        type="submit"
                    >
                        {formik.isSubmitting || isLoading ? (
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

const items = [
    { name: 'Toilet' },
    { name: 'Bath' },
    { name: 'Car Park' },
    { name: 'Security' },
]
const places = [
    { name: 'Ghana' },
    { name: 'Nigeria' },
    { name: 'Benin' },
    { name: 'Kumasi' },
]
const categories = [
    { name: 'Office', id: 1 },
    { name: 'Single Room', id: 2 },
    { name: 'Apartment', id: 3 },
    { name: 'House', id: 4 },
]

export default MakeRequest