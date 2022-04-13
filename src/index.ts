import app from "./common/config/app";
import { APP_PORT } from "./common/config/secrets";
import logger from "./common/helpers/logger";

app
  .listen(APP_PORT, () => {
    logger.info(`server running on port : ${APP_PORT}`);
    console.log(`server running on port : ${APP_PORT}`);
  })
  .on("error", (e) => logger.error(e));
