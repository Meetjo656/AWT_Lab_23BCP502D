const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory task storage
let tasks = [];
let taskId = 1;

// Routes
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Task text is required' });
    }
    const task = {
        id: taskId++,
        text,
        completed: false
    };
    tasks.push(task);
    res.status(201).json(task);
});

app.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    task.completed = !task.completed;
    res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    const deletedTask = tasks.splice(index, 1);
    res.json(deletedTask[0]);
});

app.listen(PORT, () => {
    console.log(`Task Manager server is running on http://localhost:${PORT}`);
});
