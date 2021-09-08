const express = require("express");
const socket = require("socket.io")
const path = require("path");
const Chat = require("./model/chat");
const mongoConnect = require("./database").mongoConnect;

const app = express();

app.use(express.urlencoded({extended : true}))

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname , "view" , "index.html"))
})

mongoConnect(() => {

    const server = app.listen(9090,() => {
    console.log("Application Started")


const io = socket(server);


io.on("connection",(socket) => {

    socket.on("dataFromClient",(data) => {

        const chat = new Chat(data.name,data.message);
        console.log(chat);
        chat.save(() => {
            console.log("Done")
        })
       
    })

})

})
})
