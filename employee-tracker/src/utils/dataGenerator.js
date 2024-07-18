import { faker } from '@faker-js/faker';

export const generateEmployees = (numEmployees) => {
  const employees = [];
  for (let i = 0; i < numEmployees; i++) {
    employees.push({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      position: faker.name.jobTitle(),
      startDate: faker.date.past().toISOString().slice(0, 10), 
    });
  }
  return employees;
};
