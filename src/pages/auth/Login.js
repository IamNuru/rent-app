import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
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
} from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./styles/auth-ui.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import isEmptyObject from "../../utils/isEmptyObject";
import Page from "../../components/Page.js"


/* import { useLoginUserMutation } from "../../slices/apiSlice"; */

const Login = () => {
  /* const [loginUser] = useLoginUserMutation(); */
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  /* using formik */
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, "Username must be more than 2 characters")
        .required("Username is required"),
      password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum."),
    }),

    onSubmit: async (credentials, { setSubmitting }) => {
      /* await loginUser(credentials); */
      setSubmitting(false);
    },
  });

  return (
    <Page title="Login" className="wrap-auth-ui">
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            margin:{xs:"auto 2rem"}
          }}
          className="form-wrapper"
        >
          <Typography component="div" className="auth-ui-title">
            <PersonOutlineOutlinedIcon />
            <Typography variant="h6" component="h6">
              LOGIN
            </Typography>
          </Typography>
          {formik.isSubmitting ? (
            <Alert severity="success" color="success">
              processing .... please wait
            </Alert>
          ) : formik.isValid ? (
            <Alert severity="success" color="success">
              Successfully Login. redirecting...
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
          <TextField
            name="username"
            type="text"
            label="username"
            placeholder="username"
            variant="outlined"
            size="small"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />

          <TextField
            name="password"
            label="password"
            placeholder="password"
            variant="outlined"
            size="small"
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
          <Button
            color="primary"
            variant="contained"
            disabled={!isEmptyObject(formik.errors)}
            type="submit"
          >
            {formik.isSubmitting ? (
              <CircularProgress size={30} color="secondary" />
            ) : (
              "Login"
            )}
          </Button>
        </Box>
        <Typography align="center" sx={{p:2, fontSize: "1rem", color:'#979494'}}>
          Have you forgot your password?. Click on <Link to="/reset-password">Reset Password</Link> to reset your password.
        </Typography>
        <Typography align="center" sx={{fontSize: "1rem", color:'#979494'}}>
          You don't have account yet?. Click on <Link to="/register">Create account</Link> to register.
        </Typography>
      </form>
    </Page>
  );
};

export default Login;
