const questions=[
    {
        question:"Which is the most old language in above options",
        answers:[
            { text:"java", correct:false},
            { text:"python", correct:false},
            { text:"c", correct:true},
            { text:"c++", correct:false},


        ]
    },
    {
        question:"Which one language is used for Frontend web development",
        answers:[
            { text:"R proramming", correct:false},
            { text:"sql", correct:false},
            { text:"Java", correct:false},
            { text:"html", correct:true},
        ]

    },
    {
        question:"Who is the father of computer?",
        answers:[
            { text:"charles babbage", correct:true},
            { text:"Thomas edison", correct:false},
            { text:"Albert Einstein", correct:false},
            { text:"Isaac Newton", correct:false},
        ]

    },
    {
        question:"in the vistual world,WWW stand for",
        answers:[
            { text:"World Without Windows", correct:false},
            { text:"World Wide Web", correct:true},
            { text:"World Website Web", correct:false},
            { text:"Web Webinar Words", correct:false},
        ]

    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn2");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML=questionNO +". "+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)

    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct ==="true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
    selectedBtn.classList.add("incorrect")
}
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled= true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ${score} out of ${question.length}!';
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();


