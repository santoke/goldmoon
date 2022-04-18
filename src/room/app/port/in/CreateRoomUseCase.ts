import { CreateRoomDto } from "../out/CreateRoomDto";

export interface CreateRoomUseCase {
  createRoom(input: CreateRoomDto): void;
}
