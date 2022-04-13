import Koa from "koa";
import bodyParser from "koa-bodyparser";
import mainRouter from "./router/MainRouter";
import roomRouter from "./router/RoomRouter";

export const app = new Koa();
app.use(bodyParser());
app.use(mainRouter.routes());
app.use(roomRouter.routes());

export const listen = (port: number) => {
  app.listen(port);
  console.log(`App_is_listening_${port}`);
};
