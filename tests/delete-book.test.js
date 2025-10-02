const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const { getNewBookId } = require('../lib/create-post');

const BASE_URL = 'http://localhost:3000';

describe('API tests to delete book entries', () => {
  before(() => {
    request.setDefaultTimeout(10000);
    // console.log('before, one time action!!!!');
  });
  it('Delete book on id 2', async () => {
    // aici apelam functia care ne intoarce un id.
    const newBookId = await getNewBookId(BASE_URL, '1001 de nopti', 'John DOe');

    await spec().delete(`${BASE_URL}/books/${newBookId}`).expectStatus(200);
  });
});
