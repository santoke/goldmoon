import ValidationError from "../../../../common/error/ValidationError";
import ConfigVariable from "../../../../common/ConfigVariable";

export default class CreateRoomInput {
  public readonly numberOfParticipationUser: number;
  public readonly timeLimitInSeconds: number;
  public readonly userCanChangeDecision: boolean;

  constructor(numberOfParticipationUser: number, timeLimitInSeconds: number, userCanChangeDecision: boolean) {
    this.numberOfParticipationUser = numberOfParticipationUser;
    this.timeLimitInSeconds = timeLimitInSeconds;
    this.userCanChangeDecision = userCanChangeDecision;

    this.validate();
  }

  validate() {
    if (this.numberOfParticipationUser < ConfigVariable().getMinNumberRoomParticipation()) {
      throw new ValidationError(`Participation_required_${ConfigVariable().getMinNumberRoomParticipation()}`);
    }

    if (this.numberOfParticipationUser > ConfigVariable().getMaxNumberRoomParticipation()) {
      throw new ValidationError("Exceed_maximum_participation_user.");
    }

    if (this.timeLimitInSeconds > ConfigVariable().getMaxTimeLimitInSeconds()) {
      throw new ValidationError("Exceed_maximum_time_limit.");
    }
  }
}
