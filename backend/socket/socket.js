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

// create a map of the sockets that are connected for that userid
const userSocketMap = {}; // {userid: socketId}

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  // socket.on() is used to listen to the events. can be used both on the client and on server side
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  })
})

export {
  app, 
  io,
  server
}