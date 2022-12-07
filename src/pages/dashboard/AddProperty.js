import { Alert, Autocomplete, Button, CircularProgress, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, List, ListItem, ListItemIcon, ListItemText, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from "@mui/material";
import Page from "../../components/Page";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { Link as RouterLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import ReportIcon from "@mui/icons-material/Report";
import { useAddPropertyMutation } from "../../features/api/propertyApiService";
import isEmptyObject from "../../utils/isEmptyObject";
import { useState } from "react";
import UploadPhotos from "../../components/UploadPhotos";
import { ADDRESSES, PROPERTY_AMENITIES, PROPERTY_CATEGORIES } from "../../Constants";





export default function AddProperty() {
    const [addProperty, { isLoading, isError, error, isSuccess }] = useAddPropertyMutation()
    const [open, setOpen] = useState(false)
    const [images, setImages] = useState([])
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
    const handlePushToImages = (img) => {
        setImages([...images, img])
        console.log(images)
    }

    const handleOpenImagesDialog = () => {
        setOpen(true)
    }
    const handleCloseImagesDialog = () => {
        setOpen(false)
    }





    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
        },

        validationSchema: Yup.object({
            title: Yup.string()
                .required('The title field is required')
                .min(15, 'The title field must not be less than 15 characters')
                .max(75, 'The title field must not be more than 75 characters'),
            description: Yup.string()
                .required('The description field is required')
                .min(20, 'The description field must not be less than 20 characters')
                .max(3000, 'The description field must not be more than 200 characters'),
            price: Yup.number()
                .required()
                .min(0)

        }),

        onSubmit: async (data, { setSubmitting, resetForm }) => {
            await addProperty({ ...data, images, addresses, amenities, type, category });
            setSubmitting(false)
            if(isSuccess){
                resetForm()
            }
        }
    })


    return (
        <Page title="Dashboard: Add Property">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Add a New Property
                    </Typography>
                    <Button variant="contained" component={RouterLink} to="/dashboard/properties" startIcon={<AddIcon />}>
                        Properties
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
                            name="price"
                            type="number"
                            label="price"
                            variant="outlined"
                            size="large"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                        />

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
                                    value="rent" control={<Radio color='secondary' />} label="For Rent" />
                                <FormControlLabel
                                    sx={{ border: '1px solid #38373721', px: { xs: '0.75rem', sm: '1rem', md: '1.2rem' }, borderRadius: '40px' }}
                                    value="sale" control={<Radio />} label="For Sale" />
                            </RadioGroup>
                        </FormControl>
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
                                    PROPERTY_CATEGORIES?.map((category) => {
                                        return <MenuItem value={category.id} key={category.name}>{category.name}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>

                        <Autocomplete
                            multiple
                            id="amenities"
                            options={PROPERTY_AMENITIES}
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
                        <Autocomplete
                            multiple
                            id="addresses"
                            options={ADDRESSES}
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


                        <Button variant="outlined" onClick={handleOpenImagesDialog}>
                            Upload images
                        </Button>
                        <UploadPhotos open={open} handleClose={handleCloseImagesDialog}
                            handlePushToImages={handlePushToImages} images={images} />

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
                        isSuccess && <Alert severity="success" sx={{ mt: 4 }}>Property Added Succesfully</Alert>
                    }
                    {
                        isError && <Alert severity="warning" sx={{ mt: 4 }}>
                            {
                                error.status === 403 
                                ? 'You are not allowed to add a property'
                                :
                                'An error occured. Try again'
                            }
                        </Alert>
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
                            "Add Property"
                        )}
                    </Button>
                </form>

            </Container>
        </Page>
    );
}