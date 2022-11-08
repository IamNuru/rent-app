import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const ourProperties = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/products/product_${setIndex}.jpg`,
    //name: PROPERTY_NAME[index],
    price: faker.datatype.number({ min: 100, max: 9000, precision: 0.01 }),
    type: sample(['rent', 'sale']),
    city: faker.address.cityName(),
    gps: faker.address.zipCode,
    region: faker.address.state(),
    date: faker.date.past(1),
    address: faker.address.streetAddress(),
    title: faker.lorem.words(5),
    kitchen: faker.datatype.boolean(),
    toilet: faker.datatype.boolean(),
    bath: faker.datatype.boolean(),
    verify: faker.datatype.boolean(),
    owner: faker.name.firstName(),
    image: sample([
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg",

    ])
  };
});

export default ourProperties;
