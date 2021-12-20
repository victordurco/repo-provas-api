import { Router } from 'express';
import * as courseController from '../controllers/courseController';

const router = Router();

router.get('/:courseId/teachers', courseController.getCourseTeachers);

router.get('', courseController.getCourses);

router.get('/exams', courseController.getCoursesWithExams);

export default router;