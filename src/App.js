import { Box } from "@mui/material";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme, ThemeProvider } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAuthUserQuery } from "./features/api/apiService";
import { authActions } from "./redux/slices/authSlice";

const App = () => {
  const theme = useTheme();
  const dispatch = useDispatch()

  const { isSuccess, data, isLoading, isError, isFetching } = useGetAuthUserQuery();

  if (isLoading || isFetching) {
    console.log('is loading')
  }

  if (isSuccess) {
    console.log(data)
    dispatch(authActions.login(data))
  }

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
