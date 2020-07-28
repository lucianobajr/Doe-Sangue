import { Router } from 'express';

const routes = new Router();

import DonorController from './app/controllers/DonorController'

routes.get('/donors', DonorController.index);
routes.post('/donors', DonorController.store);

export default routes;