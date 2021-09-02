let express = require("express");
let app = express();
let http=require("http").Server(app);
let io = require("socket.io")(http);



app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on("connection", socket => {
  socket.on("chat", message => {
    console.log("Message From Client: ", message)
   io.emit("chat",message)
  })
  socket.emit("Chat1","Hello client Thank you for connecting");
})

http.listen(9090,()=>console.log("Server is running on port 9090"))


