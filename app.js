import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import "dotenv/config";
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(process.env.DB_ATLAS_URL);
mongoose.connection.once("open", (err) => {
  if (!err) {
    console.log("Connected to Database");
  }
});

app.use("/api", routes);

const port = 8000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
