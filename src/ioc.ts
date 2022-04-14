import { Container } from "typedi";
import CreateRoomService from "./room/app/CreateRoomService";
import { UpsertRoomRepository } from "./room/adapter/out/UpsertRoomRepository";

Container.set([
  { id: "CreateRoomService", value: new CreateRoomService() },
  { id: "UpsertRoomRepository", value: new UpsertRoomRepository() },
]);
