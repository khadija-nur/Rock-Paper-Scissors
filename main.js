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
   }
})




rules.addEventListener("click", openModal = () =>{
      rulesModal.classList.remove("hidden");
});
closeBtn.addEventListener("click", closeModal =() => {
   rulesModal.classList.add("hidden");
});
