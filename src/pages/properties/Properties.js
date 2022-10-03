import { Container } from '@mui/material'
import React from 'react'
import SearchProperties from "./components/SearchProperties"
import Filters from "./components/filters/Filters"
import PropertiesList from './components/PropertiesList'
import Page from "../../components/Page.js"


const Properties = () => {
  return (
    <Page title="List of Properties">
    <Container>
        <SearchProperties />
        <Filters />
        <PropertiesList />
    </Container>
    </Page>
  )
}

export default Properties;