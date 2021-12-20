import { Exam } from '../protocols/Exam';

const validNewExam = () => { 
    const newExam: Exam = {
        url: 'https://drive.google.com/file/d/1SmtCqT5qeKyvnx7AV7Lfqtyz3fwnPtW5/view',
        name: '2020.1',
        teacherId: 1,
        categoryId: 1,
        courseId: 1,
    };
    return (newExam);
};

const newExamWithInvalidCourse = () => { 
    const newExam: Exam = {
        url: 'https://drive.google.com/file/d/1SmtCqT5qeKyvnx7AV7Lfqtyz3fwnPtW5/view',
        name: '2020.1',
        teacherId: 1,
        categoryId: 1,
        courseId: 1000,
    };
    return (newExam);
};

const invalidNewExam = () => { 
    const newExam: Exam = {
        url: 'invalid-url',
        name: '2020.1',
        teacherId: 1,
        categoryId: 1,
        courseId: 1000,
    };
    return (newExam);
};

export {
    validNewExam,
    newExamWithInvalidCourse,
    invalidNewExam
};