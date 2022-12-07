import { Avatar, Box, Chip, Grid, Paper, Typography } from '@mui/material'
import "./request.css"
import TruncateSentence from '../../utils/TruncateSentence'
import { formatDistance } from 'date-fns'
import { upperCaseFirst } from 'change-case-all'

const HomeRequestCard = ({ request }) => {
  return (
    <Paper elevation={2} sx={{ pb: '1.1rem', px: 2, height: '16rem' }} className="home-request">
      <Grid container sx={{ pt: 1, mx: { sm: 1 } }} spacing={2}>
        <Grid item xs={12} sx={{ justifyContent: { xs: 'center' } }}>
          <Avatar alt={request.user && upperCaseFirst(request.user.first_name)} src={`${request?.user?.photo}`} />
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: '18px', fontWeight: '600' }} className="merriweather">
            {request.user && upperCaseFirst(TruncateSentence(request?.user?.first_name, 15))}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ pl: 1, pb: 0.2, textAlign: 'left' }}>
        <Chip size='small' label={`${request?.type}`}
          color={request?.type === 'buy' ? 'success' : 'secondary'} variant="contained"
          sx={{ float: 'left', mr: '.25rem' }} />
        <Typography>
          {
            TruncateSentence(request?.message, 75)
          }
        </Typography>
      </Box>
      <Typography sx={{ p: 1, textAlign: 'center', color: 'lightGray', fontSize: '14px' }}>
        {
          formatDistance(new Date(request?.created_at), new Date(), { addSuffix: true })
        }
      </Typography>
    </Paper>
  )
}

export default HomeRequestCard;