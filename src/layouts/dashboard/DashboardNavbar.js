import PropTypes from "prop-types";
// material
import { Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
// components
//
import Searchbar from "./Searchbar";
import AccountPopover from "./AccountPopover";
import NotificationsPopover from "./NotificationsPopover";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = {
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: 'rgba(249, 250, 251, 0.72)',
};

const ToolbarStyle = {
  minHeight: APPBAR_MOBILE,
};

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {
  return (
    <AppBar
      style={RootStyle}
      sx={{ width: { lg: `calc(100% - ${DRAWER_WIDTH + 1}px)` } }}
    >
      <Toolbar
        style={ToolbarStyle}
        sx={{ lg: { minHeight: APPBAR_DESKTOP, padding: 5 } }}
      >
        <IconButton
          onClick={onOpenSidebar}
          sx={{ mr: 1, color: "text.primary", display: { lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
