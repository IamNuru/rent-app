import { Typography, Paper, Grid } from "@mui/material";
import LoadingDots from "../../../components/LoadingDots";
import { useGetStatisticsQuery } from "../../../features/api/apiService";

const Statistics = () => {
  const { data, isLoading, isSuccess, isError } = useGetStatisticsQuery();
  return (
    <>
      <Typography variant="h4" align="center" className="main-header" >
        What is happening on this Platform?
      </Typography>
      <Grid container spacing={5} sx={{justifyContent:'center', marginTop:'0.5rem'}}>
        <Grid item xs={6} style={{ maxWidth: "20rem" }}>
          <Paper elevation={12} sx={{ padding: "12px", textAlign: "center" }}>
            <Typography variant="h4" mb={4} style={{ color: "#4F9BF5" }}>
              {
                isLoading ? <LoadingDots /> 
                : isSuccess ? data?.countUsers
                : isError ? '---' : 0

              }
            </Typography>
            <Typography variant="body1">Users on this app</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ maxWidth: "20rem" }}>
          <Paper elevation={12} sx={{ padding: "12px", textAlign: "center" }}>
            <Typography variant="h4" mb={4} style={{ color: "#4F9BF5" }}>
            {
                isLoading ? <LoadingDots /> 
                : isSuccess ? data?.countProperties
                : isError ? '---' : 0

              }
            </Typography>
            <Typography variant="body1">Properties posted</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Statistics;
