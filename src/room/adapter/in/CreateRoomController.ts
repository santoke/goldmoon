import CreateRoomInput from "../../app/port/in/CreateRoomInput";
import { Service } from "typedi";
import CreateRoomService from "../../app/CreateRoomService";

@Service()
export default class CreateRoomController {
  private createRoomService: CreateRoomService;

  constructor(createRoomService: CreateRoomService) {
    this.createRoomService = createRoomService;
  }

  public createRoom(
    numberOfParticipationUser: number,
    timeLimitInSeconds: number,
    userCanChangeDecision: boolean
  ): void {
    const createRoomInput = new CreateRoomInput(numberOfParticipationUser, timeLimitInSeconds, userCanChangeDecision);
    console.log(createRoomInput);
  }
}
