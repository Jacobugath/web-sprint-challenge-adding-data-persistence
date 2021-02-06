const express = require('express');

const Resources = require('./model');

const router = express.Router();


router.get('/api/resources', (req, res) => {
    Resources.find()
      .then(resource => {
        res.json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get resources' });
      });
  });

  router.post('/api/resources', (req, res) => {
    const resourceData = req.body;
  
    Resources.add(resourceData)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new resource' });
      });
  });