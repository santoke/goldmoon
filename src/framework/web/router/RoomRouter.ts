import * as Router from "@koa/router";
import { Container } from "typedi";
import CreateRoomController from "../../../room/adapter/in/CreateRoomController";

const roomRouter = new Router({ prefix: "/rooms" });

roomRouter.post("/", (ctx, next) => {
  const controller = Container.get(CreateRoomController);
  controller.createRoom(10, 60, true);
});

export default roomRouter;
