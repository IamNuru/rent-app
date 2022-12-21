import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Button, Typography, Container, Box } from '@mui/material';
// components
import Page from '../../components/Page';

// ----------------------------------------------------------------------

const ContentStyle ={
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: 12,
};

// ----------------------------------------------------------------------

export default function Page403() {
  return (
    <Page title="403 Page Not Found">
      <Container>
        <Box style={ContentStyle} sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Forbidden !!!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            You are not allowed to access this page
          </Typography>

          <Box
            component="img"
            src="/static/illustrations/illustration_404.svg"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
          <Button sx={{mt:4}} to="/dashboard" size="large" variant="contained" component={RouterLink}>
            Go to Dashboard
          </Button>
        </Box>
      </Container>
    </Page>
  );
}
