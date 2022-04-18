import "reflect-metadata";
import { Container } from "typedi";
import ormDataSource from "../../../../src/framework/orm/OrmDataSource";
import { HttpStatus } from "../../../../src/framework/web/HttpStatus";
import "../../../../src/ioc";
import CreateRoomController from "../../../../src/room/adapter/in/CreateRoomController";
import initializeConfigVariable from "../../../initializeConfigVariable";

describe("CreateRoomController", () => {
  initializeConfigVariable();

  test("Should return created status", async () => {
    await ormDataSource.initialize();
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
