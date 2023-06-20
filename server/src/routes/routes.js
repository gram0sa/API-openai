const express = require('express');
const promptController = require('../controllers/prompt-controller');

const routes = express.Router();

routes.get('/api/prompt', promptController.sendText);

module.exports = routes;