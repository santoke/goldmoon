import Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import mainRouter from "./router/MainRouter";

const listen = (port: number) => {
  const app = new Koa();
  app.use(bodyParser());
  app.use(mainRouter.routes());

  app.listen(port);
  console.log(`App_is_listening_${port}`);
};

export default listen;
