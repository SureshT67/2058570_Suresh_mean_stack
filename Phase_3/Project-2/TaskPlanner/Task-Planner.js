let http = require("http");
let url = require("url");
let fs = require("fs")

let addTask = `
    <h1 style = "text-align : center:">Task Planner<h1/> <h3 style = "text-decoration: underline">Add Task<h3/>
    
    <form action="/data" method="get">
        <label>Emp Id: </label> <input type="text" name="empId"/><br/>
        <label>Task Id: </label> <input type="text" name="taskId"/><br/> 
        <label>Task: </label> <input type="text" name="task"/><br/>
        <label>Deadline: </label> <input type="text" name="deadline"/><br/>
        <input type="submit" value="Add Task" />
    </form>

    <h3 style = "text-decoration: underline">Delete Task</h3>
    <form action="/delete" method="get">
        <label>Task Id</label>
        <input type="text" name="taskId"/><br/> <input type="submit" value="Delete Task"/>
    </form>
    <h3 style = "text-decoration: underline">List Tasks</h3>
    <form action="/display" method="get"> <input type="submit" value="List all tasks" />
    </form>
`
let Result = `
<table border="1";style="border-spacing: 10px;">
<thead>
    <th>Emp ID</th>
    <th>Task ID</th>
    <th>Task</th>
    <th>Deadline</th>
</thead>
</table>
`

let server = http.createServer((req,res)=> {
    console.log(req.url)
    res.setHeader("content-type","text/html");
    res.write(addTask);

    if(req.url != "/favicon.ico"){
        var getPath = url.parse(req.url,true).pathname;
        if(getPath=="/data"){
            
            let info = url.parse(req.url,true).query;
            let check = true;
            let tasks = getTasks();
            for (var i in tasks){
                if (tasks[i].taskId == info.taskId){
                    check= false;
                    res.write("**** Task ID Must be unique *****");
                }
            }
            if (check){
                

            let task = makeJSON(info.empId,info.taskId,info.task,info.deadline);
            tasks.push(task)
            var tasksString = JSON.stringify(tasks, null,2);
            fs.writeFileSync("task.json",tasksString);
            res.write(" New Task Has Been Added");
            }
        }else if(getPath=="/delete"){
            let info = url.parse(req.url,true).query;
            let tasks = getTasks();
            for (var i in tasks){
                if (tasks[i].taskId == info.taskId){
                    tasks.splice(i,1);
                }
            }
           
            var tasksString = JSON.stringify(tasks, null, 2);
            fs.writeFileSync("task.json",tasksString);
            res.write(" Task Has Been Deleted");

        }else if(getPath=="/display"){
            let tasks = getTasks()
            let Data = ``
           
            for (var i in tasks){
                Data += `
                    <table style="border-spacing:15px">
                    <tr>
                        <td>${tasks[i].empId}</td>
                        <td>${tasks[i].taskId}</td>
                        <td>${tasks[i].task}</td>
                        <td>${tasks[i].deadline}</td>
                    </tr>
                    </table>
                `
            }
            res.write(Result)
            res.write(Data)
            res.write(`</table>`)
        }
        res.end();
    }
        
});

function makeJSON(empId,taskId,task,deadline) {
    return {"empId":empId, "taskId":taskId,"task":task, "deadline":deadline};
}
function getTasks(){
    let tasks = new Array();
    try {
        let Data2 = fs.readFileSync("task.json");
        let JString = Data2.toString();
        let json = JSON.parse(JString);
        tasks = [];
        for (var i in json){
            tasks.push(json[i]);
        }
        return tasks;
      } catch (error) {
        return tasks;
    }
}
server.listen(9090,()=>console.log("Server running on port number 9090" ));