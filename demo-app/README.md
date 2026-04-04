# Task Manager API

Simple REST API for managing tasks with in-memory storage.

## Getting Started

Install dependencies and start the server:

```bash
npm install
npm start
```

The API runs on `http://localhost:3000` by default.

## Run Tests

```bash
npm test
```

## API Overview

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/tasks` | List all tasks |
| GET | `/tasks/:id` | Get one task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |

## Endpoints

### GET `/tasks`

Returns all tasks.

#### Request

```bash
curl -X GET http://localhost:3000/tasks
```

#### Response (200)

```json
[
  {
    "id": 1,
    "title": "Learn about Background Agents",
    "completed": false
  },
  {
    "id": 2,
    "title": "Prepare demo project",
    "completed": true
  }
]
```

---

### GET `/tasks/:id`

Returns one task by ID.

#### Request

```bash
curl -X GET http://localhost:3000/tasks/1
```

#### Response (200)

```json
{
  "id": 1,
  "title": "Learn about Background Agents",
  "completed": false
}
```

#### Response (404)

```json
{
  "error": "Task not found"
}
```

---

### POST `/tasks`

Creates a new task. The request body must include `title`.

#### Request

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Write API docs"}'
```

#### Response (201)

```json
{
  "id": 4,
  "title": "Write API docs",
  "completed": false
}
```

#### Response (400)

```json
{
  "error": "Title is required"
}
```

---

### PUT `/tasks/:id`

Updates one task. You can send `title`, `completed`, or both.

#### Request

```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated title","completed":true}'
```

#### Response (200)

```json
{
  "id": 1,
  "title": "Updated title",
  "completed": true
}
```

#### Response (404)

```json
{
  "error": "Task not found"
}
```

---

### DELETE `/tasks/:id`

Deletes one task by ID.

#### Request

```bash
curl -X DELETE http://localhost:3000/tasks/1
```

#### Response (204)

No response body.

#### Response (404)

```json
{
  "error": "Task not found"
}
```

## Project Structure

```text
demo-app/
├── src/
│   ├── index.js            # Express app setup
│   ├── routes/
│   │   └── tasks.js        # Task CRUD routes
│   └── utils/
│       └── validators.js   # Request validation helpers
├── tests/
│   └── tasks.test.js       # API integration tests (Jest + Supertest)
├── package.json            # Scripts and dependencies
└── README.md               # Project documentation
```
