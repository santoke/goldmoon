import { CreateRoomDto } from "./CreateRoomDto";
import { RoomEntity } from "../../../domain/RoomEntity";

export interface CreateRoomPort {
  createRoom(dto: CreateRoomDto): RoomEntity;
}
