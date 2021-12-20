import { Router } from 'express';
import * as courseController from '../controllers/courseController';

const router = Router();

router.get('/teachers', courseController.getCourseTeachers);

export default router;