import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText, CircularProgress, Snackbar, Alert } from '@mui/material';
// component
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteTenantMutation } from '../../../../features/api/apiService';

// ----------------------------------------------------------------------

export default function TenantMoreMenu({ id, refetch }) {
  const [deleteTenant, { isLoading, isSuccess }] = useDeleteTenantMutation()
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    setOpen(false)
    await deleteTenant(id);
    setOpen(true)
    setIsOpen(false)
  }

  useEffect(() => {
    if(isSuccess){
      refetch()
    }

    // eslint-disable-next-line
  }, [isSuccess])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    
    setOpen(false);
  };
  

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <AddIcon sx={{ width: 20, height: 20 }} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }}>
          {
            isLoading ? (<CircularProgress />) : (
              <ListItemIcon onClick={handleDelete}>
                <DeleteIcon sx={{ width: 20, height: 20 }} />
              </ListItemIcon>
            )
          }
          <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem component={RouterLink} to={`/dashboard/edit-tenant/${id}`} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <EditIcon sx={{ width: 20, height: 20 }} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'bottom', horizontal:'right'}}>
        <Alert severity={isSuccess ? "success" : 'error'} sx={{ width: '100%' }}>
          {isSuccess ? 'Tenant Deleted Successfully' : 'An error occured'}
        </Alert>
      </Snackbar>
    </>
  );
}
