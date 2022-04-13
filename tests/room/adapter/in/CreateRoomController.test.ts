import "reflect-metadata";
import "../../../../src/ioc";
import CreateRoomController from "../../../../src/room/adapter/in/CreateRoomController";
import { HttpStatus } from "../../../../src/framework/web/HttpStatus";
import initializeConfigVariable from "../../../initializeConfigVariable";
import { Container } from "typedi";

describe("CreateRoomController", () => {
  initializeConfigVariable();

  test("Should return created status", () => {
    const controller = Container.get(CreateRoomController);

    const response = controller.createRoom(3, 10, true);
    expect(response.statusCode).toBe(HttpStatus.Created);
  });

  test("Should return conflict status with minimum number of participation", () => {
    const controller = Container.get(CreateRoomController);

    const response = controller.createRoom(0, 10, true);
    expect(response.statusCode).toBe(HttpStatus.Conflict);
  });
});
