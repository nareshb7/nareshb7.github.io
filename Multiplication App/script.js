const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl =document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));


let correctAnswer = num1* num2;

questionEl.innerHTML = `What is ${num1} multiply by ${num2}`;

scoreEl.innerHTML= `Score : ${score}`;

formEl.addEventListener("submit", ()=>{
    const userAns= +inputEl.value;
    if (userAns===correctAnswer){
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}

function resetScore(){
    localStorage.setItem("score", 0);
    scoreEl.innerHTML= `Score : ${score}`;
};
//resetScore();
