import { Outlet } from "react-router-dom";
// material
import { Box } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";

// ----------------------------------------------------------------------

export default function AppLayout() {
  return (
    <Box>
      <Header />
      <Box style={{marginTop:'1rem'}}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
