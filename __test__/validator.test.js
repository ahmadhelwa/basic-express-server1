'use strict';
const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('validator Test', () => {
  it('Should check if the name is string and not empty', async () => {
    const response = await request.get('/person?name=ahmad');
    expect(response.status).toEqual(200);
  });
  it('Should check if the name is not string', async () => {
    const response = await request.get(`/person?name=123`);
    expect(response.status).toEqual(500);
  });
  it('Should check if the name is not string and not empty', async () => {
    const response = await request.get('/person?name=');
    expect(response.status).toEqual(500);
  });
});