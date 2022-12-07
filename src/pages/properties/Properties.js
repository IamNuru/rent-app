import { Container, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchProperties from "./components/SearchProperties"
import PropertiesList from './components/PropertiesList'
import Page from "../../components/Page.js"
import { PropertyFilterSidebar, PropertySort } from './components/properties'
import EmptyList from '../../components/EmptyList'
import { useDispatch, useSelector } from 'react-redux'
import { propertyActions } from '../../redux/slices/propertySlice'
import { useGetPaginatedPropertiesQuery } from '../../features/api/propertyApiService'


const Properties = () => {
  const [page, setPage] = useState(1)
  const { data, refetch, isLoading, isFetching, isError, error, isSuccess } = useGetPaginatedPropertiesQuery(page);

  const { properties, filteredProperties } = useSelector((state) => state.properties);
  const items = filteredProperties ? filteredProperties : properties ? properties : null;
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useDispatch();

  const d = data?.properties ? data?.properties : null;




  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(propertyActions.properties(data?.properties?.data))
    }

    // eslint-disable-next-line
  }, [isSuccess])

  useEffect(() => {
    if (page) {
      refetch(page)
    }
    // eslint-disable-next-line
  }, [page])


  return (
    <Page title="List of Properties">
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
        {

          isLoading ? <>
            <EmptyList title="Loading Data " description="We are loading your data. Please wait" />
          </> : isFetching ? <>
            <EmptyList title="Fetching Requests" description="We are Fetching your data. Please wait" />
          </> : isError ? <>
            <EmptyList title="An Error Occured"
              description={error.status === 'FETCH_ERROR' ? 'Failed to fetch data' : 'Something went wrong... Refresh Page'} />
          </> :
            items?.length > 0 ? (

              <PropertiesList properties={items} setPage={setPage} page={page} data={d} />

            ) : (
              <EmptyList title="No Properties" description="Sorry, There are 0 properties now" />
            )
        }


      </Container>
    </Page>
  )
}

export default Properties;