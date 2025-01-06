const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup',
});

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password`,`department` , `bithdate`) VALUES (?)";
  const values = [
    req.body.name,  // Adjusted to match frontend field
    req.body.email,
    req.body.password,
    req.body.department,
    req.body.birthdate,
      // Added department field to the database table
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ message: 'User registered successfully' });
  });
});

// Check database connection
db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.message);
    return;
  }
  console.log('Connected to the database.');
});

// Define a route for testing
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Use a valid port number and handle errors
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
