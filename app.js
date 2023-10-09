
const startButton = document.querySelector('.start-button');
const container = document.querySelector('.container');
const nextButton = document.getElementById('next-button');
const startAgain = document.getElementById('start-again');


startButton.addEventListener('click', startQuizz);



let numofq = -1; // in JSON file questions are start from zero, so i make number of question (numofq) -1 so when the function start it will start being increased
function startQuizz(e) {
    numofq++; // question zero

    startButton.style.display= 'none';
    var veri = fetch("quizz.json")
        // .then(response => console.log(response))
        .then(response => response.json())
        .then(data => {

        container.innerHTML = `<div class="show-question">
        <p>${data.questions[numofq].question}</p>
        <button id="op1" value="op1" >${data.questions[numofq].option1}</button>
        <button id="op2" value="op2" >${data.questions[numofq].option2}</button>
        <button id="op3" value="op3" >${data.questions[numofq].option3}</button>
        <button id="op4" value="op4" >${data.questions[numofq].option4}</button>   
        </div>`;
        

        const buttons = document.querySelectorAll('.show-question button');
        const result = document.getElementById('result');
        buttons.forEach(button => {
            button.addEventListener('click', function findButton() {
                // console.log('clicked');
                if(button.textContent == data.questions[numofq].answer){
                    // console.log('True answer!');
                    result.innerHTML = 'True Answer!'
                }else {
                    // console.log('Wrong answer!');
                    result.innerHTML = 'Wrong answer!'
                }
            })
           
        });

    });

    result.innerHTML = '';
    nextButton.style.display= 'block';

   
    nextButton.addEventListener('click',startQuizz);

    if(numofq == 1){
        nextButton.style.display = 'none'; 
        startAgain.style.display = 'block';
    }
}



