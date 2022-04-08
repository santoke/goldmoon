export default (minNumberRoomParticipation = 3, maxNumberRoomParticipation = 100, maxTimeLimitInSeconds = 86400) => {
  process.env = Object.assign(process.env, {
    MAX_NUMBER_ROOM_PARTICIPATION: maxNumberRoomParticipation,
    MIN_NUMBER_ROOM_PARTICIPATION: minNumberRoomParticipation,
    MAX_TIME_LIMIT_IN_SECONDS: maxTimeLimitInSeconds.toString(),
  });
};
