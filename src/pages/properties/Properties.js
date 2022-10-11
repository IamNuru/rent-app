import { Container } from '@mui/material'
import React from 'react'
import SearchProperties from "./components/SearchProperties"
import PropertiesList from './components/PropertiesList'
import Page from "../../components/Page.js"
import FilterBar from './components/filters/FilterBar'


const Properties = () => {
  return (
    <Page title="List of Properties">
    <Container>
        <SearchProperties />
        <FilterBar />
        <PropertiesList />
    </Container>
    </Page>
  )
}

export default Properties;