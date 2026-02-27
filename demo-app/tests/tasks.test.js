const request = require('supertest');
const app = require('../src/index');
const { resetTasks } = require('../src/routes/tasks');

beforeEach(() => {
  resetTasks();
});

describe('GET /tasks', () => {
  it('should return all tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(3);
  });
});

describe('GET /tasks/:id', () => {
  it('should return a task by id', async () => {
    const res = await request(app).get('/tasks/1');
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Learn about Background Agents');
  });

  it('should return 404 for non-existent task', async () => {
    const res = await request(app).get('/tasks/999');
    expect(res.status).toBe(404);
  });

  it('should return 400 for non-numeric id', async () => {
    const res = await request(app).get('/tasks/not-a-number');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Invalid task id');
  });

  // This test exposes the == vs === bug:
  // When id is passed as a string with leading zeros or special numeric strings,
  // the loose comparison can cause unexpected behavior.
  it('should find task by numeric id correctly', async () => {
    const res = await request(app).get('/tasks/1');
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
    // The id in the response should be a number, and match exactly
    expect(typeof res.body.id).toBe('number');
    expect(res.body.id).toStrictEqual(1);
  });
});

describe('POST /tasks', () => {
  it('should create a new task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'New task' });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('New task');
    expect(res.body.completed).toBe(false);
  });

  it('should reject a task without a title', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({});
    expect(res.status).toBe(400);
  });

  // This test exposes the validation bug:
  // Empty string "" should not be a valid title
  it('should reject a task with an empty title', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: '' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  // This test also exposes the validation bug:
  // Whitespace-only title should not be valid
  it('should reject a task with a whitespace-only title', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: '   ' });
    expect(res.status).toBe(400);
  });
});

describe('PUT /tasks/:id', () => {
  it('should update a task', async () => {
    const res = await request(app)
      .put('/tasks/1')
      .send({ title: 'Updated title', completed: true });
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Updated title');
    expect(res.body.completed).toBe(true);
  });

  it('should return 404 for non-existent task', async () => {
    const res = await request(app)
      .put('/tasks/999')
      .send({ title: 'Nope' });
    expect(res.status).toBe(404);
  });
});

describe('DELETE /tasks/:id', () => {
  it('should delete a task', async () => {
    const res = await request(app).delete('/tasks/1');
    expect(res.status).toBe(204);

    const check = await request(app).get('/tasks');
    expect(check.body).toHaveLength(2);
  });

  it('should return 404 for non-existent task', async () => {
    const res = await request(app).delete('/tasks/999');
    expect(res.status).toBe(404);
  });
});
