import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme, ThemeProvider } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import { useGetAuthUserQuery } from "./features/api/userApiService";
import { useDispatch } from "react-redux";
import { authActions } from "./redux/slices/authSlice";
import { Suspense, useEffect, lazy } from "react";
import SuspenseFallback from "./components/SuspenseFallback";


const AppRoutes = lazy(() => import('./AppRoutes'));

const App = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isSuccess, data } = useGetAuthUserQuery();


  useEffect(() => {

    if (isSuccess) {
      dispatch(authActions.login(data))
    }

    // eslint-disable-next-line
  }, [isSuccess])



  /* if(!isLoading && isError){
    if(error.status === 401){
      dispatch(authActions.logout())
    }
  } */

  

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Box>
          <Suspense fallback={<SuspenseFallback />}>
            <AppRoutes />
          </Suspense>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
