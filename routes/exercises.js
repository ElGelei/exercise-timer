const express = require('express');
const router = express.Router();

let exercises = [];

// Get all exercises
router.get('/exercises', (req, res) => {
  res.json(exercises);
});

// Add a new exercise
router.post('/exercises', (req, res) => {
  const { name, duration } = req.body;
  if (!name || !duration) {
    return res.status(400).json({ message: 'Name and duration are required' });
  }
  exercises.push({ name, duration });
  res.status(201).json({ message: 'Exercise added', exercise: { name, duration } });
});

// Delete an exercise by index
router.delete('/exercises/:id', (req, res) => {
  const index = parseInt(req.params.id, 10);
  if (index >= 0 && index < exercises.length) {
    exercises.splice(index, 1);
    res.status(200).json({ message: 'Exercise removed' });
  } else {
    res.status(404).json({ message: 'Exercise not found' });
  }
});

module.exports = router;
