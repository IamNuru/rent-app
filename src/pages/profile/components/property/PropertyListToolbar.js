import PropTypes from 'prop-types';
// material
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Alert, CircularProgress } from '@mui/material';
import { Search } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useDeletePropertyMutation, useGetMyPropertiesQuery, useGetSelectedPropertiesQuery } from '../../../../features/api/propertyApiService';
import { useSelector } from 'react-redux';



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

PropertyListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
  selectedIds: PropTypes.array,
};

export default function PropertyListToolbar({ numSelected, filterName, onFilterName, setSelectedIds, selectedIds, refetch }) {
  const [deleteProperty, { isLoading}] = useDeletePropertyMutation()
  const { data, isLoading: Ploading } = useGetSelectedPropertiesQuery(selectedIds);
  const { token } = useSelector((state) => state.auth)
  useGetMyPropertiesQuery(token);

  const properties = data ? data.properties || data.property : null;
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    if (selectedIds.length < 0) {
      alert('Check properties you want to delete')
    } else {
      setOpen(true);
    }
  }

  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirmDelete = () => {
    deleteProperty(selectedIds)
    refetch(token);
    setSelectedIds([])
    setOpen(false);

  };



  return (
    <>
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
            placeholder="Search properties..."
            size='small'
            startAdornment={
              <InputAdornment position="start">
                <Search sx={{ color: 'text.disabled', width: 20, height: 20 }} />
              </InputAdornment>
            }
          />
        )}

        {numSelected > 0 && (
          <Tooltip title="Delete" onClick={handleDelete}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )
        }
      </Toolbar>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            You are about to Delete the following Properties
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {
                Ploading ? <span>Loading</span> : (
                  properties?.length > 1 ? (
                    properties.map((p) => {
                      return <Alert severity='warning' key={p.id} sx={{ mb: 1 }}>{p.title}</Alert>
                    })
                  ) : properties !== null ? (
                    <Alert severity='warning' sx={{ mb: 1 }}>{properties.title}</Alert>
                  ) : ('No properties selected')
                )
              }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleConfirmDelete} disabled={isLoading} autoFocus>
              {
                isLoading ? (
                  <CircularProgress size={30} color="secondary" />
                )
                  :
                  'Confirm'
              }
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    </>
  );
}
