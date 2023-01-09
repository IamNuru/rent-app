import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
// material
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
//
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShowItemIfAllowed from '../helpers/ShowItemIfAllowed';

// ----------------------------------------------------------------------

const ListItemStyle ={
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: 'gray',
  borderRadius: 5,
};

const ListItemIconStyle ={
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func,
};

function NavItem({ item, active }) {

  const isActiveRoot = active(item.path);

  const { title, path, icon, info, children } = item;

  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: 'rgb(32, 101, 209)',
    fontWeight: '600',
    bgcolor: 'rgba(32, 101, 209, 0.08)',
  };

  const activeSubStyle = {
    color: 'rgb(32, 101, 209)',
    fontWeight: '600',
  };

  if (children) {
    return (
      <>
        <ListItemButton style={ListItemStyle}
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >
          <ListItemIcon style={ListItemIconStyle}>{icon && icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          {info && info}
          {

            open ? <KeyboardArrowDownIcon sx={{ width: 16, height: 16, ml: 1 }} />
            :
            <ArrowForwardIosIcon sx={{ width: 16, height: 16, ml: 1 }} />
          }
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const { title, path } = item;
              const isActiveSub = active(path);

              return (
                <ListItemButton style={ListItemStyle}
                  key={title}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                  }}
                >
                  <ListItemIcon style={ListItemIconStyle}>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'text.disabled',
                        /* transition: (theme) => theme.transitions.create('transform'), */
                        ...(isActiveSub && {
                          transform: 'scale(2)',
                          bgcolor: 'primary.main',
                        }),
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText disableTypography primary={title} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemButton style={ListItemStyle}
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIcon style={ListItemIconStyle}>{icon && icon}</ListItemIcon>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemButton>
  );
}

NavSection.propTypes = {
  navConfig: PropTypes.array,
};

export default function NavSection({ navConfig, ...other }) {
  const { pathname } = useLocation();

  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item, index) => (
          <ShowItemIfAllowed type={item.allowed} allowedItems={item.allowed} key={index}>
            <NavItem item={item} active={match} />
          </ShowItemIfAllowed>
        ))}
      </List>
    </Box>
  );
}
