import Router from "@koa/router";

const mainRouter = new Router();

mainRouter.get("/liveness", (ctx, next) => {
  ctx.body = "i_am_alive";
});

export default mainRouter;
