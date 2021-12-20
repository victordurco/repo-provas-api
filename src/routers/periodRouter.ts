import { Router } from 'express';

import * as periodController from '../controllers/periodController';

const router = Router();

router.get('', periodController.getAll);

export default router;