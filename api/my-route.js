import { app } from "../app";
import router from "../routers/User";
app.use("/api/", router);
export { app };
