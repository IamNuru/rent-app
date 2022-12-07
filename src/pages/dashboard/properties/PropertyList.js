import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import RentPropertyCard from './PropertyCard';

// ----------------------------------------------------------------------

PropertyList.propTypes = {
  properties: PropTypes.array.isRequired
};

export default function PropertyList({ properties, refetch, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {properties?.map((property) => (
        <Grid key={property.id} item xs={12} sm={6} md={3}>
          <RentPropertyCard property={property} refetch={refetch} />
        </Grid>
      ))}
    </Grid>
  );
}
