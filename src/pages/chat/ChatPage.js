import { Container } from '@mui/material'
import React from 'react'
import Page from '../../components/Page'
import ChatBox from './ChatBox'

const ChatPage = () => {
  return (
    <Page title="Chatting with username">
        <Container sx={{backgroundColor: 'black'}}>
            <Box>
                <ChatBox />
            </Box>
        </Container>
    </Page>
  )
}

export default ChatPage