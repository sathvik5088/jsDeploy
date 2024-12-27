const request = require('supertest');
const app = require('./app'); // Import the app, not the server instance
let server;

beforeAll(() => {
  // Start the server before running tests
  server = app.listen(3000);
});

afterAll(() => {
  // Close the server after tests are done to avoid hanging processes
  server.close();
});

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});
