const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection configuration
const db = mysql.createConnection({
  host: 'mysql.railway.internal', // Railway's internal host
  user: 'root',
  password: '', // Replace with your actual password
  database: 'railway',
  port: 3306, // Default MySQL port
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.message);
    return;
  }
  console.log('Connected to the Railway database.');
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password`, `department`, `birthdate`) VALUES (?)";
  const values = [
    req.body.name,       // Ensure frontend sends this field
    req.body.email,
    req.body.password,
    req.body.department, // Ensure frontend sends this field
    req.body.birthdate,  // Ensure frontend sends this field
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ message: 'User registered successfully' });
  });
});

// Root endpoint for testing
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Start the server
const PORT = process.env.PORT || 8081; // Use Railway's dynamic port or fallback to 8081
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
