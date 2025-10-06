const { spec, request } = require('pactum');

const { faker } = require('@faker-js/faker');
const { generateToken } = require('../lib/generate-token');

const BASE_URL = 'http://localhost:3000';

describe('API tests to get all private books', () => {
  let tokenId;
  before(async () => {
    request.setDefaultTimeout(10000);
    tokenId = await generateToken(BASE_URL);
  });

  it('Get all private books unauth', async () => {
    await spec().get(`${BASE_URL}/private/books`).expectStatus(401);
  });

  it('Get all private books', async () => {
    await spec()
      .get(`${BASE_URL}/private/books`)
      .withHeaders('Authorization', `Bearer ${tokenId}`)
      .expectStatus(200);
  });
});
