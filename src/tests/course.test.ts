import { getConnection } from "typeorm";
import supertest from "supertest";

import "../setup.ts";
import app, { init } from "../app";


beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /course/teachers", () => {
    test("returns 200 with valid courseId", async () => {
        const result = await supertest(app).get("/course/1/teachers");
        expect(result.status).toEqual(200);
        expect(Array.isArray(result.body)).toBe(true);
    });

    test("returns 404 with invalid courseId", async () => {
        const result = await supertest(app).get("/course/1000000/teachers");
        expect(result.status).toEqual(404);
    });
});

describe("GET /course", () => {
    test("returns 200 with array of courses", async () => {
        const result = await supertest(app).get("/course");
        expect(result.status).toEqual(200);
        expect(Array.isArray(result.body)).toBe(true);
    });
});

describe("GET /course/exams", () => {
    test("returns 200 with array of courses", async () => {
        const result = await supertest(app).get("/course/exams");
        expect(result.status).toEqual(200);
        expect(Array.isArray(result.body)).toBe(true);
    });
});
