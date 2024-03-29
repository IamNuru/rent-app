import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText, CircularProgress } from '@mui/material';
// component
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteCategoryMutation } from '../../../features/api/propertyApiService';

// ----------------------------------------------------------------------

export default function UserMoreMenu({id, refetch}) {
  const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    await deleteCategory(id);
    refetch()
  }


  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <AddIcon sx={{width:20, height:20}} />
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
        {
          isLoading ? (<CircularProgress size={20} />) :
            (
              <MenuItem sx={{ color: 'text.secondary', cursor:'pointer' }} onClick={handleDelete}>
                <ListItemIcon>
                  <DeleteIcon sx={{ width: 20, height: 20 }} />
                </ListItemIcon>
                <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
              </MenuItem>
            )
        }

        <MenuItem component={RouterLink} to={`/dashboard/edit-property/${id}`} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <EditIcon sx={{width:20, height:20}} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
