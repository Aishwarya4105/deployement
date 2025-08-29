const quizData=[
{q:"Rainbow consist of how many colours?",a:"7",b:"5",c:"10",d:"99",correct:"a"},
{q:"Which animal is known as the king of the jungle?",a:"Elephant",b:"Lion",c:"Tiger",d:"Fox",correct:"b"},
{q:"Name the National fruit of India?",a:"Apple",b:"Jackfruit",c:"Dragon fruit",d:"Mango",correct:"d"},
{q:"What is the chemical symbol for water?",a:"h2",b:"b2o",c:"h2o",d:"o2",correct:"c"},
{q:"Which is the largest bird in the world?",a:"Ostrich",b:"crow",c:"Parrot",d:"Eagle",correct:"a"}
];

let currentQuiz=0, score=0;

const questionE1= document.getElementById("question");
const answer= document.querySelectorAll(".answer");
const a_text= document.getElementById("a_text");
const b_text= document.getElementById("b_text");
const c_text= document.getElementById("c_text");
const d_text= document.getElementById("d_text");
const submitBtn= document.getElementById("submit");
const scoreBtn= document.getElementById("score");

function loadquiz(){
let q= quizData[currentQuiz];
questionE1.textContent=q.q;
a_text.textContent=q.a;
b_text.textContent=q.b;
c_text.textContent=q.c;
d_text.textContent=q.d;
answer.forEach(a=>a.checked=false);
}

submitBtn.addEventListener("click",()=>{
let selected=[...answer].find(a=>a.checked)?.id;
if(!selected){alert('Please select an answer before proceeding');
return;
}
if(selected===quizData[currentQuiz].correct)score++;
currentQuiz++

if(currentQuiz<quizData.length){
loadquiz();
}else{
document.querySelector(".quiz-container").innerHTML= `<h2> Quiz Over! score:${score}/${quizData.length}</h2><button onclick="location.reload()">Play Again</button>`;}

});
scoreBtn.addEventListener("click",()=>alert(`Your current score is: ${score}/${quizData.length}`));

loadquiz();
