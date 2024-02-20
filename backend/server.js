import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.routes.js";
import connect from "./db/connect.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from server");
});
app.use(express.json());
app.use("/api/v1", authRoute);

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
