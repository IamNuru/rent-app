import { Alert, Box, Button, Card, CardMedia, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material'
import isEmptyObject from '../../../utils/isEmptyObject'
import { isObject, useFormik } from 'formik'
import * as Yup from 'yup'
import { useUpdateAuthUserProfilePhotoMutation } from "../../../features/api/userApiService"
import SnackBar from '../../../components/SnackBar'


const UploadProfileImage = ({ open, handleClose, refetchUserData }) => {
    const noImage = "/static/no-post-image.jpg"
    const [updateAuthUserProfilePhoto, { isLoading, isSuccess, isError, error }] = useUpdateAuthUserProfilePhotoMutation();




    const formik = useFormik({
        initialValues: {
            url: '',
        },
        validationSchema: Yup.object({
            url: Yup.string("Url must be a url of characters")
                .required('Url field is required')
                .min(4, 'Characters must be more than 4')
        }),

        onSubmit: async (data) => {
            await updateAuthUserProfilePhoto(data)
            if(isSuccess){
                refetchUserData()
            }
        }
    })

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">
                Upload Profile Photo
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Input the url of the image
                </DialogContentText>
            </DialogContent>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        name="url"
                        type="url"
                        label="Url"
                        variant="outlined"
                        size="small"
                        fullWidth
                        error={formik.errors.url}
                        helperText={formik.errors.url}
                        value={formik.values.url}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.values.url !== '' ?
                            !isEmptyObject(formik.errors.url) ?
                                <Box sx={{ mt: 4 }}>
                                    <Typography sx={{ fontSize: '12px', color: 'gray' }}>Image Preview</Typography>
                                    <Card sx={{ maxWidth: 645, height: '100%', m: '1rem' }}>
                                        <CardMedia
                                            sx={{ height: 200 }}
                                            image={formik.values.url}
                                            title="Profile image"
                                            onError={e => {
                                                e.target.src = noImage;
                                            }}
                                        />
                                    </Card>
                                </Box>
                                :
                                ''
                            :
                            ''
                    }
                    {
                        isSuccess && <SnackBar message='User Profile Photo Updated' open={true} />
                    }
                    {
                        isError ?
                            isObject(error) ? (
                                <Alert severity="error">{
                                    error.status === 'FETCH_ERROR' ? 'Network error: Check internet' 
                                    : error.status === 401 ? Object.values(error?.data?.errors)[0] 
                                    : 'Something went wrong'
                                }</Alert>
                            ) : (
                                <Alert severity="warning">An error occured</Alert>
                            )
                            :
                            null
                    }
                    <Button sx={{ mt: 4 }} variant="contained" type='submit'
                        disabled={!isEmptyObject(formik.errors) || isLoading} fullWidth>
                        {
                            isLoading ?
                                (
                                    <CircularProgress size={30} />
                                )
                                :
                                'Update Profile'
                        }
                    </Button>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    exit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UploadProfileImage