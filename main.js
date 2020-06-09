// Define variables
const machinesOptions = [".rock", ".paper", ".scissors"];
const userOptions =document.getElementsByClassName("choice") ;
const userScore = document.querySelector(".scoreCount");

const rules = document.querySelector(".rulesBtn");
const rulesModal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close");

const mainBody = document.querySelector("main");
const results = document.querySelector(".results");
const resultscomment = document.querySelector(".resultP");

   if (pickedOption == null){
      humanResults.innerText = "you lose"
   }
   else{
      let machinesPick = machinesOptions[Math.floor(Math.random()*3)];
      machineResults.innerText = `The house picked ${machinesPick}`;
      humanResults.innerText = `You picked ${pickedOption.value}`;
   }



rules.addEventListener("click", openModal = () =>{
      rulesModal.classList.remove("hidden");
});
closeBtn.addEventListener("click", closeModal =() => {
   rulesModal.classList.add("hidden");
});
