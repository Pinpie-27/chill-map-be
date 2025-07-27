import express from "express";
import userRoutes from "./routes/user.route";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, Backend is available");
});

app.use("/api", userRoutes);

export default app;
