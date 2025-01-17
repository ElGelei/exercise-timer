const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const exercisesRoute = require('./routes/exercises');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', exercisesRoute);

// Default route for root
app.get('/', (req, res) => {
  res.send('Welcome to the Exercise Timer API');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
