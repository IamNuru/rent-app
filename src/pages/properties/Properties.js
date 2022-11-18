import { Container, Stack } from '@mui/material'
import React, { useState } from 'react'
import SearchProperties from "./components/SearchProperties"
import PropertiesList from './components/PropertiesList'
import Page from "../../components/Page.js"
import { PropertyFilterSidebar, PropertySort } from './components/properties'
import ourProperties from '../../_mock/ourProperties'
import EmptyList from '../../components/EmptyList'


const Properties = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="List of Properties">
      <Container>
        {
          ourProperties?.length > 0 ? (
            <>
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
              <PropertiesList />
            </>
          ) : (
        <EmptyList title="No Properties" description="Sorry, There are 0 properties now" />
        )
      }


      </Container>
    </Page>
  )
}

export default Properties;