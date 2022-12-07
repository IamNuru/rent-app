import { Grid, Paper } from '@mui/material'
import React from 'react'
import ChatBody from './components/ChatBody'
import ChatFooter from './components/ChatFooter'
import ChatHeader from './components/ChatHeader'
import './style.css'

const ChatBox = () => {
  return (
    <Paper elevation={5} sx={{mx:'auto', width:{xs:'100%', sm:'35rem', md:'40rem'}}}>
        <Grid container spacing={2}>
            <Grid item xs={12}><ChatHeader /></Grid>
            <Grid item xs={12} className='chat-body'><ChatBody /></Grid>
            <Grid item xs={12}><ChatFooter /></Grid>
        </Grid>
    </Paper>
  )
}

export default ChatBox