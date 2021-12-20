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
        const body = { id: 1 };
        const result = await supertest(app).get("/course/teachers").send(body);
        expect(result.status).toEqual(200);
    });

    test("returns 404 with invalid courseId", async () => {
        const body = { id: 100000000 };
        const result = await supertest(app).get("/course/teachers").send(body);
        expect(result.status).toEqual(404);
    });
});
