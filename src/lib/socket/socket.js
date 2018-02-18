// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");

// const bodyParser = require("body-parser");
// const compression = require("compression");
// const port = process.env.PORT || 4001;
// const index = require("../routes/index");

// const app = express();
// app.use(index);
// // - Configure `app` to use `bodyParser()`
// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );
// // - Security disable x-powered-by
// app.disable("x-powered-by");
// // - This will let us get the data from a POST
// app.use(bodyParser.json());
// // - Configure `app.set()` to indent json with 2 spaces in httpResponse
// app.set("json spaces", 2);
// // compression
// app.use(compression);
// const server = http.createServer(app);
// // const io = socketIo(server);

// // io.on("connection", socket => {
// //   console.log("New client connected");
// //   // console.log('New client connected'), setInterval(
// //   //   () => getApiAndEmit(socket),
// //   //   10000
// //   // )
// //   socket.emit("FromAPI", "res.data.currently.temperature");
// //   socket.on("disconnect", () => console.log("Client disconnected"));
// // });

// // const getApiAndEmit = async socket => {
// //   socket.emit('FromAPI', 'res.data.currently.temperature')
// //   try {
// //     const res = await axios.get(
// //       'https://api.darksky.net/forecast/PUT_YOUR_API_KEY_HERE/43.7695,11.2558'
// //     )

// //   } catch (error) {
// //     console.error(`Error: ${error.code}`)
// //   }
// // }

// // const EMIT_MESSAGE = async => {
// //   var socket = io()
// //   io.emit('FromAPI', '2')
// //   try {
// //     const res = await axios.get(
// //       'https://api.darksky.net/forecast/PUT_YOUR_API_KEY_HERE/43.7695,11.2558'
// //     )

// //   } catch (error) {
// //     console.error(`Error: ${error.code}`)
// //   }
// // }

// // const OPEN_SOCKET = data => {
// //   io.on("connection", socket => {
// //     console.log("New client connected");
// //     // console.log('New client connected'), setInterval(
// //     //   () => getApiAndEmit(socket),
// //     //   10000
// //     // )
// //     socket.emit("FromAPI", data);
// //     socket.on("disconnect", () => console.log("Client disconnected"));
// //   });
// // };

// // const EMIT_MddESSAGE = () =>{
// //   socket.emit('FromAPI', '2')
// //   // socket.emit(room, message)
// //   // socket.emit(room, message)
// // }

// server.listen(port, () => console.log(`Listening on port ${port}`));

// module.exports = {
//   app: app
// };
