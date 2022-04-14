import "reflect-metadata";
import DataSource from "./framework/orm/DataSource";
import { listen } from "./framework/web/app";
import "./ioc";

// TODO : temporary env config variables
process.env = Object.assign(process.env, {
  MAX_NUMBER_ROOM_PARTICIPATION: 100,
  MIN_NUMBER_ROOM_PARTICIPATION: 3,
  MAX_TIME_LIMIT_IN_SECONDS: 3600,
});

DataSource.initialize()
  .then(() => {
    listen(3000);
  })
  .catch((error) => {
    console.log(`Database_initialize_error: ${error}`);
  });
