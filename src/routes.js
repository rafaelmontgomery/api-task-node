import { Router } from 'express';

const routes = new Router();

import TaskController from './controllers/TaskController';

// routes get,post,put and delete methods
routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);
routes.put('/tasks/:id', TaskController.update);
routes.delete('/tasks/:id', TaskController.delete);

module.exports = routes;