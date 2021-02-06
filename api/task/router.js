const express = require('express');

const Tasks = require('./model');

const router = express.Router();


router.get('/', (req, res) => {
    Tasks.get()
      .then(tasks => {
        
        let data = tasks;
        data = data.map(a => {
            if(a.task_completed == 0){
            a.task_completed = false;
            }
            if(a.task_completed == 1){
                a.task_completed = true;
            }
            return a;
        })
        
        res.json(tasks);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get tasks' });
      });
  });

  router.post('/', (req, res) => {
    const taskData = req.body;

    
  
    Tasks.add(taskData)
      .then(task => {

        if(task.task_completed == 0){
            task.task_completed = false;
            }
            if(task.task_completed == 1){
                task.task_completed = true;
            }
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new task' });
      });
  });

  module.exports = router;