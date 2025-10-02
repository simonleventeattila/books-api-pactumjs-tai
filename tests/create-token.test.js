const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');

const BASE_URL = 'http://localhost:3000';

describe('API test for authenticated call', () => {
  before(() => {
    request.setDefaultTimeout(10000);
    // console.log('before, one time action!!!!');
  });
  it('Retrieve token', async () => {
    const requestBody = {
      email: 'rv@tai.com',
      password: 'learnwithrv',
    };

    const AUTH_TOKEN = await spec()
      .post(`${BASE_URL}/auth/login`)
      .withBody(requestBody)
      .expectStatus(200);
  });
});
