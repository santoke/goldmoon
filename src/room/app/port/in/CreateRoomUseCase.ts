import CreateRoomInput from "./CreateRoomInput";

export interface CreateRoomUseCase {
  createRoom(input: CreateRoomInput): void;
}
