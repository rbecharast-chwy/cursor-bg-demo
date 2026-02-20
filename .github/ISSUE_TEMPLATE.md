# Issues pre-armados para la demo

Crear estos issues en el repo de GitHub antes de la presentación.

---

## Issue 1: Fix bug in GET /tasks/:id

**Title:** Fix bug in GET /tasks/:id endpoint

**Body:**
The `GET /tasks/:id` endpoint has a type comparison issue. The route parameter `id` comes as a string from Express, but the task IDs in our array are numbers.

Currently, the code uses loose equality (`==`) which can lead to unexpected behavior. It should use strict equality (`===`) with proper type parsing.

### Steps to reproduce:
1. Start the server: `npm start`
2. Make a request to `GET /tasks/1`
3. The comparison works due to type coercion, but this is fragile

### Expected behavior:
- Use `parseInt()` or `Number()` to parse the ID parameter
- Use strict equality (`===`) for comparison
- Return proper 400 error for non-numeric IDs

### Acceptance criteria:
- [ ] Parse route param to number
- [ ] Use strict comparison
- [ ] All tests pass

---

## Issue 2: Add input validation for task creation

**Title:** Add input validation and tests for POST /tasks

**Body:**
The `POST /tasks` endpoint currently allows creating tasks with empty titles (empty string `""` or whitespace-only strings like `"   "`). This should not be allowed.

### Steps to reproduce:
1. Start the server: `npm start`
2. Send `POST /tasks` with body `{ "title": "" }`
3. Task is created with empty title (bug!)

### Expected behavior:
- Empty string titles should be rejected with 400
- Whitespace-only titles should be rejected with 400
- Error message should clearly state "Title cannot be empty"

### Acceptance criteria:
- [ ] Validate that title is not empty
- [ ] Validate that title is not whitespace-only
- [ ] Return 400 with descriptive error message
- [ ] Tests pass for edge cases

---

## Issue 3: Update README with complete API documentation

**Title:** Update README with API documentation

**Body:**
The README.md is outdated and only documents the `GET /tasks` endpoint. It should document all available endpoints and include information about running tests.

### Expected content:
- All CRUD endpoints documented (GET, POST, PUT, DELETE)
- Request/response examples
- How to run tests (`npm test`)
- Project structure overview

### Acceptance criteria:
- [ ] All endpoints documented with examples
- [ ] Testing instructions included
- [ ] Project structure documented
