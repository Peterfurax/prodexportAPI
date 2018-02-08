
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("../routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);

// const axios = require("axios");
// const getApiAndEmit = async socket => {
//   socket.emit("FromAPI", "res.data.currently.temperature");
//   try {
//     const res = await axios.get(
//       "https://api.darksky.net/forecast/PUT_YOUR_API_KEY_HERE/43.7695,11.2558"
//     );
//
//   } catch (error) {
//     console.error(`Error: ${error.code}`);
//   }
// };
const io = socketIo(server);
io.on("connection", socket => {
  socket.emit("FromAPI", "1");
  socket.on("disconnect", () => console.log("Client disconnected"));
});
OPEN_SOCKET = () => {
  // io.on("connection", socket => {
  //   socket.on("disconnect", () => console.log("Client disconnected"));
  // });

}

EMIT_MESSAGE = async socket =>{
  socket.emit("FromAPI", "2");
  // socket.emit(room, message);
  // socket.emit(room, message);
}

server.listen(port, () => console.log(`Listening on port ${port}`));



module.exports = {
OPEN_SOCKET:OPEN_SOCKET,
EMIT_MESSAGE:EMIT_MESSAGE
}
