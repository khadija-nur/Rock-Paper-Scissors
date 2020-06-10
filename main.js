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
console.log(resultscomment.innerHTML);
// console.log(resultscomment)
optionsContainer.addEventListener("click", e =>{
   const userAnswerValue = e.target.classList.value;
   // mainBody.style.display = "none";

   // console.log(`img.${userAnswerValue}`)
   // console.log(options)
   console.log(e.target)
   console.log(machineAnswer)
   // if (options.includes(`img.${userAnswerValue}`)){
      mainBody.classList.add("hidden");
      const machineAnswerValue = machineAnswer.classList.value;
      if (e.target == machineAnswer){
         userResults.appendChild(e.target);
         houseResults.appendChild(machineAnswer);
         console.log((e.target).classList.value);
         resultscomment.innerHTML = "you draw";
      }
      else if(machineAnswerValue == "rock" ){
         if(userAnswerValue == "paper"){
            userResults.appendChild(e.target);
            houseResults.appendChild(machineAnswer);
            resultscomment.innerHTML = "you win";

         }
         else{
            userResults.appendChild(e.target);
            houseResults.appendChild(machineAnswer);
            resultscomment.innerHTML = "you lose";
         }
      }
      else if(machineAnswerValue == "paper"){
         if(userAnswerValue == "rock"){
            resultscomment.innerHTML = "house wins";
            userResults.appendChild(e.target);
            houseResults.appendChild(machineAnswer);
         }
         else{
            userResults.appendChild(e.target);
            houseResults.appendChild(machineAnswer);
            resultscomment.innerHTML = "you win";
         }
      }
      else{
         if(userAnswerValue == "rock"){
            userResults.appendChild(e.target);
            houseResults.appendChild(machineAnswer);
            resultscomment.innerHTML = "you win";

         }
         else{
            userResults.appendChild(e.target);
            houseResults.appendChild(machineAnswer);
            resultscomment.innerHTML = "you lose";

         }
      }
   // }
      


})

playBtn.addEventListener("click", e =>{
   mainBody.classList.remove("hidden");
   results.classList.add("hidden");
})

// function displayResults() {
//    if (e.target = ){}
// }
// console.log(options[1]);
// // console.log(machinesOptions)
// const body = document.querySelector("body");
// body.appendChild(options[1])


   
// const rockwins = rock > scissors;
// const paperwins = paper > rock;
// const scissorswin = scissors > paper


rules.addEventListener("click", openModal = () =>{
      rulesModal.classList.remove("hidden");
});
closeBtn.addEventListener("click", closeModal =() => {
   rulesModal.classList.add("hidden");
});


// closeBtn.addEventListener("click", closeModal());
// playbutton.addEventListener('click', resultsDisplay = () =>{
//    let pickedOption = document.querySelector('input[name="choices"]:checked');

//    if (pickedOption == null){
//       humanResults.innerText = "you lose"
//    }
//    else{
//       let machinesPick = machinesOptions[Math.floor(Math.random()*3)];
//       machineResults.innerText = `The house picked ${machinesPick}`;
//       humanResults.innerText = `You picked ${pickedOption.value}`;
//    }
// });
// // } 
// for(let i = 0; i<icons.length; i++ ){
//    icons[i].addEventListener("click", e =() =>{
//      displayResults();
//    } )
// // }





// we have 3 options for each user
// machine answer wil be a random option form the collection
// user answer will be e.target (event will be click)
// we compare user answer to machine answer
// if they are the same, they draw 
// if not, we figure out who beats who
// we display the options that have been picked by each user
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
