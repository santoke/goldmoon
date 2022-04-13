import { Service } from "typedi";
import { CreateRoomUseCase } from "./port/in/CreateRoomUseCase";

@Service()
export default class CreateRoomService implements CreateRoomUseCase {
  public createRoom() {}
}
