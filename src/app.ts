import express from "express";
import userRoutes from "./routes/user.route";
import placeRoutes from "./routes/place.route";

import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, Backend is available");
});

app.use("/api", userRoutes);
app.use("/api/place", placeRoutes);

export default app;
