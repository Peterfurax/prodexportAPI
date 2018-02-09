const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
// const axios = require('axios')

const port = process.env.PORT || 4001;
const index = require("../routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
  console.log("New client connected");
  // console.log('New client connected'), setInterval(
  //   () => getApiAndEmit(socket),
  //   10000
  // )
  socket.emit("FromAPI", "res.data.currently.temperature");
  socket.on("disconnect", () => console.log("Client disconnected"));
});

// const getApiAndEmit = async socket => {
//   socket.emit('FromAPI', 'res.data.currently.temperature')
//   try {
//     const res = await axios.get(
//       'https://api.darksky.net/forecast/PUT_YOUR_API_KEY_HERE/43.7695,11.2558'
//     )

//   } catch (error) {
//     console.error(`Error: ${error.code}`)
//   }
// }

// const EMIT_MESSAGE = async => {
//   var socket = io()
//   io.emit('FromAPI', '2')
//   try {
//     const res = await axios.get(
//       'https://api.darksky.net/forecast/PUT_YOUR_API_KEY_HERE/43.7695,11.2558'
//     )

//   } catch (error) {
//     console.error(`Error: ${error.code}`)
//   }
// }

const OPEN_SOCKET = data => {
  io.on("connection", socket => {
    console.log("New client connected");
    // console.log('New client connected'), setInterval(
    //   () => getApiAndEmit(socket),
    //   10000
    // )
    socket.emit("FromAPI", data);
    socket.on("disconnect", () => console.log("Client disconnected"));
  });
};

// const EMIT_MddESSAGE = () =>{
//   socket.emit('FromAPI', '2')
//   // socket.emit(room, message)
//   // socket.emit(room, message)
// }

server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {
  OPEN_SOCKET: OPEN_SOCKET
};
