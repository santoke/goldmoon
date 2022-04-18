import { Inject, Service } from "typedi";
import { Logger, LoggerInterface } from "../../../external/Logger";
import { HttpStatus } from "../../../framework/web/HttpStatus";
import { ResponseDto } from "../../../framework/web/ResponseDto";
import CreateRoomInput from "../../app/port/in/CreateRoomInput";
import { CreateRoomUseCase } from "../../app/port/in/CreateRoomUseCase";
import { CreateRoomDto } from "../../app/port/out/CreateRoomDto";

@Service()
export default class CreateRoomController {
  constructor(
    @Logger() private logger: LoggerInterface,
    @Inject("CreateRoomService") private createRoomService: CreateRoomUseCase
  ) {}

  public createRoom(
    maxParticipationUsers: number,
    timeLimitInSeconds: number,
    userCanChangeDecision: boolean
  ): ResponseDto {
    try {
      const createRoomInput = new CreateRoomInput(maxParticipationUsers, timeLimitInSeconds, userCanChangeDecision);
      const createRoomDto = new CreateRoomDto(
        createRoomInput.maxParticipationUsers,
        createRoomInput.timeLimitInSeconds,
        createRoomInput.userCanChangeDecision
      );
      this.createRoomService.createRoom(createRoomDto);
    } catch (error) {
      this.logger.error(String(error));
      return new ResponseDto(HttpStatus.Conflict);
    }

    return new ResponseDto(HttpStatus.Created);
  }
}
