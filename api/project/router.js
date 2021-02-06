const express = require('express');

const Projects = require('./model');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.get()
      .then(projects => {
        let data = projects;
        data = data.map(a => {
            if(a.project_completed == 0){
            a.project_completed = false;
            }
            if(a.project_completed == 1){
                a.project_completed = true;
            }
            return a;
        })
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
      });
  });

  router.post('/', (req, res) => {
    const projectData = req.body;


    
  
    Projects.add(projectData)
      .then(project => {
        if(project.project_completed == 0){
            project.project_completed = false;
            }
            if(project.project_completed == 1){
                project.project_completed = true;
            }
        
        res.status(201).json(project);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new project' });
      });
  });

  module.exports = router;