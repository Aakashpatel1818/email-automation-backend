const request = require('supertest');
const app = require('../../src/app');

describe('Email API', () => {
  test('GET /health returns OK', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('OK');
  });

  test('POST /api/v1/campaigns creates campaign', async () => {
    const res = await request(app)
      .post('/api/v1/campaigns')
      .send({
        name: 'Test',
        subject: 'Test Subject',
        template: 'template',
        emailList: []
      });
    expect(res.status).toBe(200);
  });
});
