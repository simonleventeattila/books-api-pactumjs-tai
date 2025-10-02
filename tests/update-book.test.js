const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');

const BASE_URL = 'http://localhost:3000';

describe('API tests to update books', () => {
  before(() => {
    request.setDefaultTimeout(10000);
    // console.log('before, one time action!!!!');
  });
  it('Update book on id 1', async () => {
    const requestBody = {
      title: 'Fuves konyv',
      author: 'Marai Sandor',
    };
    await spec()
      .withBody(requestBody)
      .put(`${BASE_URL}/books/1`)
      .expectStatus(200);
  });
});
