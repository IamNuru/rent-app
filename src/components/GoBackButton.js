import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const GoBackButton = () => {
    const navigate = useNavigate();
    const navi = () =>{
        navigate(-1)
    }
  return (
    <Button sx={{textTransform:'lowercase'}} onClick={navi} startIcon={<KeyboardBackspaceIcon />}
    >go Back</Button>
  )
}

export default GoBackButton