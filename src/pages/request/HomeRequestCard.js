import { Avatar, Box,  Chip, Grid, Paper, Typography } from '@mui/material'
import "./request.css"
import TruncateSentence from '../../utils/TruncateSentence'
import { formatDistance } from 'date-fns'

const HomeRequestCard = ({ request }) => {
  return (
    <Paper elevation={2} sx={{pb:'1.1rem', width: { xs: '12rem', sm: '18rem' }, height:'100%' }} className="home-request">
      <Grid container sx={{ pt: 1, mx: { sm: 1 } }} spacing={2}>
        <Grid item xs={12} sx={{ justifyContent: { xs: 'center' } }}>
          <Avatar alt="Requester" src={`${request?.avatarUrl}`} />
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: '18px', fontWeight: '600' }} className="merriweather">{TruncateSentence(request?.name, 15)}</Typography>
        </Grid>
      </Grid>
      <Box sx={{ pl: 1, pb: 0.2, textAlign: 'left' }}>
        <Chip size='small' label={`${request?.type}`} 
        color={request?.type ==='to buy' ? 'success' : 'secondary'} variant="contained"
        sx={{float:'left', mr:'.25rem'}} />
      <Typography>
        {
          TruncateSentence(request?.message, 75)
        }
      </Typography>
      </Box>
      <Typography sx={{ p: 1, textAlign: 'center', color: 'lightGray', fontSize: '14px' }}>
        {
          formatDistance(request?.date, new Date(), { addSuffix: true })
        }
      </Typography>
    </Paper>
  )
}

export default HomeRequestCard;