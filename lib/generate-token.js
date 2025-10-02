const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');

const generateToken = async (
  baseUrl,
  email = 'rv@tai.com',
  password = 'learnwithrv',
) => {
  const requestBody = {
    email: email,
    password: password,
  };

  const response = await spec()
    .post(`${baseUrl}/auth/login`)
    .withBody(requestBody)
    .expectStatus(200);

  return response.body.token;
};

module.exports = {
  generateToken,
};
