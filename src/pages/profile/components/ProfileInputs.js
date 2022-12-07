import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import phoneRegExp from '../../../utils/phoneRegExp'
import EditIcon from '@mui/icons-material/Edit';
import isEmptyObject from '../../../utils/isEmptyObject';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';

const ProfileInputs = () => {
    const ref = useRef()
    const { user } = useSelector((state) => state.auth)
    const [firstName, setfirstName] = useState(true)
    const [lastName, setlastName] = useState(true)
    const [email, setEmail] = useState(true)
    const [phoneNumber, setphoneNumber] = useState(true)
    const handleEditFirstName = (e) => setfirstName(!firstName)
    const handleEditLastName = (e) => setlastName(!lastName)
    const handleEditPhoneNumber = (e) => setphoneNumber(!phoneNumber)
    const handleEditEmail = (e) => setEmail(!email)

    const formik = useFormik({
        initialValues: {
            firstName: user?.first_name ? user?.first_name : '',
            lastName: user?.last_name ? user?.last_name : '',
            email: user?.email ? user?.email : '',
            phoneNumber: user?.phone_number ? user?.phone_number : '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required("First Name is required.")
                .min(2, "First Name must be more than 2 characters."),
            lastName: Yup.string().min(
                2,
                "Last Name must be more than 2 characters."
            ),
            username: Yup.string()
                .min(2, "Username must be more than 2 characters.")
                .required("Username is required."),
            email: Yup.string().email().required("Email is required."),
            phoneNumber: Yup.string()
                .min(9, 'Phone Number should not be less than 9')
                .max(16, 'Phone Number should not be more than 16')
                .matches(phoneRegExp, 'Phone number is not valid'),
            password: Yup.string()
                .required("Password is Required.")
                .min(6, "Password is too short - should be 6 chars minimum."),
        }),

        onSubmit: async (credentials, { setSubmitting }) => {
            /* await registerUser(credentials); */
            setSubmitting(false);
        },
    })



    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <TextField
                        id='ref'
                        ref={ref}
                        name="firstName"
                        type="text"
                        label="First Name"
                        placeholder="First Name"
                        variant="outlined"
                        size="small"
                        fullWidth
                        disabled={firstName}
                        error={formik.touched && !isEmptyObject(formik.errors) && formik.errors.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        helperText={formik.touched && !isEmptyObject(formik.errors) ? formik.errors.firstName : ''}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="enable edit"
                                        onClick={handleEditFirstName}
                                    >
                                        {<EditIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="lastName"
                        type="text"
                        label="Last Name"
                        placeholder="Last Name"
                        variant="outlined"
                        size="small"
                        fullWidth
                        disabled={lastName}
                        error={formik.touched && !isEmptyObject(formik.errors) && formik.errors.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        helperText={formik.touched && !isEmptyObject(formik.errors) ? formik.errors.lastName : ''}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="enable edit"
                                        onClick={handleEditLastName}
                                    >
                                        {<EditIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="email"
                        type="text"
                        label="Email"
                        placeholder="Email"
                        variant="outlined"
                        size="small"
                        fullWidth
                        disabled={email}
                        error={formik.touched && !isEmptyObject(formik.errors) && formik.errors.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        helperText={formik.touched && !isEmptyObject(formik.errors) ? formik.errors.email : ''}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="enable edit"
                                        onClick={handleEditEmail}
                                    >
                                        {<EditIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid><Grid item xs={12}>
                    <TextField
                        name="phoneNumber"
                        type="text"
                        label="Phone Number"
                        placeholder="Phone Number"
                        variant="outlined"
                        size="small"
                        fullWidth
                        disabled={phoneNumber}
                        error={formik.touched && !isEmptyObject(formik.errors) && formik.errors.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                        helperText={formik.touched && !isEmptyObject(formik.errors) ? formik.errors.phoneNumber : ''}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="enable edit"
                                        onClick={handleEditPhoneNumber}
                                    >
                                        {<EditIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </form>
    )
}

export default ProfileInputs