import { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import ReportIcon from "@mui/icons-material/Report";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./styles/auth-ui.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import isEmptyObject from "../../utils/isEmptyObject";
import Page from "../../components/Page.js"


import { useIsTabletScreen } from "../../hooks/useMediaScreens";
import { useDispatch, useSelector } from "react-redux"
import { register, clearErrorMessages } from '../../store/actions/authActions';

const Register = () => {

  const navigate = useNavigate()

  const tablet = useIsTabletScreen();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ui.registerLoading);

  const authState = useSelector((state) => state.auth)



  /* using formik */
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
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
      dispatch(register(credentials));
      setSubmitting(false);
    },
  });

  

  //redirect to home if logged in
  useEffect(() => {
    if (authState.isAuthenticated && authState.token !== '' && !isEmptyObject(authState.user)) {
      navigate('/')
    }

    return () => {
      clearErrorMessages()
    }
    // eslint-disable-next-line
  }, [authState])



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
          {formik.isSubmitting || loading ? (
            <Alert severity="success" color="success">
              Creating account, Please wait...
            </Alert>
          ) : formik.isValid ? (
            <>
              {
                authState.errorMessage ?
                  <Alert severity="error" color="error">
                    {authState.errorMessage}
                  </Alert>
                  : 
                  <Alert severity="success" color="success">
                    Successfully Register. redirecting...
                  </Alert>
              }
            </>
          ) : (
            <Alert severity="error" color="error">
              Invalid credentials
            </Alert>
          )}
          {formik.touched && formik.errors && !isEmptyObject(formik.errors) ? (
            <List style={{ paddingTop: 0 }}>
              {Object.keys(formik.errors).map(function (value, index) {
                return (
                  <Slide key={index} in={true} direction="down" mountOnEnter unmountOnExit>
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
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="LastName (optional)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="phoneNumber"
                  type="text"
                  label="Phone Number"
                  placeholder="+233543027058"
                  size="small"
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                />
              </Grid>
            </Grid>
            <Grid container item spacing={tablet ? 2 : 1}>
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: 600 }}>Login Credentials</Typography>
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
            disabled={!isEmptyObject(formik.errors) || loading}
            type="submit"
          >
            {formik.isSubmitting || loading ? (
              <CircularProgress size={30} color="primary" />
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
