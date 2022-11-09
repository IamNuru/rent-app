import { Paper, CardActions, CardContent, Typography, Button } from "@mui/material";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { Link } from "react-router-dom";

export default function MakeRequest() {
  return (
    <Paper elevation={12} sx={{ minWidth: '10rem', maxWidth: { xs: "100%", sm: '30rem', backgroundColor: 'rgb(5, 30, 52)', borderRadius: '1.2rem', color: "white" }, mx: "auto", py: 3, px: 4 }}>
      <CardContent>
        <Typography align="center" sx={{ fontSize: 22, fontWeight: 600 }} gutterBottom>
          Request
        </Typography>
        <Typography align="center" variant="body2" sx={{ fontSize: 16, color: 'rgb(204, 204, 225)' }} gutterBottom>
          Are you in need of a property to rent?. Make a request, an agent, landlord or colleague tenant can help out
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/make-request">
          <Button sx={{ mx: "auto" }} color="primary" size="small" variant="contained" endIcon={<LiveHelpIcon />}>Make Request</Button>
        </Link>
      </CardActions>
    </Paper>
  );
}
