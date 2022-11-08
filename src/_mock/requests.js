import { faker } from "@faker-js/faker";
import { sample } from "lodash"

const requests = [...Array(50)].map((_, index) => ({
    id: faker.datatype.uuid(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
    name: faker.name.fullName(),
    isVerified: faker.datatype.boolean(),
    message: faker.lorem.words(200),
    slug: faker.lorem.slug(10),
    type: sample('to rent', 'to buy' ),
    date: faker.date.past(1),
}))

export default requests;