const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());


app.use(cors({
  origin: "http://localhost:3000", // Allow frontend URL
  methods: "GET, POST, PUT, DELETE, OPTIONS", // Include OPTIONS method
  allowedHeaders: "Content-Type, Authorization, cache-control",
  credentials: true, // If you're using cookies or authentication
}));

// Handle CORS Preflight Requests for all routes
app.options("*", cors());  

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});



// mySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Umai2002",
  database: process.env.DB_NAME || "employee_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
  console.log("Connected to MySQL Database");
});

// root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Employee Management API!");
});

// fetch All Employees
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ error: "Failed to fetch users", details: err.message });
    }
    console.log("Users Fetched:", results);
    res.json(results);
  });
});

// add New Employee (POST)
app.post("/users", (req, res) => {
  const { first_name, last_name, email, gender, phone_number, address } = req.body;

  if (!first_name || !email || !gender || !phone_number || !address) {
    console.error(" Missing required fields:", req.body);
    return res.status(400).json({ error: "Missing required fields" });
  }

  const query = "INSERT INTO users (first_name, last_name, email, gender, phone_number, address) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(query, [first_name, last_name, email, gender, phone_number, address], (err, results) => {
    if (err) {
      console.error(" Database Error:", err);
      return res.status(500).json({ error: "Failed to add user", details: err.message });
    }
    res.status(201).json({ id: results.insertId, ...req.body });
  });
});

// update Employee (PUT)
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, gender, phone_number, address } = req.body;

  if (!first_name || !email || !gender || !phone_number || !address) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const query = "UPDATE users SET first_name = ?, last_name = ?, email = ?, gender = ?, phone_number = ?, address = ? WHERE id = ?";
  db.query(query, [first_name, last_name, email, gender, phone_number, address, id], (err, results) => {
    if (err) {
      console.error("Error updating user:", err);
      return res.status(500).json({ error: "Failed to update user", details: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User updated successfully", id, ...req.body });
  });
});

// delete Employee (DELETE)
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM users WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error deleting user:", err);
      return res.status(500).json({ error: "Failed to delete user", details: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully", id });
  });
});

// server on Port 8080 i am using 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running at http://127.0.0.1:${PORT}`));
