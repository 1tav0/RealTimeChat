import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import connect from "./db/connect.js";

//middleware
app.use(express.json());
app.use(cookieParser());
//routes
app.use("/api/v1", authRoute);
app.use("/api/v1", messageRoute);
app.get("/", (req, res) => {
  res.send("Hello from server");
});
// server
const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running in port ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}
start();
