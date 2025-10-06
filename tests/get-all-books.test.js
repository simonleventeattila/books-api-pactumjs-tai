const { spec, request } = require('pactum');

const getAllBooksSchema = require('../data/response/get-all-books-schema.json');
const { faker } = require('@faker-js/faker');

const BASE_URL = 'http://localhost:3000';

describe('API tests to get book data', () => {
  before(() => {
    request.setDefaultTimeout(10000);
    // console.log('before, one time action!!!!');
  });
  it('Get all books', async () => {
    await spec()
      .get(`${BASE_URL}/books`)
      .expectStatus(200)
      .expectJsonSchema(getAllBooksSchema);
  });
});
