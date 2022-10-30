import { Avatar, Card, Grid, Rating, Stack, Typography } from "@mui/material"
import { format, toDate } from "date-fns";

const ReviewComponent = ({ review }) => {
    console.log(review)
    return(
        <Card elevation={2} sx={{bgColor:'#F1ECEC', mb:'1.3rem', maxWidth:'45rem', px:'0.65rem', py:'0.5rem'}}>
            <Grid container>
                <Grid item xs={12} sx={{textAlign:'right'}}>edit</Grid>
                <Grid item container>
                    <Grid item xs={2} sx={{textAlign:'center', alignItems:'center'}}>
                        <Avatar alt="Remy Sharp" src={`${review?.avatarUrl}`} sx={{mx:'auto'}} />
                    </Grid>
                    <Grid item container direction="column" xs={7}>
                        <Typography>{review?.firstName ? review.firstName.name : 'No name'}</Typography>
                        <Stack spacing={1}>
                        <Rating precision={0.5} name="size-small" defaultValue={review?.rate ? review.rate : 0} size="small" />
                        </Stack>
                    </Grid>
                    <Grid item xs={3} sx={{textAlign:'right'}}>
                        <Typography variant="body2" sx={{color:'gray'}}>
                            {review?.date ? format(toDate(review.date), "do MMM, yyyy") : 'no date'}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    {review?.comment ? review.comment : 'No comment'}
                </Grid>
            </Grid>
        </Card>
    )
}

export default ReviewComponent;