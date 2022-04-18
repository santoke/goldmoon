export class CreateRoomDto {
  public readonly maxParticipationUsers: number;
  public readonly timeLimitInSeconds: number;
  public readonly userCanChangeDecision: boolean;

  constructor(maxParticipationUsers: number, timeLimitInSeconds: number, userCanChangeDecision: boolean) {
    this.maxParticipationUsers = maxParticipationUsers;
    this.timeLimitInSeconds = timeLimitInSeconds;
    this.userCanChangeDecision = userCanChangeDecision;
  }
}
