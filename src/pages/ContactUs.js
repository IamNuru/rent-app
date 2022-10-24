import Page from "../components/Page";
import MakeRequest from "../components/MakeRequest";
import isEmptyObject from "../utils/isEmptyObject";
import SendIcon from '@mui/icons-material/Send';

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Alert,
  Grid,
  Typography
} from "@mui/material";

export default function ContactUs() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  /* using formik */
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is required.")
        .min(2, "First Name must be more than 2 characters."),
      lastName: Yup.string().min(
        2,
        "Last Name must be more than 2 characters."
      ),
      email: Yup.string().email().required("Email is required."),
      message: Yup.string().required("Provid shor mssag."),
      phone: Yup.string()
        .min(9, "Phone Number should not be less than 9")
        .max(16, "Phone Number should not be more than 16")
        .matches(phoneRegExp, "Phone number is not valid"),
    }),

    onSubmit: async (credentials, { setSubmitting }) => {
      /* await registerUser(credentials); */
      setSubmitting(false);
    },
  });
  return (
    <Page title="Rentgh | Contact Us" style={{ marginBottom: "4rem" }}>
      <Box sx={{ maxWidth: "45rem", mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: 600, mt: 2, mb: 6, textAlign: "center" }}
        >
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ my: 2 }}>
          In case of any inquiries or questions you can fill out the form below
          and one of our representatives will contact you soon.
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Box className="form-wapper" sx={{ mx: "auto", mb: 6, mt: 1 }}>
            <Typography component="div" className="auth-ui-title">
              <PersonOutlineOutlinedIcon />
              <Typography variant="h6" component="h6">
                Contact Us Now!
              </Typography>
            </Typography>
            {formik.isSubmitting ? (
              <Alert severity="success" color="success">
                processing .... please wait
              </Alert>
            ) : formik.isValid ? (
              <Alert severity="success" color="success">
                Successfully Register. redirecting...
              </Alert>
            ) : (
              <Alert severity="error" color="error">
                Invalid credentials
              </Alert>
            )}

            <Grid container item spacing={2} sx={{ mt: 0.5 }}>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={formik.touched.firstName && formik.errors.firstName}
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  variant="outlined"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  helperText={
                    formik.errors.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={formik.touched.email && formik.errors.email}
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="youremail@email.com"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  helperText={formik.errors.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={formik.touched.phone && formik.errors.phone}
                  name="phone"
                  type="text"
                  label="Phone Number"
                  placeholder="+233543027058"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  helperText={formik.errors.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={formik.touched.message && formik.errors.message}
                  name="message"
                  label="message"
                  placeholder="wrimessage"
                  fullWidth
                  multiline
                  rows={4}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  helperText={formik.errors.message && formik.errors.message}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                size="large"
                  color="primary"
                  variant="contained"
                  disabled={!isEmptyObject(formik.errors)}
                  type="submit"
                  fullWidth
                  endIcon={<SendIcon />}
                >
                  {formik.isSubmitting ? (
                    <CircularProgress size={30} color="secondary" />
                  ) : (
                    "Send"
                  )}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>

        <MakeRequest />
      </Box>
    </Page>
  );
}
