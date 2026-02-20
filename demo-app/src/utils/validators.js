/**
 * Validates a task object before creation.
 * BUG: Does not validate that title is non-empty.
 * A background agent should fix this.
 */
function validateTask(task) {
  if (!task) {
    return { valid: false, error: 'Task object is required' };
  }

  // BUG: Missing validation for empty title
  // Should check: if (!task.title || task.title.trim() === '')
  if (task.title === undefined) {
    return { valid: false, error: 'Title is required' };
  }

  return { valid: true };
}

module.exports = { validateTask };
