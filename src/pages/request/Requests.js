import { Container, Stack } from '@mui/material'
import { useState } from 'react'
import EmptyList from '../../components/EmptyList'
import Page from '../../components/Page'
import { useGetPaginatedRequestsQuery } from '../../features/api/requestApiService'
import { PropertyFilterSidebar, PropertySort } from '../properties/components/properties'
import SearchProperties from '../properties/components/SearchProperties'
import RequestLists from './RequestLists'


const Requests = () => {
  const { data, isLoading, isError } = useGetPaginatedRequestsQuery();
  const requests = data ? data?.data : null;
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };


  return (
    <Page title="Rentgh | Requests">
      {
        isLoading ? <EmptyList type="loading" title="Loading Requests" description="Please Wait... We are loading list of Requests" />
          : isError ? <EmptyList title="Ooops !!!" description="Something went wrong" />
            : requests.length < 0 ? <EmptyList title="No Requests" description="There are no requests at the moment" />
              :
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

                <RequestLists requests={requests} />
              </Container>
      }
    </Page>
  )
}

export default Requests