import { Server } from "socket.io";
// import socketio from "socket.io";
import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);
// const io = socketio(server);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST"],
    optionsSuccessStatus: 200
  }
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  // socket.on() is used to listen to the events. can be used both on the client and on server side
  socket.on("disconnect", () => {
    console.log("User disconnected")
  })
})

export {
  app, 
  io,
  server
}