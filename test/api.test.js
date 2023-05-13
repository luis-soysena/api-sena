require("dotenv").config();
const expect = require("chai").expect;
const fetch = require("node-fetch");

const { API_PATH, API_PORT, API_KEY } = process.env;
const API_URI = `http://localhost:${API_PORT}${API_PATH}`;
const fetchOptions = {
  method: "get",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
};

describe("Subscription Endpoints", () => {
  it("It should GET a subscription by email", async () => {
    const response = await fetch(
      `${API_URI}/subscription/search?email=de@mo2.co`,
      fetchOptions
    );
  
    expect(response.status).to.be.equal(200);
  
    const subscription = await response.json();
    expect(subscription).to.be.an("object");
  });
  
  it("It shouldn't GET a subscription by email", async () => {
    const response = await fetch(
      `${API_URI}/subscription/search?email=de@mo22.co`,
      fetchOptions
    );
    expect(response.status).to.be.equal(404);
  });
});

describe("User Endpoints", () => {
  it("It should GET a user by email", async () => {
    const response = await fetch(
      `${API_URI}/user/search?email=de@mo.co`,
      fetchOptions
    );
  
    expect(response.status).to.be.equal(200);
  
    const subscription = await response.json();
    expect(subscription).to.be.an("object");
  });

  it("It shouldn't GET a user by email", async () => {
    const response = await fetch(
      `${API_URI}/user/search?email=de@mo22.co`,
      fetchOptions
    );
    expect(response.status).to.be.equal(404);
  });
});
