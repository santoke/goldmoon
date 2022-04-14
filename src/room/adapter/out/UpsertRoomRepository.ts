import { Service } from "typedi";
import { CreateRoomDto } from "../../app/port/out/CreateRoomDto";
import { RoomEntity } from "../../domain/RoomEntity";

@Service()
export class UpsertRoomRepository {
  createRoom(dto: CreateRoomDto): RoomEntity {
    return new RoomEntity();
  }
}
