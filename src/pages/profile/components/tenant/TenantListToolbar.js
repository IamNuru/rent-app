import PropTypes from 'prop-types';
// material
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';



// ----------------------------------------------------------------------

const RootStyle = {
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px 1px 0px 3px',
};

const SearchStyle = {
  width: 340,
  /* transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }), */
  /* '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 }, */
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `gray !important`,
  },
};

// ----------------------------------------------------------------------

UserListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

export default function UserListToolbar({ numSelected, filterName, onFilterName }) {
  return (
    <Toolbar style={RootStyle}
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <OutlinedInput style={SearchStyle}
          value={filterName}
          onChange={onFilterName}
          placeholder="Search tenant..."
          size='small'
          startAdornment={
            <InputAdornment position="start">
              <Search sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
