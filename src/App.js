import { Box } from "@mui/material";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme, ThemeProvider } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const theme = useTheme();

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
