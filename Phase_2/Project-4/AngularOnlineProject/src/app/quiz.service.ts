import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes:Quiz[]=[{
    question:'What is the main reason so many people moved to California in 1849?',
    answer:[
      {option:' a. California land was fertile, plentiful, and inexpensive', correct:false},
      {option:' b. Gold was discovered in central California. ', correct:true},
      {option:' c. The east was preparing for a civil war.', correct:false},
      {option:' d. They wanted to establish religious settlements.', correct:false}
    ]
  },
  {
    question:'When analyzing your students’ pretest and posttest scores to determine if your teaching has had a significant effect, an appropriate statistic to use is the t-test for:',
    answer:[
      {option:' a. Dependent samples', correct:true},
      {option:' b. Heterogenous samples ', correct:false},
      {option:' c. Homogenous samples', correct:false},
      {option:' d. Independent samples', correct:false}
    ]
  },
  {
    question:'Which of these assessment findings, if identified in a client who has pneumonia, indicates that the client needs suctioned?',
    answer:[
      {option:' a. Absence of adventitious breath sounds.', correct:false},
      {option:' b. Inability to cough up sputum. ', correct:true},
      {option:' c. Respiratory rate of 18 breaths per minute.', correct:false},
      {option:' d. Wheezing prior to bronchodilator therapy.', correct:false}
    ]
  },
  {
    question:'What is the average effective radiation dose from chest CT?',
    answer:[
      {option:' a. 1-7 mSv', correct:true},
      {option:' b. 8-15 mSv ', correct:false},
      {option:' c. 16-24 mSv ', correct:false},
      {option:' d. 24-32 mSv', correct:false}
    ]
  },
  {
    question:'Idaho is widely known for its:',
    answer:[
      {option:' a. Apples', correct:false},
      {option:' b. Corn', correct:false},
      {option:' c. Potatoes', correct:true},
      {option:' d. Wheat', correct:false}
    ]
  },
  {
    question:'Number of bit used by the IPv6 address',
    answer:[
      {option:' a. 32 bit', correct:false},
      {option:' b. 64 ', correct:false},
      {option:' c. 128', correct:true},
      {option:' d. 256', correct:false}
    ]
  },
  {
    question:'Which of the following programming language is used to create programs like applets?',
    answer:[
      {option:' a. COBOL', correct:false},
      {option:' b. C Language ', correct:false},
      {option:' c. Java', correct:true},
      {option:' d. Ruby', correct:false}
    ]
  },
  {
    question:'Which one programming language is exclusively used for artificial intelligence',
    answer:[
      {option:' a. C language', correct:false},
      {option:' b. Java ', correct:false},
      {option:' c. J2EE', correct:false},
      {option:' d. Prolog', correct:true}
    ]
  },
  {
    question:'Firewall in computer is used for',
    answer:[
      {option:' a. Security', correct:true},
      {option:' b. Data Transmission ', correct:false},
      {option:' c. Authentication', correct:false},
      {option:' d. Monitoring', correct:false}
    ]
  },
  {
    question:'First computer virus is known as',
    answer:[
      {option:' a. Rabbit', correct:false},
      {option:' b. Creeper Virus', correct:true},
      {option:' c. Elk Cloner', correct:false},
      {option:' d. SCA Virus', correct:false}
    ]
  }
]
  constructor() { }

  getdata(){
    return this.quizzes
  }
}
