import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const patients = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(), 
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  gender: sample(['male', 'female','other']),
  dob: faker.date.birthdate(),
  address: faker.address.country(),
  bloodGroup: sample(['A+','B+','O-']),
  height:'6 feet',
  LabTests :sample([
    'CBC',
    'Lapid',
    'Liver',
    'BMP',
  ]),
   Medicines:sample([
    'Evil',
    'Panadol',
    'Softin',
    'Disprin',
  ]), 
  Dosage:1 , Days:3 , Time:12 , Instruction:'some instruction here' , status: sample(['current', 'old']),
}));

export default patients;
