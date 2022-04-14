import CreateRoomInput from "../../app/port/in/CreateRoomInput";
import { CreateRoomUseCase } from "../../app/port/in/CreateRoomUseCase";
import { ResponseDto } from "../../../framework/web/ResponseDto";
import { HttpStatus } from "../../../framework/web/HttpStatus";
import { Inject, Service } from "typedi";
import { Logger, LoggerInterface } from "../../../external/Logger";

@Service()
export default class CreateRoomController {
  constructor(
    @Logger() private logger: LoggerInterface,
    @Inject("CreateRoomService") private createRoomService: CreateRoomUseCase
  ) {}

  public createRoom(
    numberOfParticipationUser: number,
    timeLimitInSeconds: number,
    userCanChangeDecision: boolean
  ): ResponseDto {
    try {
      const createRoomInput = new CreateRoomInput(numberOfParticipationUser, timeLimitInSeconds, userCanChangeDecision);
      this.createRoomService.createRoom(createRoomInput);
    } catch (error) {
      this.logger.error(String(error));
      return new ResponseDto(HttpStatus.Conflict);
    }

    return new ResponseDto(HttpStatus.Created);
  }
}
