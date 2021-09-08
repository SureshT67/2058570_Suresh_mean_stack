const getDb = require("../database").getDb

module.exports = class Chat{
    
    constructor(name,message){
        this.name = name;
        this.message = message;
    }

    save(callback){

        const db = getDb();

        db.collection("RecordOfChat").insertOne(this)
        .then(() => {
            callback()
        })
    }

}