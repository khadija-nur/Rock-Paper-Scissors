// Define variables
const optionsContainer =document.querySelector(".icons");

const options = Array.from(optionsContainer.children);
const userScore = document.querySelector(".scoreCount");
scoreCount = 0;

const rules = document.querySelector(".rulesBtn");
const rulesModal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close");

const playBtn = document.querySelector(".play");

const mainBody = document.querySelector("main");
const results = document.querySelector(".results");
const resultscomment = document.querySelector(".resultP");

const houseResults = document.querySelector(".house");
const userResults = document.querySelector(".user");


function showResults(machineAnswervalue, userAnswervalue ){
   console.log(machineAnswervalue, userAnswervalue )
   document.getElementById("user-pick").src = `./instructions/images/icon-${userAnswervalue}.svg`;
   document.getElementById("user-pick").className = `${userAnswervalue}`;
   document.getElementById("house-pick").src = `./instructions/images/icon-${machineAnswervalue}.svg`;
   document.getElementById("house-pick").className = `${machineAnswervalue}`; 
   document.getElementById("house-pick-border").className = `border border-${machineAnswervalue}`
   document.getElementById("user-pick-border").className = `border border-${userAnswervalue}`
}


optionsContainer.addEventListener("click", e =>{

   
   const userAnswerValue = e.target.classList.value;
   const machineAnswer = options[Math.floor(Math.random() * 3)];
   const machineAnswerValue = machineAnswer.classList.value;

   console.log(resultscomment.textContent);

//   console.log("machine answer = " + machineAnswerValue)
      mainBody.classList.add("hidden");
      results.classList.remove("hidden");
      
      console.log('you picked '+userAnswerValue);
      console.log('house picked '+machineAnswerValue);
      // console.log(resultscomment.innerHTML);

      if (userAnswerValue == machineAnswerValue){
         resultscomment.textContent = "you draw";

         // console.log("you draw")
         showResults(machineAnswerValue, userAnswerValue);
      }
      else if(machineAnswerValue == "rock" ){
         if(userAnswerValue == "paper"){
            resultscomment.textContent = "you win";

            showResults("rock","paper");
         }
         else{
            resultscomment.textContent = "you lose";

            showResults("rock","scissors");
         }
      }
      else if(machineAnswerValue == "paper"){
         if(userAnswerValue == "rock"){
            resultscomment.textContent = "House wins";

            showResults("paper","rock");
         }
         else{
            resultscomment.textContent = "You win";

            showResults("paper","scissors");
         }
      }
      else{
         if(userAnswerValue == "rock"){
            resultscomment.textContent = "you win";
            showResults("scissors","rock");
         }
         else{
            resultscomment.textContent = "you lose";

            showResults("scissors","paper");
         }
      } 
      console.log(resultscomment.textContent);
 
      
      if (resultscomment.textContent == "you lose"){
         console.log(scoreCount)
         scoreCount += -1 ;
         userScore.innerHTML = String(scoreCount);
      }
      else if (resultscomment.textContent == "you win"){
         scoreCount += 1 ;
         userScore.innerHTML = String(scoreCount);
      }
})

playBtn.addEventListener("click", e =>{
   mainBody.classList.remove("hidden");
   results.classList.add("hidden");
})

rules.addEventListener("click", openModal = () =>{
      rulesModal.classList.remove("hidden");
});
closeBtn.addEventListener("click", closeModal =() => {
   rulesModal.classList.add("hidden");
});


