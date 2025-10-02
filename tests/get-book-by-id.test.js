const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const getBookByIdSchema = require('../data/response/get-book-by-id-schema.json');

const BASE_URL = 'http://localhost:3000';

describe('API tests to get book data', () => {
  before(() => {
    request.setDefaultTimeout(10000);
    // console.log('before, one time action!!!!');
  });

  it('Get books by id with schema validation', async () => {
    await spec()
      .get(`${BASE_URL}/books/1`)
      .expectStatus(200)
      .expectJsonSchema(getBookByIdSchema);
  });

  it('Get books by id', async () => {
    await spec()
      .get(`${BASE_URL}/books/99999999`)
      .expectStatus(404)
      .expectBodyContains('Book not found.');
  });
});
