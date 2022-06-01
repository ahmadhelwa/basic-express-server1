"use strict";
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);
describe('Server Test', () => {
    
    it(' return 200', async () => {
      const response = await request.get('/person?name=string');
      expect(response.status).toEqual(200);
      expect(typeof response.body).toEqual('object');
    });
    it(' bad route', async () => {
      const response = await request.get('/bad');
      expect(response.status).toEqual(404);
    });
    it('bad method', async () => {
        const response = await request.post('/person');
        expect(response.status).toEqual(404);
      });
   
    it(' return 500', async () => {
      const response = await request.get('/person?name'); 
      expect(response.status).toEqual(500);
    });
  });