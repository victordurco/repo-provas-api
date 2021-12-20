CREATE TABLE "courses" (
	"id" serial NOT NULL,
	"period_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "courses_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "exams" (
	"id" serial NOT NULL,
	"url" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"teacher_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	"course_id" integer NOT NULL,
	CONSTRAINT "exams_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "teachers" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "exam_categories" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "exam_categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "classes" (
	"id" serial NOT NULL,
	"teacher_id" integer NOT NULL,
	"course_id" integer NOT NULL,
	CONSTRAINT "classes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "periods" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "periods_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "courses" ADD CONSTRAINT "courses_fk0" FOREIGN KEY ("period_id") REFERENCES "periods"("id");

ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk1" FOREIGN KEY ("category_id") REFERENCES "exam_categories"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk2" FOREIGN KEY ("course_id") REFERENCES "courses"("id");



ALTER TABLE "classes" ADD CONSTRAINT "classes_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "classes" ADD CONSTRAINT "classes_fk1" FOREIGN KEY ("courses_id") REFERENCES "courses"("id");


INSERT INTO exam_categories (name) VALUES ('P1');
INSERT INTO exam_categories (name) VALUES ('P2');
INSERT INTO exam_categories (name) VALUES ('P3');
INSERT INTO exam_categories (name) VALUES ('Exame');
INSERT INTO exam_categories (name) VALUES ('Outros');

INSERT INTO periods (name) VALUES ('1º');
INSERT INTO periods (name) VALUES ('2º');
INSERT INTO periods (name) VALUES ('3º');
INSERT INTO periods (name) VALUES ('4º');
INSERT INTO periods (name) VALUES ('5º');
INSERT INTO periods (name) VALUES ('6º');
INSERT INTO periods (name) VALUES ('7º');
INSERT INTO periods (name) VALUES ('8º');
INSERT INTO periods (name) VALUES ('Optativa');

INSERT INTO courses (period_id, name) VALUES (1, 'Cálculo 1');
INSERT INTO courses (period_id, name) VALUES (2, 'Cálculo 2');
INSERT INTO courses (period_id, name) VALUES (3, 'Cálculo 3');
INSERT INTO courses (period_id, name) VALUES (1, 'Geometria Analítica');
INSERT INTO courses (period_id, name) VALUES (2, 'Álgebra Linear');
INSERT INTO courses (period_id, name) VALUES (1, 'Física 1');
INSERT INTO courses (period_id, name) VALUES (2, 'Física 2');
INSERT INTO courses (period_id, name) VALUES (3, 'Física 3');
INSERT INTO courses (period_id, name) VALUES (2, 'Estrutura de dados');
INSERT INTO courses (period_id, name) VALUES (5, 'Banco de dados');

INSERT INTO teachers (name) VALUES ('Maria Lígia');
INSERT INTO teachers (name) VALUES ('Marcio Rosa');
INSERT INTO teachers (name) VALUES ('Ricardo Amorim');
INSERT INTO teachers (name) VALUES ('Vagner Ferreira');
INSERT INTO teachers (name) VALUES ('Sabrina Fernandes');
INSERT INTO teachers (name) VALUES ('Fabrício Mota');
INSERT INTO teachers (name) VALUES ('Wesley Ribeiro');

INSERT INTO classes (teacher_id, course_id) VALUES (1, 1);
INSERT INTO classes (teacher_id, course_id) VALUES (2, 2);
INSERT INTO classes (teacher_id, course_id) VALUES (2, 3);
INSERT INTO classes (teacher_id, course_id) VALUES (2, 4);
INSERT INTO classes (teacher_id, course_id) VALUES (2, 5);
INSERT INTO classes (teacher_id, course_id) VALUES (3, 9);
INSERT INTO classes (teacher_id, course_id) VALUES (4, 6);
INSERT INTO classes (teacher_id, course_id) VALUES (5, 10);
INSERT INTO classes (teacher_id, course_id) VALUES (6, 7);
INSERT INTO classes (teacher_id, course_id) VALUES (6, 8);
