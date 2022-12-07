import { Box, Grid, Pagination, Stack } from "@mui/material";
import Request from "./Request";


const RequestLists = ({requests}) => {
    return (
        <div>
            <Box mt={2} mb={2} align="center">
                <Box sx={{ flexGrow: 1 }} mt={2} className="">
                    <Grid container spacing={2} align="center">
                        {requests?.map((request) => {
                            return (
                                <Grid item key={request.id} xs={12} sm={6}>
                                    <Request request={request} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Box>
            <Stack spacing={2} mt={4} style={{ alignItems: "center" }}>
                <Pagination count={requests?.length} color="primary" />
            </Stack>
        </div>
    )
}

export default RequestLists