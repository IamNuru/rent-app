import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { Box } from '@mui/material';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';



// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = {
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
};

const MainStyle = {
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: 10,
};

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <Box style={RootStyle} sx={{lg:{paddingTop: APP_BAR_DESKTOP + 24, paddingLeft:2, paddingRight:2}}}>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <Box style={MainStyle}>
        <Outlet />
      </Box>
    </Box>
  );
}
