import { Container } from "typedi";
import CreateRoomService from "./room/app/CreateRoomService";

Container.set([{ id: "CreateRoomService", value: new CreateRoomService() }]);
