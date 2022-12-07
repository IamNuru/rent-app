import { useState } from 'react';
// material
import { Menu, Button, MenuItem, Typography } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { propertyActions } from '../../../../redux/slices/propertySlice';

// ----------------------------------------------------------------------

const SORT_BY_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' }
];

export default function PropertySort() {
  const [open, setOpen] = useState(null);
  const dispatch = useDispatch();


  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handlePropertySort = (value) => {
    if (value === 'newest') {
      dispatch(propertyActions.sortPropertiesByNewest());
      setOpen(null);

    }

    if (value === 'oldest') {
      dispatch(propertyActions.sortPropertiesByOldest());
      setOpen(null);

    }

    if (value === 'priceDesc') {
      dispatch(propertyActions.sortPropertiesByPriceHighToLow());
      setOpen(null);

    }

    if (value === 'priceAsc') {
      dispatch(propertyActions.sortPropertiesByPriceLowToHigh());
      setOpen(null);

    }


    setOpen(null);
  };

  return (
    <>
      <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        Sort By:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          Newest
        </Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            selected={option.value === 'newest'}
            onClick={() => handlePropertySort(option.value)}
            sx={{ typography: 'body2' }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
