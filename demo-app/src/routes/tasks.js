const express = require('express');
const router = express.Router();
const { validateTask } = require('../utils/validators');

// In-memory task storage
let tasks = [
  { id: 1, title: 'Learn about Background Agents', completed: false },
  { id: 2, title: 'Prepare demo project', completed: true },
  { id: 3, title: 'Practice presentation', completed: false },
];

let nextId = 4;

// GET /tasks — List all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET /tasks/:id — Get a single task
router.get('/:id', (req, res) => {
  const taskId = Number(req.params.id);

  if (!Number.isInteger(taskId)) {
    return res.status(400).json({ error: 'Invalid task id' });
  }

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});

// POST /tasks — Create a new task
router.post('/', (req, res) => {
  const validation = validateTask(req.body);

  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  const task = {
    id: nextId++,
    title: req.body.title,
    completed: false,
  };

  tasks.push(task);
  res.status(201).json(task);
});

// PUT /tasks/:id — Update a task
router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  if (req.body.title !== undefined) {
    task.title = req.body.title;
  }

  if (req.body.completed !== undefined) {
    task.completed = req.body.completed;
  }

  res.json(task);
});

// DELETE /tasks/:id — Delete a task
router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(index, 1);
  res.status(204).send();
});

// Reset tasks (for testing)
function resetTasks() {
  tasks = [
    { id: 1, title: 'Learn about Background Agents', completed: false },
    { id: 2, title: 'Prepare demo project', completed: true },
    { id: 3, title: 'Practice presentation', completed: false },
  ];
  nextId = 4;
}

module.exports = router;
module.exports.resetTasks = resetTasks;
