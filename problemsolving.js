"use strict";

//reverseString();
capitalizeLetter();

function reverseString(){
	let userInput = prompt("Please enter a word to reverse:");
	let result = "";
	for (let i = userInput.length -1; i >= 0; i--){
		result += userInput[i];
	}
console.log(result);
}
//	document.getElementById("problemSolving").innerHTML = result;


function capitalizeLetter(){
	let userInput = prompt("Please enter a phrase to capitalize every first letter:");
    let capitalizeString = "";
    let splitString = userInput.split(" ");
    for (let i = 0; i < splitString.Length; i++){
        if(i < splitString.Length - 1){
            capitalizeString += splitString[i][0].toString().toUpperCase() + splitString[i].substring(1) + " ";
        }
        else{
            capitalizeString += splitString[i][0].toString().toUpperCase() + splitString[i].substring(1);
        }     
    }
    console.log(capitalizeString);
    return capitalizeString;

    //replace?
}
//userInput.length - 1
