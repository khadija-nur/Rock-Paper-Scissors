// Define variables
const optionsContainer =document.querySelector(".icons");
const options = Array.from(optionsContainer.children);
const machineAnswer = options[Math.floor(Math.random() * 3)];
const userScore = document.querySelector(".scoreCount");

const rules = document.querySelector(".rulesBtn");
const rulesModal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close");

const playBtn = document.querySelector(".play");

const mainBody = document.querySelector("main");
const results = document.querySelector(".results");
const resultscomment = document.querySelector(".resultP");

const houseResults = document.querySelector(".house");
const userResults = document.querySelector(".user");
optionsContainer.addEventListener("click", e =>{
   const userAnswerValue = e.target.classList.value;
   mainBody.style.display = "none";

      if (e.target == machineAnswer){
         results.appendChild(e.target);
         houseResults.appendChild(machineAnswer);
         console.log((e.target).classList.value);
         console.log("you draw")
      }
      else if(machineAnswerValue == "rock" ){
         if(userAnswerValue == "paper"){
            results.appendChild(e.target);
         houseResults.appendChild(machineAnswer);
            resultscomment.innerHTML = "you win paper covers rock";

         }
         else{
            results.appendChild(e.target);
            results.appendChild(machineAnswer);
            resultscomment.innerHTML = "rock crushes scissors";
         }
      }
      else if(machineAnswerValue == "paper"){
         if(userAnswerValue == "rock"){
            resultscomment.innerHTML = "house wins paper covers rock";
            results.appendChild(e.target);
            results.appendChild(machineAnswer);
         }
         else{
            results.appendChild(e.target);
            results.appendChild(machineAnswer);
            resultscomment.innerHTML = "scissors cut paper";
         }
      }
      else{
         if(userAnswerValue == "rock"){
            results.appendChild(e.target);
            results.appendChild(machineAnswer);
            resultscomment.innerHTML = "you win rock crushes scissors";

         }
         else{
            results.appendChild(e.target);
            results.appendChild(machineAnswer);
            resultscomment.innerHTML = "you lose scissors cut paper";

         }
      }
   }
})

playBtn.addEventListener("click", e =>{
   mainBody.style.display = "block"
})



rules.addEventListener("click", openModal = () =>{
      rulesModal.classList.remove("hidden");
});
closeBtn.addEventListener("click", closeModal =() => {
   rulesModal.classList.add("hidden");
});
