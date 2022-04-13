import Router from "@koa/router";
import { Container } from "typedi";
import CreateRoomController from "../../../room/adapter/in/CreateRoomController";
import DtoToKoaResponse from "../DtoToKoaResponse";

const roomRouter = new Router({ prefix: "/rooms" });

roomRouter.post("/", (ctx, next) => {
  const controller = Container.get(CreateRoomController);
  const responseDto = controller.createRoom(10, 60, true);

  DtoToKoaResponse(ctx, responseDto);
});

export default roomRouter;
