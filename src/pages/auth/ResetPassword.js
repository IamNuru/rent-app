import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  Alert,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import "./styles/login.css";
import isEmptyObject from "../../utils/isEmptyObject";

/* import { useResetPasswordUserMutation } from "../../slices/apiSlice"; */

const ResetPassword = () => {
  /* const [ResetPasswordUser] = useResetPasswordUserMutation(); */

  /* using formik */
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email()
        .required("Email is required"),
    }),

    onSubmit: async (credentials, { setSubmitting }) => {
      /* await ResetPasswordUser(credentials); */
      setSubmitting(false);
    },
  });

  return (
    <div className="wrap-login-form">
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            py: 2,
            display: "grid",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
            width: "28rem",
            padding: "1.2rem 4rem 3rem",
            borderRadius: "4px",
          }}
        >
          <Typography component="div" className="ResetPassword-title">
            <Typography variant="h6" component="h6">
              ResetPassword
            </Typography>
          </Typography>
          {formik.isSubmitting ? (
            <Alert severity="success" color="success">
              processing .... please wait
            </Alert>
          ) : formik.isValid ? (
            <Alert severity="success" color="success">
              Password reset link has been sent to your email
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
                      <ListItemText
                        primary={formik.errors[value]}
                        style={{ margin: 0 }}
                      />
                    </ListItem>
                );
              })}
            </List>
          ) : null}
          <TextField
            name="email"
            type="email"
            label="Your Email"
            placeholder="Your Email"
            variant="outlined"
            size="small"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          <Button
            color="primary"
            variant="contained"
            disabled={!isEmptyObject(formik.errors)}
            type="submit"
            endIcon={<SendIcon />}
          >
            {formik.isSubmitting ? (
              <CircularProgress size={30} color="secondary" />
            ) : (
              "Send Password Reset Link"
            )}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default ResetPassword;
