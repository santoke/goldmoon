import ValidationError from "../../../../error/ValidationError";
import ConfigVariable from "../../../../external/ConfigVariable";

export default class CreateRoomInput {
  public readonly maxParticipationUsers: number;
  public readonly timeLimitInSeconds: number;
  public readonly userCanChangeDecision: boolean;

  constructor(maxParticipationUsers: number, timeLimitInSeconds: number, userCanChangeDecision: boolean) {
    this.maxParticipationUsers = maxParticipationUsers;
    this.timeLimitInSeconds = timeLimitInSeconds;
    this.userCanChangeDecision = userCanChangeDecision;

    this.validate();
  }

  validate() {
    if (this.maxParticipationUsers < ConfigVariable().getMinNumberRoomParticipationUser()) {
      throw new ValidationError(`Participation_required_${ConfigVariable().getMinNumberRoomParticipationUser()}`);
    }

    if (this.maxParticipationUsers > ConfigVariable().getMaxNumberRoomParticipationUser()) {
      throw new ValidationError("Exceed_maximum_participation_user.");
    }

    if (this.timeLimitInSeconds > ConfigVariable().getMaxTimeLimitInSeconds()) {
      throw new ValidationError("Exceed_maximum_time_limit.");
    }
  }
}
