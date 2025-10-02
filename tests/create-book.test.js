const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');

const BASE_URL = 'http://localhost:3000';

describe('API tests to add  books', () => {
  before(() => {
    request.setDefaultTimeout(10000);
    // console.log('before, one time action!!!!');
  });
  it('Add a new unique book', async () => {
    const requestBody = {
      title: faker.lorem.words({ min: 1, max: 3 }),
      author: faker.person.fullName(),
    };

    await spec()
      .post(`${BASE_URL}/books`)
      .withBody(requestBody)
      .expectStatus(201);
  });
});
