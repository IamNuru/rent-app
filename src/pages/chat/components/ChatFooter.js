import { Box, Card, IconButton, InputAdornment, OutlinedInput, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useSendMessageMutation } from '../../../features/api/apiService';
import { useParams } from "react-router-dom";
import '../style.css'


const ChatFooter = () => {
    const { id } = useParams();
    const [message, setMessage] = useState('')
    const [sendMessage, {  isError }] = useSendMessageMutation()


    const onSubmit = async (e) => {
        e.preventDefault();
        await sendMessage({ id, message })
        setMessage('')
    }
    return (
        <Box>
            <Box className="blur"></Box>
            <Card sx={{ height: '6rem', borderTop: '1px solid gray', px: 2, borderRadius: '2rem 2rem 0rem 0rem', background: 'grajy' }}>
                <form onSubmit={onSubmit}>
                    <OutlinedInput fullWidth id="fullWidth" sx={{ mt: 1.5 }}
                        placeholder="Type your message here"
                        name='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                >
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        } />
                </form>
            </Card>
            <Snackbar
                open={isError}
                autoHideDuration={6000}
                message="Something went wrong"
            />
        </Box>
    )
}

export default ChatFooter