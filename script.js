$( document ).ready(function() {
    console.log( "ready!" );

var upperCase = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J","K", "L","M", "N", "O", "P", "Q", "R", "S", "T","U", "P", "Q", "R", "S", "T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var specials = ["!","@","#","$","%","^","&","*","(",")","-","+"]
var MasterArray = [];
 

 var upperCase = document.getElementById("upperCase");
 var lowerCase = document.getElementById("lowerCase");
 var numbers = document.getElementById("numbers");
 var specials = document.getElementById("specials");
 var submitButton = document.getElementById("submitButton");

  
submitButton.addEventListener("click", manifest); {

}

function manifest() {

if (upperCase.checked === true){ 
    MasterArray== MasterArray + upperCase
    };
if (lowerCase.checked === true){
    MasterArray== MasterArray + lowerCase
    };
if (numbers.checked === true) {
    MasterArray== MasterArray + numbers
    
    };
if (specials.checked === true) {
    MasterArray== MasterArray + specials
    

  }};
  console.log(MasterArray.value)

// for loop over the master array at the length the user defines





 
//copy to clipboard functionality here
// alert "copied to clipboard"
// function copy() {
//     var copyText = document.querySelector("#input");
//     copyText.select();
//     document.execCommand("copy");
//   }
  
//   document.querySelector("#copy").addEventListener("click", copy);


// these last 3 characters close document.ready
 }); 
