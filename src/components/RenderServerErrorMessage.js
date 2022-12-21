import { Alert } from "@mui/material"

const RenderServerErrorMessage = ({ error, ...other }) => {
    return (
        <Alert severity="error" sx={{ my: 2 }}>
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
        </Alert>
    )
}

export default RenderServerErrorMessage