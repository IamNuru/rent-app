import { Box, Paper, Typography } from '@mui/material'

const ServerErrorMessage = ({ error, title, ...other }) => {
    return (
        <Paper className='error-wrapper' style={{ height: '20rem' }} {...other}>
            <Box className='left-error'>
               OOOOps!!!. Something Went Wrong
            </Box>
            <Box sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
                <Typography gutterBottom align="center" sx={{ fontWeight: 600, fontSize: '1.6rem', color: '#f1816f', mb:4 }}>
                    {title ? title : 'An Error Occured'}
                </Typography>
                <Box sx={{ width: '100%', display: 'grid', justifyContent: 'center' }}>
                    {
                        error.status === 'FETCH_ERROR' ? <svg height={35} width={35} style={{ fill: 'red' }} clip-rule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.179 10.201c.055-.298.393-.734.934-.59.377.102.612.476.543.86-.077.529-.141.853-.141 1.529 0 4.47 3.601 8.495 8.502 8.495 2.173 0 4.241-.84 5.792-2.284l-1.251-.341c-.399-.107-.636-.519-.53-.919.108-.4.52-.637.919-.53l3.225.864c.399.108.637.519.53.919l-.875 3.241c-.107.399-.519.636-.919.53-.399-.107-.638-.518-.53-.918l.477-1.77c-1.829 1.711-4.27 2.708-6.838 2.708-5.849 0-9.968-4.8-10.002-9.93-.003-.473.027-1.119.164-1.864zm9.839 6.293c-.552 0-1-.449-1-1 0-.552.448-1 1-1s1 .448 1 1c0 .551-.448 1-1 1zm9.833-2.693c-.054.298-.392.734-.933.59-.378-.102-.614-.476-.543-.86.068-.48.139-.848.139-1.53 0-4.479-3.609-8.495-8.5-8.495-2.173 0-4.241.841-5.794 2.285l1.251.341c.4.107.638.518.531.918-.108.4-.519.637-.919.53l-3.225-.864c-.4-.107-.637-.518-.53-.918l.875-3.241c.107-.4.518-.638.918-.531.4.108.638.518.531.919l-.478 1.769c1.83-1.711 4.272-2.708 6.839-2.708 5.865 0 10.002 4.83 10.002 9.995 0 .724-.081 1.356-.164 1.8zm-9.836-.307c.414 0 .75-.337.75-.75v-4.992c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.992c0 .413.336.75.75.75z" fill-rule="nonzero" /></svg>
                            : error.status === 500 ? <>
                                <svg height={35} width={35} style={{ fill: 'red' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.281 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" /></svg>
                            </>
                                : error.status === 402 ?
                                    Object.values(error.data.errors)[0][0]
                                    : error.status === 403 ?
                                        <svg height={35} width={35} style={{ fill: 'red' }} clip-rule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm-6.515 4.544c-1.237 1.476-1.983 3.378-1.983 5.454 0 4.69 3.808 8.497 8.498 8.497 2.075 0 3.977-.745 5.454-1.983zm13.029 10.908c1.238-1.477 1.983-3.379 1.983-5.454 0-4.69-3.807-8.498-8.497-8.498-2.076 0-3.978.746-5.454 1.983z" fill-rule="nonzero" /></svg>
                                        : error.status === 401 ?
                                            <svg height={35} width={35} style={{ fill: 'red' }} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4.81 4l13.243 15.714-1.532 1.286-5.092-6h-2.124l-1.046-1.013-1.302 1.019-1.362-1.075-1.407 1.081-4.188-3.448 3.346-3.564h2.21l-2.278-2.714 1.532-1.286zm8.499 6h-1.504l-1.678-2h2.06c1.145-1.683 3.104-3 5.339-3 3.497 0 6.474 2.866 6.474 6.5 0 3.288-2.444 5.975-5.54 6.431l-1.678-2c.237.045.485.069.744.069 2.412 0 4.474-1.986 4.474-4.5 0-2.498-2.044-4.5-4.479-4.5-2.055 0-3.292 1.433-4.212 3zm5.691-.125c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-10.626 1.484l-1.14-1.359h-3.022l-1.293 1.376 1.312 1.081 1.38-1.061 1.351 1.066 1.412-1.103z" /></svg>
                                            : <svg height={35} width={35} style={{ fill: 'red' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.281 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" /></svg>

                    }
                </Box>
                <Typography variant="body2" align="center" className="main-header-description" sx={{mt:4}}>
                    {
                        error.status === 'FETCH_ERROR' ? 'Failed to fetch : Check network and try again'
                            : error.status === 500 ? 'Something bad happened. Try again later'
                                : error.status === 402 ?
                                    Object.values(error.data.errors)[0][0]
                                    : error.status === 403 ?
                                        'You are not allowed to send this request'
                                        : error.status === 401 ?
                                            'Unauthenticated : Please login/register to be able to make a request'
                                            : 'Something went wrong: Refresh page and try again'

                    }
                </Typography>
            </Box>
        </Paper>
    )
}

export default ServerErrorMessage