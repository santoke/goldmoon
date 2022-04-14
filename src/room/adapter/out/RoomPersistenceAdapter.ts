import { Inject } from "typedi";
import { CreateRoomDto } from "../../app/port/out/CreateRoomDto";
import { CreateRoomPort } from "../../app/port/out/CreateRoomPort";
import { RoomEntity } from "../../domain/RoomEntity";
import { UpsertRoomRepository } from "./UpsertRoomRepository";

export class RoomPersistenceAdapter implements CreateRoomPort {
  constructor(@Inject("UpsertRoomRepository") private upsertRoomRepository: UpsertRoomRepository) {}

  createRoom(dto: CreateRoomDto): RoomEntity {
    return this.upsertRoomRepository.createRoom(dto);
  }
}
