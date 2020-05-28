"use strict";

reverseString();

function reverseString(){
	let userInput = prompt("Please enter a word to reverse:");
	let result = "";
	for (let i = userInput.length -1; i >= 0; i--){
		result += userInput[i];
	}
console.log(result);
}
//	document.getElementById("problemSolving").innerHTML = result;