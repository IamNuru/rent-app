import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Filters from './Filters';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function FilterBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const [anchorEl, setAnchorEl] = React.useState(null);
  

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

/*   const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }; */

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

/*   const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }; */

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
    anchor='right'
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    </Menu>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Filter
      </Typography>
      <Divider />
     <Filters />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position="static" color="transparent" 
      sx={{ ml:'auto', width:'100px', py:'2px', px:'4px' }} elevation={0}>
        <Toolbar sx={{p:0}}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Filter
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box component="nav">
        <Drawer
          anchor='right'
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p:2, mb:4 }}>
      </Box>
    </Box>
  );
}
