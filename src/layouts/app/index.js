import { Outlet } from "react-router-dom";
// material
import { Box } from "@mui/material";
import Header from "../header/Header";

// ----------------------------------------------------------------------

export default function AppLayout() {
  return (
    <Box>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}
