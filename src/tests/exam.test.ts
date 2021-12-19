import { getConnection, getManager } from "typeorm";
import supertest from "supertest";

import "../setup.ts";
import app, { init } from "../app";

import { validNewExam, newExamWithInvalidCourse, invalidNewExam } from "../factories/examFactory";

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getManager().query(
        `DELETE FROM exams;`
    );
    await getConnection().close();
});

describe("POST /exam", () => {
    test("returns 201 with valid exam body", async () => {
        const body = validNewExam();
        const result = await supertest(app).post("/exam").send(body);
        expect(result.status).toEqual(201);
    });

    test("returns 404 with invalid courseId", async () => {
        const body = newExamWithInvalidCourse();
        const result = await supertest(app).post("/exam").send(body);
        expect(result.status).toEqual(404);
    });

    test("returns 400 with invalid body", async () => {
        const body = invalidNewExam();
        const result = await supertest(app).post("/exam").send(body);
        expect(result.status).toEqual(400);
    });
});
