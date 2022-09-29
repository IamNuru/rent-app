import { Container } from '@mui/material'
import React from 'react'
import SearchProperties from "./components/SearchProperties"
import Filters from "./components/filters/Filters"
import PropertiesList from './components/PropertiesList'

const Properties = () => {
  return (
    <Container>
        <SearchProperties />
        <Filters />
        <PropertiesList />
    </Container>
  )
}

export default Properties;