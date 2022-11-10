import { Avatar, Box, Container, Divider, Grid } from '@mui/material'
import React from 'react'
import Page from '../../components/Page'
import MyProperties from './components/MyProperties'
import ProfileInputs from './components/ProfileInputs'


const Profile = () => {
    const profileImgBg = {
        height: '14rem',
        backgroundColor: 'lightBlue',
        width: '100%'
    }
    return (
        <Page title="Profile | UserName">
            <Container>
                <Grid container columnSpacing={2}>
                    <Grid container item xs={12} md={6}>
                        <Grid item xs={12}>
                            <Box style={profileImgBg}></Box>
                            <Avatar alt="Travis Howard"
                                src="/static/mock-images/avatars/avatar_4.jpg"
                                sx={{
                                    width: { xs: 120, sm: 150, md: 180 }, height: { xs: 120, sm: 150, md: 180 },
                                    mx: 'auto', mt: { xs: -6, sm: -8, md: -10 }
                                }} />
                        </Grid>
                        <Grid item>
                            
                        </Grid>
                        <Grid item xs={12} sx={{mt:2}}>
                            <ProfileInputs />
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid item xs={12} md={6}>
                        <MyProperties />
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

export default Profile