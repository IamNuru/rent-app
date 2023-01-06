import PropTypes from 'prop-types';
// material
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Alert, CircularProgress } from '@mui/material';
import { Search } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useDeleteRequestMutation, useGetSelectedRequestsQuery } from '../../../../features/api/requestApiService';
import {  useSelector } from 'react-redux';



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

RequestListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
  selectedIds: PropTypes.array,
};

export default function RequestListToolbar({ numSelected, filterName, onFilterName, setSelectedIds, selectedIds, refetch }) {
  const [deleteRequest, { isLoading }] = useDeleteRequestMutation()
  const { data, isLoading: Ploading } = useGetSelectedRequestsQuery(selectedIds?.length > 0 ? selectedIds : 0);
  const { token } = useSelector((state) => state.auth)

  const requests = data ? data.requests || data.request : null;
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    if (selectedIds.length < 0) {
      alert('Check requests you want to delete')
    } else {
      setOpen(true);
    }
  }

  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirmDelete = async () => {
   await deleteRequest(selectedIds)
   await refetch(token);
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
            placeholder="Search requests..."
            size='small'
            startAdornment={
              <InputAdornment position="start">
                <Search sx={{ color: 'text.disabled', width: 20, height: 20 }} />
              </InputAdornment>
            }
          />
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete" onClick={handleDelete}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list" onClick={handleDelete}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            You are about to Delete the following Requests
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {
                Ploading ? <span>Loading</span> : (
                  requests?.length > 1 ? (
                    requests.map((p) => {
                      return <Alert severity='warning' key={p.id} sx={{ mb: 1 }}>{p.title}</Alert>
                    })
                  ) : requests !== null ? (
                    <Alert severity='warning' sx={{ mb: 1 }}>{requests.title}</Alert>
                  ) : (<span>No requests selected</span>)
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
