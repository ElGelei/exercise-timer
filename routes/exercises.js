const express = require('express');
const router = express.Router();

let exercises = [];

router.get('/exercises', (req, res) => {
  res.json(exercises);
});

router.post('/exercises', (req, res) => {
  const { name, duration } = req.body;
  exercises.push({ name, duration });
  res.status(201).json({ message: 'Exercise added' });
});

router.delete('/exercises/:id', (req, res) => {
  exercises = exercises.filter((_, index) => index !== parseInt(req.params.id, 10));
  res.status(200).json({ message: 'Exercise removed' });
});

module.exports = router;
