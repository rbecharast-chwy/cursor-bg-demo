const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');

app.use(express.json());
app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Task Manager API running on port ${PORT}`);
  });
}

module.exports = app;
