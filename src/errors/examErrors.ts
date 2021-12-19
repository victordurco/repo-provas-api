
class InvalidTeacher extends Error {
  constructor() {
    super('Professor inválido');
    this.name = 'InvalidTeacher';
  }
}

class InvalidCourse extends Error {
  constructor() {
    super('Disciplina inválida');
    this.name = 'InvalidCourse';
  }
}

class InvalidCategory extends Error {
  constructor() {
    super('Categoria de prova inválida');
    this.name = 'InvalidCategory';
  }
}


export { 
    InvalidTeacher, 
    InvalidCourse, 
    InvalidCategory
}