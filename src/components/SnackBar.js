import React from 'react'
import { Snackbar } from '@mui/material'


const SnackBar = ({message = null, open}) => {
    const [opens, setOpens] = React.useState(open);
    const handleClose = () => {
        setOpens(false)
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={opens}
            message={message ? message : 'No message provided'}
            autoHideDuration={10000}
            onClose={handleClose}
            sx={[
                {
                    '.css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root' :{
                        background:'rgb(46, 125, 50)'
                    }
                }
            ]}
        />
    )
}

export default SnackBar