import joi from 'joi';

const URL_PATTERN = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

const NAME_PATTERN = /\d\d\d\d.[1-2]+/;


const newExamSchema = joi.object({
  url: joi.string().required().pattern(URL_PATTERN),
  name: joi.string().min(6).max(6).required().pattern(NAME_PATTERN),
  teacherId: joi.number().min(1).required(),
  categoryId: joi.number().min(1).max(5).required(),
  courseId: joi.number().min(1).required(),
});

export{ 
    newExamSchema
}