import "reflect-metadata";
import express, {Request, Response} from "express";
import cors from "cors";

import connectDatabase from "./database";
import serverMiddlewareError from './middlewares/serverMiddlewareErro';
import examRouter from './routers/examRouter';
import courseRouter from './routers/courseRouter';
import examCategoryRouter from './routers/examCategoryRouter';
import teacherRouter from './routers/teacherRouter';
import periodRouter from './routers/periodRouter';

export async function init () {
  await connectDatabase();
}

const app = express();
app.use(cors());
app.use(express.json());

app.get("/status", (req: Request, res: Response) => {
    res.sendStatus(200);
});

app.use('/exam', examRouter);

app.use('/course', courseRouter);

app.use('/category', examCategoryRouter);

app.use('/teacher', teacherRouter);

app.use('/period', periodRouter);

app.use(serverMiddlewareError);

export default app;