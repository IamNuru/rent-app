import { Box, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ReceiverMessage from './ReceiverMessage'
import SenderMessage from './SenderMessage'
import { useParams } from "react-router-dom";
import Pusher from "pusher-js";
import { useGetChatMessagesQuery } from '../../../features/api/userApiService';

const ChatBody = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetChatMessagesQuery(id);

  const [messages, setMessages] = useState([]);
  let allMessages = [];

  useEffect(() => {
    if (data) {
      allMessages.push(data.messages);
      setMessages(allMessages)
    }
    Pusher.logToConsole = true;
    const pusher = new Pusher('9ae796ae679c72faed79', {
      cluster: 'eu'
    });
    const channel = pusher.subscribe('rentgh');
    channel.bind('message', function (pdata) {
      allMessages.push(pdata);
      setMessages(...messages, pdata);
      console.log(messages);
    });

    // eslint-disable-next-line
  }, [isSuccess])

  return (
    <Box>
      {
        !isLoading ? (
          messages[0]?.length > 0 ? messages[0].map((message, index) => {
            return <Grid container spacing={2} sx={{ mt: 1, px: '0.25rem' }} key={index}>
              {
                message.sender_id === id ? (
                  <Grid item xs={12} sx={{ textAlign: 'right' }}><SenderMessage message={message.message} /></Grid>
                )
                  :
                  <Grid item xs={12} sx={{ textAlign: 'left' }}><ReceiverMessage message={message.message} /></Grid>
              }
            </Grid>
          })
            :
            <Typography sx={{ width: '100%', mt: 4, textAlign: 'center', color: '#ddd' }}>No chat yet</Typography>
        ) : (
          <Typography sx={{ width: '100%', mt: 4, textAlign: 'center' }}>Loading chat messages</Typography>
        )
      }
    </Box>
  )
}

export default ChatBody