const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const BASE_URL = "http://localhost:3000";


describe("API tests to get book data", () => {
  it("Get all books", async () => {
    await spec().get(`${BASE_URL}/books`).expectStatus(200);
    const res = await spec().get(`${BASE_URL}/books`);
  });

  it("Get books by id", async () => {
    await spec().get(`${BASE_URL}/books/1`).expectStatus(200);
  });
});

describe("API tests to update books", () => {
  it("Update book on id 1", async () => {
    const requestBody = {
      title: "Fuves konyv",
      author: "Marai Sandor",
    };
    await spec()
      .withBody(requestBody)
      .put(`${BASE_URL}/books/1`)
      .expectStatus(200);
  });
});

describe("API tests to delete book entries", () => {
  it("Delete book on id 2", async () => {
    await spec().delete(`${BASE_URL}/books/2`).expectStatus(200);
  });
});

describe("API tests to add  books", () => {
  it("Add a new unique book", async () => {
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

describe("API test for authenticated call", () => {
  it("Retrieve token", async () => {
    const requestBody = {
      email: "rv@tai.com",
      password: "learnwithrv",
    };

  const AUTH_TOKEN =  await spec()
      .post(`${BASE_URL}/auth/login`)
      .withBody(requestBody)
      .expectStatus(200);
  });
  console.log("asdasdas");
});


