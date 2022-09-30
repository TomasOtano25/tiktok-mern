import { Router, Express } from "express";
import videoRoutes from "./videos.routes";

function routerApi(app: Express) {
  const router = Router();
  app.use("/api/v1", router);
  router.use("/video", videoRoutes);
}

export default routerApi;
