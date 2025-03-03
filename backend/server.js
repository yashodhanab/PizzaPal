// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const db = require('./database');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Register a new user
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    db.run(query, [name, email, hashedPassword], function (err) {
      if (err) {
        if (err.message.includes('UNIQUE constraint failed')) {
          return res.status(400).json({ message: 'Email already exists' });
        }
        return res.status(500).json({ message: 'Database error' });
      }

      res.status(201).json({ message: 'User registered successfully', userId: this.lastID });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login user
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);    

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Find user by email
    const query = `SELECT * FROM users WHERE email = ?`;
    db.get(query, [email], async (err, user) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      res.status(200).json({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email } });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add this to your server.js or backend file
app.post('/add_order', async (req, res) => {
    const { userEmail, items } = req.body;
    console.log(req.body);
  
    if (!userEmail || !items || !Array.isArray(items)) {
      return res.status(400).json({ message: 'Invalid order data' });
    }
  
    try {
      // Insert order into the database
      const query = `
        INSERT INTO orders (user_email, item_name, item_price)
        VALUES (?, ?, ?)
      `;
  
      // Insert each item in the order
      for (const item of items) {
        await db.run(query, [userEmail, item.item_name, item.item_price]);
      }
  
      // Fetch the latest order data
      const orderQuery = `
        SELECT * FROM orders WHERE user_email = ? ORDER BY id DESC
      `;
      db.all(orderQuery, [userEmail], (err, rows) => {
        if (err) {
          return res.status(500).json({ message: 'Database error' });
        }
  
        // Return the latest order data
        res.status(201).json({
          message: 'Order added successfully',
          order: rows,
        });
      });
    } catch (error) {
      console.error('Error adding order:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});