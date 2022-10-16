import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const checkups = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(), 
  date: faker.date.future(),
  doctorName:faker.name.fullName(),
  status: sample(['pending', 'completed','canceled']),
  priority: sample(['low','medium','high']),
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
  Dosage:1 , Days:3 , Time:12 , Instruction:'some instruction here' ,
}));

export default checkups;
