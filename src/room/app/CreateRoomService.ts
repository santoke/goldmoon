import { Container, Service } from "typedi";
import { RoomPersistenceAdapter } from "../adapter/out/RoomPersistenceAdapter";
import { CreateRoomUseCase } from "./port/in/CreateRoomUseCase";
import { CreateRoomDto } from "./port/out/CreateRoomDto";

@Service()
export default class CreateRoomService implements CreateRoomUseCase {
  private readonly roomPersistenceAdapter;

  constructor() {
    this.roomPersistenceAdapter = Container.get(RoomPersistenceAdapter);
  }

  public async createRoom(dto: CreateRoomDto) {
    await this.roomPersistenceAdapter.createRoom(dto);
  }
}
