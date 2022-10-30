import { Fragment } from "react"
import { Grid, Typography } from "@mui/material"
import ReviewComponent from './ReviewComponent'
import { faker } from "@faker-js/faker"

const ReviewsAndRatings = () =>{
    const reviews = [...Array(24)].map((_, index) => ({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName,
        rate: faker.datatype.number({min:1, max:5, precision:0.5}),
        date: faker.datatype.datetime(),
        comment: faker.lorem.paragraph(),
        avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
    }))
    return(
        <Fragment>
            <Typography>You haven’t rate this property yet. Rate it</Typography>
            <Grid direction="column" spacing={4}>
                {
                    reviews?.length > 0 ? (
                        reviews.map((review) =>{
                            return <ReviewComponent review={review} key={review.id}></ReviewComponent>
                        })
                    ) : (
                        <Typography>No reviews on this property yet</Typography>
                    )
                }
            </Grid>
        </Fragment>
    )
}

export default ReviewsAndRatings;