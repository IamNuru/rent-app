import { Container } from '@mui/material'
import React from 'react'
import SearchProperties from "./components/SearchProperties"
import SortingProperties from "./components/SortingProperties"
import FilterProperties from "./components/FilterProperties"
import PropertiesList from "./components/PropertiesList"

const Properties = () => {
  return (
    <Container>
        <SearchProperties />
        <SortingProperties />
        <FilterProperties />
        <PropertiesList />
    </Container>
  )
}

export default Properties;