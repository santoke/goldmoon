export class RoomEntity {
  private id = 0;
  private code = "";
  private numberOfParticipationUser = 0;
  private timeLimitInSeconds = 0;
  private users: Array<UserEntity> = [];

  public createHashCode(): string {
    return "";
  }

  public enterUser(user: UserEntity): void {
    if (this.numberOfParticipationUser + 1 > this.users.length) {
      throw new Error("Exceed participation");
    }

    this.users.push(user);
  }

  public leaveUser(user: UserEntity): void {}
}
