import "reflect-metadata";
import "../../../../src/ioc";
import request from "supertest";
import { app } from "../../../../src/framework/web/app";
import { HttpStatus } from "../../../../src/framework/web/HttpStatus";
import initializeConfigVariable from "../../../initializeConfigVariable";

describe("RoomRouter", () => {
  initializeConfigVariable();

  test("Should status created", async () => {
    const response = await request(app.callback()).post("/rooms");
    expect(response.status).toBe(HttpStatus.Created);
  });
});
