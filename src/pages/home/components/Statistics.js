import { Box, Typography, Paper, Grid } from "@mui/material";

const Statistics = () => {
  return (
    <Box mt={8}>
      <Typography variant="h4" align="center" >
        What is happening on this Platform?
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={6} style={{ maxWidth: "20rem" }}>
          <Paper elevation={12} sx={{ padding: "12px", textAlign: "center" }}>
            <Typography variant="h4" mb={4} style={{ color: "#4F9BF5" }}>
              200
            </Typography>
            <Typography variant="body1">Available rooms for rent</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ maxWidth: "20rem" }}>
          <Paper elevation={12} sx={{ padding: "12px", textAlign: "center" }}>
            <Typography variant="h4" mb={4} style={{ color: "#4F9BF5" }}>
              200
            </Typography>
            <Typography variant="body1">Available rooms for rent</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Statistics;
