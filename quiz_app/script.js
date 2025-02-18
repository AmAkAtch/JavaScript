const quizData = [
    {
        question:"Who is the Prime minister of India ?",
        options:["Narendra Modi","Obama","Elon Musk","Amitabh Bachhan"],
        answer:"Narendra Modi"
    },
    {
        question:"Who is the Best Choice to hire for Fullstack job ?",
        options:["Candidate with most Experience","Topper Candidate","Candidate with most Knowledge","Rushiraj"],
        answer:"Rushiraj" 
    },
    {
        question:"How many do you think you got right ?",
        options:["2","1","0","I am GOAT, Everything I say becomes Truth"],
        answer:"0" 
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion(){
    const questionE = document.getElementById("question");
    const optionsE = document.getElementById("options");

    const currentQuestion = quizData[currentQuestionIndex];

    questionE.textContent = currentQuestion.question;
    optionsE.innerHTML='';
        
    currentQuestion.options.forEach(option =>{
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");

        button.addEventListener('click',() => {
            if(option === currentQuestion.answer){
                score++;
                currentQuestionIndex++;
            }else{
                currentQuestionIndex++;
            }
            console.log(currentQuestionIndex);
            console.log(score);
            console.log(quizData.length)
            if(currentQuestionIndex<quizData.length){
                loadQuestion();
            }else{
                document.getElementById('quiz-container').innerHTML = `
                    <h2>Quiz Complete!</h2>
                    <p>Your score: ${score} out of ${quizData.length}</p>
                `;
                console.log("End of Line");
            }
        });
        optionsE.appendChild(button);  
    });
};

loadQuestion();


