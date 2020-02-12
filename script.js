

 var upperCase = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J","K", "L","M", "N", "O", "P", "Q", "R", "S", "T","U", "P", "Q", "R", "S", "T","U","V","W","X","Y","Z"]
 var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","q","r","s","t","u","v","w","x","y","z"]
 var numbers = ["1","2","3","4","5","6","7","8","9","0"]
 var specials = ["!","@","#","$","%","^","&","*","(",")","-","+"]

 

 var upperCase = document.getElementById("upperCase");
 var lowerCase = document.getElementById("lowerCase");
 var numbers = document.getElementById("numbers");
 var specials = document.getElementById("specials");
 var submitButton = document.getElementById("submitButton");
 var MasterArray = document.getElementById("MasterArray");


submitButton.addEventListener("click", function() {

if (upperCase.checked === true){ 
    MasterArray += upperCase
    };
if (lowerCase.checked === true){
    MasterArray += lowerCase
    };
if (numbers.checked === true) {
    MasterArray += numbers
    };
if (specials.checked == true) {
    MasterArray += specials
    };
    console.log(MasterArray)    
});



function manifest(){
    MasterArray
};














 
 
 
//  <!-- user selects their preference-->
 
//  <!-- 26 leters, 10 digits, #of special characters, utilizing capital letters letter option becomes 52-->
 
//  <!-- a password then generates and displays to the user-->
 
//  <!-- # array to store data should be a way to hold alaphabet easily, the array loops 8 times for 8 characters-->
 
//  <!-- if then else? to ask options of user-->
 
//  <!-- output will be after 8 loops  -->


