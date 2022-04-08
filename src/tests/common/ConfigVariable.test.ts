import ConfigVariable from "../../common/ConfigVariable";
import ValidationError from "../../common/error/ValidationError";

describe("ConfigVariable", () => {
  const config = ConfigVariable();

  test("should success", () => {
    const maxNumberRoomParticipation = 10;
    const maxTimeLimitInSeconds = 60;
    process.env = Object.assign(process.env, {
      MAX_NUMBER_ROOM_PARTICIPATION: maxNumberRoomParticipation,
      MAX_TIME_LIMIT_IN_SECONDS: maxTimeLimitInSeconds.toString(),
    });

    expect(config.getMaxNumberRoomParticipation()).toBe(maxNumberRoomParticipation);
    expect(config.getMaxTimeLimitInSeconds()).toBe(maxTimeLimitInSeconds);
  });

  test("should raise with empty values", () => {
    process.env = Object.assign(process.env, {
      MAX_TIME_LIMIT_IN_SECONDS: "",
    });

    expect(() => config.getMaxTimeLimitInSeconds()).toThrow(ValidationError);
  });
});
