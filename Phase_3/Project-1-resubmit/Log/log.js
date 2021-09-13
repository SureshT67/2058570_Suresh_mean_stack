let data = require("./data.json");
const fs = require("fs");
const a = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let firstName="";
  let lastName="";
  let EmpId="";
  let Email="";


  a.question("Enter your First Name: ", (Fname)=>{
    firstName = Fname;
    debugger
    a.question("Enter your Last Name: ",(LName)=>{
        lastName=LName;
        debugger
        a.question("Enter your Employee Id: ",(Id) => {
            EmpId=Id;
            a.question("Enter your Email address:",(email)=>{
                Email=email;

                const currentDate = new Date()

                data.push({
                    firstName:firstName,
                    lastName:lastName,
                    EmpId:EmpId,
                    Email:Email,
                    date : currentDate.getDay() + '/' + currentDate.getMonth() + '/'  + currentDate.getFullYear(),
                    time : currentDate.getHours() + ":" + currentDate.getMinutes() + ':' + currentDate.getSeconds()
                })
                
                fs.writeFileSync("data.json", JSON.stringify(data))
                console.log("New Emplyee logged");
                a.close();
        });
      });
    });
  });


