import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task-Tracker';
  id:string='';
  name:string='';
  task:string='';
  deadline:string='';
  collection:Task[]=[];
  addTask(){
    let task:Task={
      id:this.id,
      name:this.name,
      task:this.task,
      deadline:this.deadline
    }
    this.collection.push(task);
    console.log(this.collection);
  }



}

interface Task{
  id:string;
  name:string;
  task:string;
  deadline:string;
 }
