import Koa from "koa";
import bodyParser from "koa-bodyparser";
import mainRouter from "./router/MainRouter";
import roomRouter from "./router/RoomRouter";

const listen = (port: number) => {
  const app = new Koa();
  app.use(bodyParser());
  app.use(mainRouter.routes());
  app.use(roomRouter.routes());
  app.listen(port);
  console.log(`App_is_listening_${port}`);
};

export default listen;
