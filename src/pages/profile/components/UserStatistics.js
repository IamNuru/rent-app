import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'

const UserStatistics = ({propertiesQuery, requestsQuery, tenantsQuery }) => {
  
  const totalProperties = propertiesQuery.data ? propertiesQuery.data.properties.length : 0;
  const totalTenants = tenantsQuery.data ? tenantsQuery.data.tenants.length : 0;
  const totalRequests = requestsQuery.data ? requestsQuery.data.requests.length : 0;
  
  return (
    <Box sx={{ background: '#d3d3d329', px: 2, py: 5, minHeight: '10rem' }}>
      <Grid container spacing={2} align="center"
        sx={{
          display: 'grid', gridAutoRows: '1fr', justifyContent: 'center', gridAutoColumns: '1fr',
          gridTemplateColumns: { xs: 'repeat(1, 300px)', sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
        }}>
        <Grid item>
          <Paper elevation={10} sx={{ borderRadius: '14px', px: 4.5, py: 4 }}>
            <Typography sx={{ fontWeight: 500, fontSize: '1.14rem', textAlign: 'center' }}>Total Properties</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '2.2rem', textAlign: 'center' }}>{propertiesQuery.isLoading ? '...' : totalProperties}</Typography>
          </Paper>
        </Grid>

        <Grid item>
          <Paper elevation={10} sx={{ borderRadius: '14px', px: 4.5, py: 4 }}>
            <Typography sx={{ fontWeight: 500, fontSize: '1.14rem', textAlign: 'center' }}>Total Tenants</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '2.2rem', textAlign: 'center' }}>{totalTenants}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={10} sx={{ borderRadius: '14px', px: 4.5, py: 4 }}>
            <Typography sx={{ fontWeight: 500, fontSize: '1.14rem', textAlign: 'center' }}>Total Requests</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '2.2rem', textAlign: 'center' }}>{totalRequests}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserStatistics