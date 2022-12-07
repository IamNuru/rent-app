import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Box, Card, Link, Typography, Stack, CircularProgress } from '@mui/material';
/* import { styled } from '@mui/material/styles'; */
// utils
/* import { fCurrency } from '../../../utils/formatNumber'; */
// components
/* import Label from '../../../components/Label'; */
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeletePropertyMutation } from '../../../features/api/apiService';

// ----------------------------------------------------------------------

const PropertyImgStyle = {
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
};

// ----------------------------------------------------------------------

RentPropertyCard.propTypes = {
  property: PropTypes.object,
};

export default function RentPropertyCard({ property, refetch }) {
  const { id, slug, title, imageslist, type, price } = property;
  const [deleteProperty, { isLoading }] = useDeletePropertyMutation()
  const noImage = '/static/no-post-image.jpg'

  const handleDelete = async () => {
    await deleteProperty(id);
    refetch()
  }

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {type && (
          <Typography
            variant="filled"
            color={(type === 'rent' && 'error') || 'primary'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {'For ' + type}
          </Typography>
        )}
        <img style={PropertyImgStyle} alt={title} src={imageslist?.length > 0 ? imageslist[0].url : noImage} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to={`/property/${id}/${slug}`} color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/*<ColorPreview colors={colors} />*/}
          <Typography variant="subtitle1">
            {/* <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {price && (priceSale)}
            </Typography>
            &nbsp; */}
            {price}
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="right" justifyContent="center" sx={{mb:2, mx:1}}>

        {
          isLoading ? (<CircularProgress />) : (
            <Button size='small' variant='outlined' startIcon={<DeleteIcon />} onClick={handleDelete}>
              Delete
            </Button>
          )
        }
        <Box sx={{px:2}}></Box>
        <Button size='small' variant='outlined' startIcon={<EditIcon />} component={RouterLink} to={`/dashboard/edit-property/${id}`}>
          Edit
        </Button>
      </Stack>
    </Card>
  );
}
