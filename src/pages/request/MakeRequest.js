import React, { useState } from 'react'
import {
    Select, MenuItem, InputLabel, Radio, RadioGroup, FormControlLabel, FormControl,
    FormLabel, Container, Box, CircularProgress, Button, TextField,
    Typography, Autocomplete
} from '@mui/material'
import Page from '../../components/Page'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import phoneRegExp from '../../utils/phoneRegExp'
import isEmptyObject from '../../utils/isEmptyObject';

const MakeRequest = () => {

    const [category, setCategory] = useState(1)
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

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
                                name="request-type"
                            >
                                <FormControlLabel
                                    sx={{border:'1px solid #38373721', backgroundColor:'#38373721', px: {xs:'0.75rem', sm:'1rem', md:'1.2rem'}, borderRadius: '40px' }}
                                    value="Rent" control={<Radio color='secondary' />} label="To Rent" />
                                <FormControlLabel
                                    sx={{border:'1px solid #38373721', px: {xs:'0.75rem', sm:'1rem', md:'1.2rem'}, borderRadius: '40px' }}
                                    value="Buy" control={<Radio />} label="To Buy" />
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
                            >
                                {
                                    categories?.map((category) => {
                                        return <MenuItem value={category.id} key={category.id}>{category.name}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ mb: 4 }}>
                        <Autocomplete
                            multiple
                            id="amenities"
                            options={amenities}
                            getOptionLabel={(option) => option.name}
                            /* defaultValue={[amenities[1]]} */
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
                            id="amenities"
                            options={amenities}
                            getOptionLabel={(option) => option.name}
                            /* defaultValue={[amenities[1]]} */
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Select locations"
                                    placeholder="Amenities"
                                />
                            )}
                        />
                    </Box>
                    <Box sx={{ mb: 4, display: 'flex' }}>
                        <TextField
                            id="outlined-number"
                            label="Min Price(GHC)"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            size="small"
                            sx={{ mr: 1 }}
                        />
                        <TextField
                            id="outlined-number"
                            label="Max Price(GHC)"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            size="small"
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

const amenities = [
    { name: 'Toilet' },
    { name: 'Bath' },
    { name: 'Car Park' },
    { name: 'Security' },
]
const categories = [
    { name: 'Office', id: 1 },
    { name: 'Single Room', id: 2 },
    { name: 'Apartment', id: 3 },
    { name: 'House', id: 4 },
]

export default MakeRequest