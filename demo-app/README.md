# Task Manager API

Simple REST API for managing tasks with in-memory storage.

## Requirements

- Node.js 18+ (recommended)
- npm

## Getting started

```bash
npm install
npm start
```

The server starts on `http://localhost:3000` by default.

## API overview

Base URL: `http://localhost:3000`

### 1) List tasks

**GET** `/tasks`

Returns all tasks.

Example request:

```bash
curl -s http://localhost:3000/tasks
```

Example response (`200 OK`):

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

### 2) Get task by ID

**GET** `/tasks/:id`

Returns one task by ID.

Example request:

```bash
curl -s http://localhost:3000/tasks/1
```

Example response (`200 OK`):

```json
{
  "id": 1,
  "title": "Learn about Background Agents",
  "completed": false
}
```

Not found response (`404 Not Found`):

```json
{
  "error": "Task not found"
}
```

### 3) Create task

**POST** `/tasks`

Creates a new task. `title` is required.

Example request:

```bash
curl -s -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Prepare slides"}'
```

Example response (`201 Created`):

```json
{
  "id": 4,
  "title": "Prepare slides",
  "completed": false
}
```

Validation error (`400 Bad Request`):

```json
{
  "error": "Title is required"
}
```

### 4) Update task

**PUT** `/tasks/:id`

Updates an existing task. Supported fields:

- `title` (string)
- `completed` (boolean)

Example request:

```bash
curl -s -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated title","completed":true}'
```

Example response (`200 OK`):

```json
{
  "id": 1,
  "title": "Updated title",
  "completed": true
}
```

Not found response (`404 Not Found`):

```json
{
  "error": "Task not found"
}
```

### 5) Delete task

**DELETE** `/tasks/:id`

Deletes a task by ID.

Example request:

```bash
curl -i -X DELETE http://localhost:3000/tasks/1
```

Example response (`204 No Content`):

No response body.

Not found response (`404 Not Found`):

```json
{
  "error": "Task not found"
}
```

## Running tests

```bash
npm test
```

Tests are located under `tests/` and use Jest + Supertest.

## Project structure

```text
demo-app/
├── src/
│   ├── index.js              # Express app entrypoint
│   ├── routes/
│   │   └── tasks.js          # Task CRUD endpoints
│   └── utils/
│       └── validators.js     # Request validation helpers
├── tests/
│   └── tasks.test.js         # API test suite
├── package.json
└── README.md
```
