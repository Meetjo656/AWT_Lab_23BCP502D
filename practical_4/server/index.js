import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import User from './models/User.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// ─── Health Check ────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', mongo: 'connected' });
});

// ─── Auth Routes ─────────────────────────────────────────────────────────────

// Register a new user
app.post('/api/auth/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({ username, email, password });
        res.status(201).json({ message: 'User registered', userId: user._id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login (simple credential check — no hashing for lab demo)
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.json({ message: 'Login successful', user: { id: user._id, username: user.username, email: user.email } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ─── Users List (for testing) ─────────────────────────────────────────────────
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({}, '-password');
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
