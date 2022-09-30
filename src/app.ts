import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import routerApi from "./routes";
import path from "path";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(
  fileUpload({
    tempFileDir: "./uploads",
    useTempFiles: true,
    preserveExtension: true,
    safeFileNames: true,
  })
);

app.use(express.json());

routerApi(app);

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

export default app;
