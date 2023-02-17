import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Alert, Box, CircularProgress, TextField } from '@mui/material';
import RenderServerErrorMessage from '../../../components/RenderServerErrorMessage';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useAddCategoryMutation, useUpdateCategoryMutation } from '../../../features/api/propertyApiService';
import isEmptyObject from '../../../utils/isEmptyObject';

export default function CategoryFormDialog({ open, setOpen, edit, refetch }) {
    const [addCategory, { isLoading, isError, error, isSuccess }] = useAddCategoryMutation()
    const [updateCategory, { isLoading: isUpdateLoading, isError: isUpdateError, error: updateError, isSuccess: isUpdateSucecess }] = useUpdateCategoryMutation()

    const [isEditing, setIsEditing] = React.useState(edit)
    const [id] = React.useState('')

    const handleClose = () => {
        setOpen(false);
    };


    function newItem() {
        setIsEditing(false)
        formik.resetForm()
    }


    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('The input field is Required')
                .min(3, 'Text must be more than 3 characters')
                .max(15, 'Text must not exceed 15 characters')
        }),

        onSubmit: async (values, { setSubmitting }) => {
            if (isEditing) {
                await updateCategory({ ...values, id });
            } else {
                await addCategory({ ...values });
            }

            setSubmitting(false);

        },
    })


    React.useEffect(() => {
        if (isSuccess || isUpdateSucecess) {
            refetch()
            handleClose()
        }

        return () => {
            formik.resetForm()
        }

        //eslint-disable-next-line
    }, [isSuccess, isUpdateSucecess])


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Add New Category
            </DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        sx={{ mt: 4 }}
                        name="title"
                        type="text"
                        label="Title"
                        placeholder="Category Title or Name"
                        variant="outlined"
                        fullWidth
                        error={formik.errors.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        helperText={formik.errors.title}
                    />
                    {
                        isSuccess && <Alert severity="success" sx={{ mt: 4 }}>Category Added Succesfully</Alert>
                    }
                    {
                        isError && <RenderServerErrorMessage error={error} />
                    }
                    {
                        isUpdateSucecess && <Alert severity="success" sx={{ mt: 4 }}>Category Updated Succesfully</Alert>
                    }
                    {
                        isUpdateError && <RenderServerErrorMessage error={updateError} />
                    }
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            color="primary"
                            variant="contained"
                            disabled={!isEmptyObject(formik.errors) || isLoading}
                            type="submit"
                            sx={{ mt: 1, minWidth: '10rem' }}
                        >
                            {isLoading || isUpdateLoading ? (
                                <CircularProgress size={20} color="secondary" />
                            ) : (
                                isEditing ? 'Update Category' : 'Add Category'
                            )}
                        </Button>
                        {
                            isEditing &&
                            <Button
                                sx={{ mt: 1, maxWidth: '2rem', ml: 0.2 }}
                                color="primary"
                                variant="outlined"
                                size='small'
                                onClick={() => newItem()}
                            >
                                New
                            </Button>
                        }
                    </Box>
                </form>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}