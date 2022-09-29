import Header from "./layouts/header/Header";
import Container from "@mui/material/Container";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme, ThemeProvider } from "@mui/material";

const App = () => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Container maxWidth="lg">
        <Header />
        <AppRoutes />
      </Container>
    </Router>
    </ThemeProvider>
  );
};

export default App;
