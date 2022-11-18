import { Box } from "@mui/material";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme, ThemeProvider } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthenticatedUser, logout } from "./store/actions/authActions";

const App = () => {
  const theme = useTheme();
  const dispatch = useDispatch()

  
  const token = window.localStorage.getItem('token');
  useEffect(() => {
    if (token){
      dispatch(getAuthenticatedUser(token))
    }

    // eslint-disable-next-line
  }, [token])
  

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Box>
          <AppRoutes />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
