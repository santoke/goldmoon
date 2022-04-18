import { Inject, Service } from "typedi";
import { CreateRoomDto } from "../../app/port/out/CreateRoomDto";
import { CreateRoomPort } from "../../app/port/out/CreateRoomPort";
import { RoomEntity } from "../../domain/RoomEntity";
import { UpsertRoomRepository } from "./UpsertRoomRepository";

@Service()
export class RoomPersistenceAdapter implements CreateRoomPort {
  constructor(@Inject("UpsertRoomRepository") private upsertRoomRepository: UpsertRoomRepository) {}

  async createRoom(dto: CreateRoomDto): Promise<RoomEntity> {
    return this.upsertRoomRepository.createRoom(dto);
  }
}
