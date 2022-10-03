import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
  InputAdornment,
  Alert,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Slide,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import ReportIcon from "@mui/icons-material/Report";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./styles/auth-ui.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import isEmptyObject from "../../utils/isEmptyObject";
import Page from "../../components/Page.js"


/* import { useRegisterUserMutation } from "../../slices/apiSlice"; */
import { useIsTabletScreen } from "../../hooks/useMediaScreens";

const Register = () => {
  const tablet = useIsTabletScreen();
  /* const [registerUser] = useRegisterUserMutation(); */
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  
  
  /* using formik */
  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      username: "",
      email: "",
      phone: "",
      password: "",
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
      phone: Yup.string()
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
  });

  return (
    <Page title="Create an Account" className="wrap-auth-ui">
      <form onSubmit={formik.handleSubmit}>
        <Box className="form-wrapper">
          <Typography component="div" className="auth-ui-title">
            <PersonOutlineOutlinedIcon />
            <Typography variant="h6" component="h6">
              REGISTER
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
          {formik.touched && formik.errors && !isEmptyObject(formik.errors) ? (
            <List style={{ paddingTop: 0 }}>
              {Object.keys(formik.errors).map(function (value) {
                return (
                  <Slide in={true} direction="down" mountOnEnter unmountOnExit>
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
                      <ListItemText
                        primary={formik.errors[value]}
                        style={{ margin: 0 }}
                      />
                    </ListItem>
                  </Slide>
                );
              })}
            </List>
          ) : null}
          <Grid container spacing={3.5}>
            <Grid container item spacing={tablet ? 2 : 1}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="surname"
                  type="text"
                  label="Surname"
                  placeholder="Surname (optional)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.surname}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="youremail@email.com"
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="phone"
                  type="text"
                  label="Phone Number"
                  placeholder="+233543027058"
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
              </Grid>
            </Grid>
            <Grid container item spacing={tablet ? 2 : 1}>
              <Grid item xs={12}>
                <Typography sx={{fontWeight:600}}>Login Credentials</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="username"
                  type="text"
                  label="Username"
                  placeholder="Username"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="password"
                  label="Password"
                  placeholder="Password"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Button
            color="primary"
            variant="contained"
            disabled={!isEmptyObject(formik.errors)}
            type="submit"
          >
            {formik.isSubmitting ? (
              <CircularProgress size={30} color="secondary" />
            ) : (
              "Register"
            )}
          </Button>
        </Box>
        <Typography
          align="center"
          sx={{ p: 4, fontSize: "1rem", color: "#979494" }}
        >
          Already have an account?. Click on <Link to="/login">Login</Link> to
          log into you account.
        </Typography>
      </form>
    </Page>
  );
};

export default Register;
