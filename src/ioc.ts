import { Container } from "typedi";
import { UpsertRoomRepository } from "./room/adapter/out/UpsertRoomRepository";
import CreateRoomService from "./room/app/CreateRoomService";

Container.set([{ id: "UpsertRoomRepository", value: new UpsertRoomRepository() }]);
Container.set([{ id: "CreateRoomService", value: new CreateRoomService() }]);
