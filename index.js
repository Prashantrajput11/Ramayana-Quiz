var readlineSync=require('readline-sync');
const chalk = require('chalk');

 
// console.log(chalk.blue('Hello world!'));
var userName=readlineSync.question("Please, enter your name :");
console.log(chalk.bgRed(` Hi ${userName}, welcome to the quiz on Ramayana`))



  


console.log(chalk.bgYellow(`Instructions for the quiz:`));
console.log(chalk`
  There are {bgRed 5} Questions in Level 1.
    
`);
console.log(chalk.bgRedBright(`The scoring is calculated as:`));

console.log(`a:${chalk.bgGreenBright(`for every correct answer, you will get 2 points`)}

b: ${chalk.bgRedBright(`for every incorrect choice, you score will be deducted by 1 `)} 

Your high score will be displayed at the end of the quiz`)


var score=0;
var highscore=[
  {
  name:"abhishek",
  score:4
},
{
  name:"chetan",
  score:5
}


]

function quiz(question,answer)
{
var userans=readlineSync.question(question);
if(userans===answer)
{
  console.log(chalk.bgGreen.black("yay ! right"));
  score=score+2;
  console.log(`your score is ${score}`);
}
else
{
  console.log(chalk.bgRed("oops! this is a wrong choice"));
  score=score-1;
  console.log(`your score is ${score}`);
}
}
// quiz(question,answer);


var questions=[
  {
  
  question:`Question 1:   who killed Ravana  ?
  a: Lord Ram,
  b: Lord Lakshman  `,
answer:"a"
  
},
  {
     question:` Question 2: Who was the brother of sugriv?
      a: Lord Hanuman,
      b: Bali  `,
answer:"b" 
  },

  {
     question:` Question 3 :Lakshmana is considered to be the incarnation of whom??
      a: Sheshnag
      b: Lord Brahma  `,
answer:"a" 
  },

  {
     question:`Question 4:Ravana was a devotee of the god.?
      a: Lord Shiva
      b: Lord Vishnu
      c:Lord Hanuman  `,
answer:"a" 
  },
  {
     question:`Question 5:What was the name of Lord Rama's father?
      a: Rajadhiraj
      b: Nahapana
      c: Dasaratha  `,
answer:"c" 
  },
  
  ]

for(var i=0;i<questions.length;i++)
{
  var currQuestion=questions[i];
  quiz(currQuestion.question,currQuestion.answer);

}


// has the current user beaten the highscores

console.log(` your total score is ${score}`);
highscore.forEach(function(curr,i){
  if(score>curr.score)
    {
      console.log(chalk.bgGreen.black(` Woah ! You  have beaten the high score of  player ${i+1}`));
    }
   
  
  
  }
)



// var userLevel=readlineSync.question("Do you wish to enter the level two?:");

// if(userLevel=="yes")
// {
//   console.log("Glad ! here are the questions for level two");

// }

// var questions=[
//   {
  
//   question:`Question 1: who was brother of Stefan? 
//   a: Damon Salvatore,
//   b: Matt`,
// answer:"a"
  
// },
//   {
//      question:` Question 2: who was original vampire?
//       a: Damon Salvatore,
//       b: Elijah`,
// answer:"b" 
//   },

//   {
//      question:` Question 3: who was the doppelganger(lookalike) of Katherine Peirce?
//       a: Caroline Forbes
//       b: Elena Gilbert`,
// answer:"b" 
//   },

//   {
//      question:`Question 4:Who turned the Salvatore brothers into vampires ?
//       a: Klaus
//       b: Elijah
//       c:Katherine Pierce`,
// answer:"c" 
//   },
//   {
//      question:`Question 5: who was Tyler Lockwood?
//       a: a vampire
//       b: a witch
//       c: a werewolf`,
// answer:"c" 
//   },
  
//   ]

// for(var i=0;i<questions.length;i++)
// {
//   var currQuestion=questions[i];
//   quiz(currQuestion.question,currQuestion.answer);
// }

