import { Router } from 'express';
import * as examController from '../controllers/examController';


const router = Router();

router.post('', examController.createExam);

export default router;