const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
require('dotenv').config();

const generateToken = async (
  baseUrl,
  email = process.env.EMAIL,
  password = process.env.PASSWORD,
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
