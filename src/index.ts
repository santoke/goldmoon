import "reflect-metadata";
import "./ioc";
import listen from "./framework/web/app";

// TODO : temporary env vars
process.env = Object.assign(process.env, {
  MAX_NUMBER_ROOM_PARTICIPATION: 100,
  MIN_NUMBER_ROOM_PARTICIPATION: 3,
  MAX_TIME_LIMIT_IN_SECONDS: 3600,
});

listen(3000);
