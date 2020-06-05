// Define variables
// document.querySelector('input[name="genderS"]:checked').value;
// const playbutton = document.getElementsByClassName("play");
const machinesOptions = ["Rock", "Paper", "Scissors"];
const playbutton = document.querySelector("button");

const humanResults = document.querySelector(".humanResults");
const machineResults = document.querySelector(".machineResults");

// Define functions
// console.log(generateBtn);
// When the play button is clicked results should be displayed
// generateBtn.addEventListener ('click', result = () => {})
playbutton.addEventListener('click', resultsDisplay = () =>{
   let pickedOption = document.querySelector('input[name="choices"]:checked');

   if (pickedOption == null){
      humanResults.innerText = "you lose"
   }
   else{
      let machinesPick = machinesOptions[Math.floor(Math.random()*3)];
      machineResults.innerText = `The house picked ${machinesPick}`;
      humanResults.innerText = `You picked ${pickedOption.value}`;
   }


   
});
