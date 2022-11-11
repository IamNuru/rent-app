import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const tenants = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  status: sample(['active', 'inactive']),
  gender: sample(['male', 'female']),
  amount: faker.datatype.number({ min: 100, max: 9000, precision: 0.01 }),
  occupation: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
  phone: faker.phone.number('0##-###-####'),
}));

export default tenants;
