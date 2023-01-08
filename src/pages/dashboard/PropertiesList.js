// material
import { Button, Box, CircularProgress, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import {  PropertyList } from './properties';

import { Link as RouterLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useGetPropertiesQuery } from '../../features/api/propertyApiService';

// ----------------------------------------------------------------------

export default function PropertiesList() {
  const { data, refetch, isLoading, isError } = useGetPropertiesQuery();
  const properties = data ? data.properties : null;

  
  /* const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  }; */

  return (
    <Page title="Dashboard: Properties">

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{fontWeight:{xs:600}, fontSize:{xs:'1.35rem'}}}>
            Properties
          </Typography>
          <Button variant="contained" component={RouterLink} to="/dashboard/add-property" startIcon={<AddIcon />}>
            Add Property
          </Button>
        </Stack>
        {
          isLoading ? (<Box sx={{ display: 'grid', justifyContent: 'center' }}>
            <Box sx={{ display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
              <CircularProgress />
              <Typography>LOADING PROPERTIES</Typography>
            </Box>
          </Box>
          ) : isError ? (
            <Box sx={{ display: 'grid', justifyContent: 'center' }}>
              <Box>
                <Typography variant='h4'>An Error Occured: Please refresh page</Typography>
              </Box>
            </Box>
          ) : <>
            {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
              <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <PropertyFilterSidebar
                  isOpenFilter={openFilter}
                  onOpenFilter={handleOpenFilter}
                  onCloseFilter={handleCloseFilter}
                />
                <PropertySort />
              </Stack>
            </Stack>  */}

            <PropertyList properties={properties} refetch={refetch} />
            {/* <PropertyCartWidget /> */}
          </>
        }
      </Container>
    </Page>
  );
}
