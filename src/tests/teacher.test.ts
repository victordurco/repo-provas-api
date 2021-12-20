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

describe("GET /teacher", () => {
    test("returns 200 with valid array of teachers", async () => {
        const result = await supertest(app).get("/teacher");
        expect(result.status).toEqual(200);
        expect(Array.isArray(result.body)).toBe(true);
    });
});