import { Avatar, Box, Container, Divider, Grid } from '@mui/material'
import React from 'react'
import Page from '../../components/Page'
import MyProperties from './components/MyProperties'
import MyRequests from './components/MyRequests'
import MyTenants from './components/MyTenants'
import ProfileInputs from './components/ProfileInputs'
import UserStatistics from './components/UserStatistics'


const Profile = () => {
    const profileImgBg = {
        height: '14rem',
        backgroundColor: 'lightBlue',
        width: '100%'
    }
    return (
        <Page title="Profile | UserName">
            <Container sx={{ px: { xs: 0.5, sm: 0, md: 4 } }} >
                <Grid container columnSpacing={2}>
                    <Grid container item xs={12} sm={5} md={4}>
                        <Grid item>
                            <Box style={profileImgBg}></Box>
                            <Avatar alt="Travis Howard"
                                src="/static/mock-images/avatars/avatar_4.jpg"
                                sx={{
                                    width: { xs: 120, sm: 150, md: 180 }, height: { xs: 120, sm: 150, md: 180 },
                                    mx: 'auto', mt: { xs: -6, sm: -8, md: -10 }
                                }} />
                            <Box sx={{ mt: 4 }}>
                                <ProfileInputs />
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid item xs={12} sm={7} md={8}>
                        <UserStatistics />
                        <Box className="custom-scroll-bar" sx={{ maxHeight: { xs: '100%', sm: '40rem', md:'60rem' }, overflowY: 'auto', overflowX: 'hidden' }} >
                            <MyProperties />
                            <MyTenants />
                            <MyRequests />
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

export default Profile