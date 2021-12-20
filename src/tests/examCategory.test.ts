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

describe("GET /category", () => {
    test("returns 200 with valid array of categories", async () => {
        const result = await supertest(app).get("/category");
        expect(result.status).toEqual(200);
        expect(Array.isArray(result.body)).toBe(true);
    });
});

