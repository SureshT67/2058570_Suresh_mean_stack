import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
    quizzes:Quiz[]=[];
    currentQuiz=0;

    rightAnswer=0;
    wrongAnswer=0;
    
    Result = false;
   output =" ";


  constructor(public quizService:QuizService) { }

  ngOnInit(): void {
    this.quizzes =this.quizService.getdata();
  }
onAnswer(option:boolean){
  setTimeout(() =>{
    this.currentQuiz++;
  }, 1000);
  
  if(option){
    this.rightAnswer++;
  }else{
    this.wrongAnswer++;
  }

  
}
ShowResult(){
  this.Result = true;
  
  if(this.rightAnswer>=7){
     this.output="PASS";
  }
  else{
    this.output="FAIL";
  }
 
}

}

