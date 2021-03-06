import ValidationError from "../error/ValidationError";

interface ConfigVariable {
  getMinNumberRoomParticipationUser(): number;
  getMaxNumberRoomParticipationUser(): number;
  getMaxTimeLimitInSeconds(): number;
}

export class EnvironmentConfigVariable implements ConfigVariable {
  getMinNumberRoomParticipationUser(): number {
    return this.getNumberValue("MIN_NUMBER_ROOM_PARTICIPATION");
  }

  public getMaxNumberRoomParticipationUser(): number {
    return this.getNumberValue("MAX_NUMBER_ROOM_PARTICIPATION");
  }

  public getMaxTimeLimitInSeconds(): number {
    return this.getNumberValue("MAX_TIME_LIMIT_IN_SECONDS");
  }

  private getNumberValue(name: string): number {
    const envValue = parseInt(this.get(name));
    if (isNaN(envValue)) {
      throw new ValidationError(`env_value_${name}_is_not_number`);
    }

    return envValue;
  }

  private get(name: string): string {
    return process.env[name] || "";
  }
}

export default () => {
  return new EnvironmentConfigVariable();
};
