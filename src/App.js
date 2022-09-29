import Header from "./layouts/header/Header";
import { Box } from "@mui/material";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme, ThemeProvider } from "@mui/material";

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box style={{ backgroundColor: "green" }}>
          <Header />
          <AppRoutes />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
