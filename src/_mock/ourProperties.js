import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PROPERTY_NAME = [
  'Single Bedroom',
  'A house with 3 apartments',
  'A house with 3 apartments',
  'A house with 3 apartments',
  'A house with 3 apartments',
  'A house with 3 apartments',
  'A house with 3 apartments',
  'A house with 3 apartments',
  'SUNNY house ',
  'SUNNY house ',
];
const PROPERTY_TITLE = [
  'Single Bedroom for rent in Accra',
  'A house with 3 apartments for sale urgent',
  'SUNNY house for sale at accra',
  'Backy house rent',
  'Backy house rent',
  'Backy house rent',
  'Backy house rent',
  'Backy house rent',
  'Backy house rent',
  'Backy house rent',
];
// ----------------------------------------------------------------------

const ourProperties = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/products/product_${setIndex}.jpg`,
    name: PROPERTY_NAME[index],
    price: faker.datatype.number({ min: 100, max: 9000, precision: 0.01 }),
    type: sample(['rent', 'sale']),
    city: faker.address.cityName(),
    gps: faker.address.zipCode,
    region: faker.address.state(),
    date: faker.date.birthdate(),
    address: faker.address.streetAddress(),
    title: PROPERTY_TITLE[index],
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
