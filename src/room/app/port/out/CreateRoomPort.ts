import { RoomEntity } from "../../../domain/RoomEntity";
import { CreateRoomDto } from "./CreateRoomDto";

export interface CreateRoomPort {
  createRoom(dto: CreateRoomDto): Promise<RoomEntity>;
}
