const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks on page load
document.addEventListener('DOMContentLoaded', loadTasks);

async function loadTasks() {
    try {
        const response = await fetch('/api/tasks');
        const tasks = await response.json();
        taskList.innerHTML = '';
        tasks.forEach(task => {
            addTaskToDOM(task);
        });
    } catch (error) {
        console.error('Error loading tasks:', error);
    }
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

async function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    try {
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: taskText })
        });
        const task = await response.json();
        addTaskToDOM(task);
        taskInput.value = '';
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

function addTaskToDOM(task) {
    const li = document.createElement('li');
    if (task.completed) {
        li.classList.add('completed');
    }

    const span = document.createElement('span');
    span.textContent = task.text;
    span.style.flex = '1';
    span.style.cursor = 'pointer';
    span.addEventListener('click', () => toggleTask(task.id, li));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => deleteTask(task.id, li));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

async function toggleTask(id, liElement) {
    try {
        const response = await fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const task = await response.json();
        if (task.completed) {
            liElement.classList.add('completed');
        } else {
            liElement.classList.remove('completed');
        }
    } catch (error) {
        console.error('Error toggling task:', error);
    }
}

async function deleteTask(id, liElement) {
    try {
        await fetch(`/api/tasks/${id}`, {
            method: 'DELETE'
        });
        liElement.remove();
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}
