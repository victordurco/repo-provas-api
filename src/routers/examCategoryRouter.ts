import { Router } from 'express';
import * as examCategoryController from '../controllers/examCategoryController';


const router = Router();

router.get('', examCategoryController.getExamCategories);

export default router;