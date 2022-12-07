//import { useState } from 'react';
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@mui/material'
//import { checkImage } from '../utils/checkImage';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import isEmptyObject from '../utils/isEmptyObject';
import DeleteIcon from '@mui/icons-material/Delete';


const UploadPhotos = ({ open, handleClose, handlePushToImages, images, setImages }) => {

    const handleRemoveImage = (img) => {
        let index = images.indexOf(img)
        if (index > -1) {
            const im = [...images].splice(index, 1)
            setImages(im)
        }
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            url: '',
        },
        validationSchema: Yup.object({
            title: Yup.string("Title must be a string of characters")
                .required('Title field is required')
                .min(2, 'Characters must be more than 2')
                .max(20, 'Characters must NOT be more than 20'),
            url: Yup.string("Title must be a url of characters")
                .required('Title field is required')
                .min(2, 'Characters must be more than 2')
        }),

        onSubmit: async (data) => {
            handlePushToImages(data);
        }
    })

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Upload Image
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Upload image url and the title of the image
                </DialogContentText>
            </DialogContent>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container sx={{ display: 'grid', gap: 2 }}>
                        <TextField
                            name="title"
                            type="text"
                            label="Title"
                            variant="outlined"
                            size="small"
                            fullWidth
                            error={formik.errors.title}
                            helperText={formik.errors.title}
                            value={formik.values.title}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
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
                        <Button variant="outlined" type='submit' disabled={!isEmptyObject(formik.errors)}>
                            ADD
                        </Button>
                    </Grid>
                </form>
                <Box className="custom-scroll-bar" sx={{ maxHeight: '20rem', mt: 2, overflowY: 'auto', overflowX: 'hidden' }}>
                    {images?.map((img, i) => {
                        return <Box sx={{ border: '1px solid lightgray', borderRadius: '0.5rem', my: 0.4, mx: 0.5, width: '96%' }}>
                            <Grid container spacing={2} >
                                <Grid item xs={2}><Avatar alt="url photo" src={img.url} /></Grid>
                                <Grid item xs={8}><Typography sx={{ overflow: 'hidden' }}>{img.url}</Typography></Grid>
                                <Grid item xs={2}><DeleteIcon onClick={() => handleRemoveImage(img)} size="small" title="remove image" /></Grid>
                            </Grid>
                        </Box>
                    })}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Done
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UploadPhotos