import { Router } from 'express';
import * as examController from '../controllers/examController';


const router = Router();

router.post('', examController.createExam);

router.get('/teacher/:teacherId', examController.getExamsByTeacherId);

router.get('/course/:courseId', examController.getExamsByCourseId);

export default router;