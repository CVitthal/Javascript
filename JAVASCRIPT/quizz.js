var currentQ=0;
const questions=[
{question:"this is question1",
answer:[
{answer:"first",correct:false},
{answer:"first",correct:false},
{answer:"first",correct:true},
{answer:"first",correct:false}
]},
{question:"this is question2",
answer:[
{answer:"first",correct:true},
{answer:"first",correct:false},
{answer:"first",correct:false},
{answer:"first",correct:false}
]},
{question:"this is question3",
answer:[
{answer:"first",correct:false},
{answer:"first",correct:true},
{answer:"first",correct:false},
{answer:"first",correct:false}
]},
{question:"this is question4",
answer:[
{answer:"first",correct:false},
{answer:"first",correct:true},
{answer:"first",correct:false},
{answer:"first",correct:false}
]},
{question:"this is question5",
answer:[
{answer:"first",correct:false},
{answer:"first",correct:true},
{answer:"first",correct:false},
{answer:"first",correct:false}
]}
];
function start(currentQ){
	const quest = document.getElementById("question");
	quest.innerHTML=questions[currentQ].question;
	let ans="";
	const answer=document.getElementById("answer");
	for(let i=0;i<5;i++){
	ans=ans+("<input type='radio' name='op' value="+questions[currentQ].answer[i].correct+">"+questions[currentQ].answer[i].answer+"</br>");
		}
	answer.innerHTML=ans;
}
function nextqn(){
	
	if(currentQ<3){
		currentQ++;
		start(currentQ);
	}
}
start(currentQ);
