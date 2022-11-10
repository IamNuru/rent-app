import { Container, Stack } from '@mui/material'
import { useState } from 'react'
import Page from '../../components/Page'
import { PropertyFilterSidebar, PropertySort } from '../properties/components/properties'
import SearchProperties from '../properties/components/SearchProperties'
import RequestLists from './RequestLists'


const Requests = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };


  return (
    <Page title="Rentgh | Requests">
    <Container>
    <SearchProperties />
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end">
          <Stack direction="row" spacing={1} flexShrink={0}>
            <PropertyFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <PropertySort />
          </Stack>
        </Stack>

        <RequestLists />
    </Container>
    </Page>
  )
}

export default Requests