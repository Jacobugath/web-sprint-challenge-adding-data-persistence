const express = require('express');

const Tasks = require('./model');

const router = express.Router();


router.get('/api/tasks', (req, res) => {
    Tasks.find()
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get tasks' });
      });
  });

  router.post('/api/tasks', (req, res) => {
    const taskData = req.body;
  
    Tasks.add(taskData)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new task' });
      });
  });