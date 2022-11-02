import { Container, Stack } from '@mui/material'
import React, { useState } from 'react'
import SearchProperties from "./components/SearchProperties"
import PropertiesList from './components/PropertiesList'
import Page from "../../components/Page.js"
import { PropertyFilterSidebar, PropertySort } from './components/properties'


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
        
    </Container>
    </Page>
  )
}

export default Properties;