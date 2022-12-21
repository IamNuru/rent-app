import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { Box, Link, Drawer, Typography, Avatar } from '@mui/material';

import { useIsLargeScreen } from '../../hooks/useMediaScreens';
// components
import Logo from '../../components/Logo';
import NavSection from '../../components/NavSection';
//
import navConfig from './NavConfig';
import { useSelector } from 'react-redux'
import { titleCase } from 'change-case-all'

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;


const AccountStyle = {
  display: 'flex',
  alignItems: 'center',
  /* padding: theme.spacing(2, 2.5), */
  borderRadius: 1.5,
  backgroundColor: 'gray',
};

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const account = useSelector((state) => state.auth.user);
  const { pathname } = useLocation();

  const isDesktop = useIsLargeScreen();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Box
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }
      }
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <Box style={AccountStyle}>
            <Avatar src={account?.photo} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'white' }}>
                {titleCase(account?.first_name +' ' + account?.last_name)}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                {account?.type}
              </Typography>
            </Box>
          </Box>
        </Link>
      </Box>

      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />


    </Box>
  );

  return (
    <Box sx={{ flexShrink: { lg: 0 }, width: { lg: DRAWER_WIDTH } }}>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
