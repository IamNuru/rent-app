import { Avatar, Box, Container, Divider, Grid } from '@mui/material'
import React, { useState } from 'react'
import Page from '../../components/Page'
import MyProperties from './components/MyProperties'
import MyRequests from './components/MyRequests'
import MyTenants from './components/MyTenants'
import ProfileInputs from './components/ProfileInputs'
import UserStatistics from './components/UserStatistics'
import { useDispatch, useSelector } from 'react-redux'
import { useGetMyRequestsQuery } from '../../features/api/requestApiService'
import { useGetMyPropertiesQuery } from '../../features/api/propertyApiService'
import { useGetMyTenantsQuery } from '../../features/api/tenantApiService'
import { useGetAuthUserQuery } from '../../features/api/userApiService'
import PhotoIcon from '@mui/icons-material/Photo'
import UploadProfileImage from './components/UploadProfileImage'
import { authActions } from '../../redux/slices/authSlice'



const Profile = () => {

    const auth = useSelector((state) => state.auth)
    const propertiesQuery = useGetMyPropertiesQuery();
    const tenantsQuery = useGetMyTenantsQuery();
    const requestsQuery = useGetMyRequestsQuery();
    const { refetch, data } = useGetAuthUserQuery()
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    const refetchUserData = async () => {
        await refetch();
        dispatch(authActions.authUser(data))
        console.log(data)

    }


    const handleOpenImageUpload = () => {
        setOpen(true)
    }

    const handleCloseDialog = () => {
        setOpen(false)
    }


    const profileImgBg = {
        height: '14rem',
        backgroundColor: 'lightBlue',
        width: '100%'
    }

    if (!auth.user) {
        return 'loading profile'
    }

    return (
        <Page title={`Profile | ${auth ? auth?.user?.first_name + ' ' + auth?.user?.last_name : 'user name'}`}>
            <Container sx={{ px: { xs: 0.5, sm: 0, md: 4 } }} >
                <Grid container columnSpacing={2}>
                    <Grid container item xs={12} sm={5} md={4}>
                        <Grid item>
                            <Box style={profileImgBg}></Box>
                            <Box sx={{
                                        width: { xs: 120, sm: 150, md: 180 }, height: { xs: 120, sm: 150, md: 180 },
                                        mx: 'auto', mt: { xs: -6, sm: -8, md: -10 },
                                        display:'flex'
                                    }}>
                                <Avatar alt={auth?.user?.first_name}
                                    src={auth?.user?.photo ? auth?.user?.photo : "/static/mock-images/avatars/avatar_4.jpg"}
                                    sx={{
                                        width: { xs: 120, sm: 150, md: 180 }, height: { xs: 120, sm: 150, md: 180 },
                                    }}
                                    />
                                <PhotoIcon titleAccess="Change Photo" color="success" onClick={handleOpenImageUpload}
                                    sx={{
                                        cursor: 'pointer'
                                    }} />
                            </Box>
                            <UploadProfileImage refetchUserData={refetchUserData} open={open} handleClose={handleCloseDialog} />

                            <Box sx={{ mt: 4 }}>
                                <ProfileInputs refetchUserData={refetchUserData} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid item xs={12} sm={7} md={8}>
                        <UserStatistics propertiesQuery={propertiesQuery} tenantsQuery={tenantsQuery} requestsQuery={requestsQuery} />
                        <Box className="custom-scroll-bar" sx={{ maxHeight: { xs: '100%', sm: '40rem', md: '60rem' }, overflowY: 'auto', overflowX: 'hidden' }} >
                            <MyProperties query={propertiesQuery} sx={{ mb: { xs: 15, sm: 10 } }} />
                            <MyTenants query={tenantsQuery} sx={{ mb: { xs: 15, sm: 10 } }} />
                            <MyRequests query={requestsQuery} sx={{ mb: { xs: 15, sm: 10 } }} />
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

export default Profile