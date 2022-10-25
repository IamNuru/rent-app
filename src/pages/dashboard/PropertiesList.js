import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import { PropertySort, PropertyList, PropertyCartWidget, PropertyFilterSidebar } from './properties';
// mock
import properties from '../../_mock/properties';

// ----------------------------------------------------------------------

export default function PropertiesList() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="Dashboard: Properties">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Properties
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <PropertyFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <PropertySort />
          </Stack>
        </Stack>

        <PropertyList properties={properties} />
        <PropertyCartWidget />
      </Container>
    </Page>
  );
}
