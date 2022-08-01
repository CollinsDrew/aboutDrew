'use strict'

     function clicked() {

     let name = prompt("Hi, what is your name?")
     document.getElementById("name").innerHTML = "HEY " + name;

      let a = prompt('Do you like the tie in my picture? (YES/NO)');
      let A = a.toUpperCase();
      if (A === "YES" || A === "NO") {
      console.log(A); 
        alert("Thank you for answering");     
      }
      else {
        alert("Please enter yes/no");                
      }
      

      let b = prompt('Would you like to do the tech ed bootcamp?(YES/NO)');
      let B = b.toUpperCase();
      if(B === "NO" || B === "YES") {
        console.log(B);
         alert("Cool");
      }
        else {
          alert("Please enter yes/no!!");
        }
        

      let c = prompt('Are you married/in a relationship?(YES/NO)');
      let C = c.toUpperCase();
      if(C === "NO" || C === "YES"){
      console.log(C);     
        alert("Go You!!");
      }
        else {
          alert("Please enter yes/no");
        }

      let d = prompt('Do you have a dog too?(YES/NO)');
      let D = d.toUpperCase();
      if(D === "YES" || D === "NO"){
      console.log(D);
        alert("Cool")
      }
        else {
          alert("Please enter yes/no")
        }

      let e = prompt('Are you from Norfolk too?(YES/NO)');
      let E = e.toUpperCase();
      if(E === "YES" || E === "NO"){
      console.log(E);
        alert("Thats cool")
      }
       else {
         alert("Please enter yes/no")
       }

    }

function number(){

    for(let i = 0; i < 4; i++){

      
     let guess = prompt("Guess my lucky number");
  
     let guessNumber = parseInt(guess); 
  
      document.getElementById("guess").innerHTML = guessNumber;
  
     let mainNumber = 12;
  
     if(guessNumber === mainNumber){
       alert("BOOOOM good guess!");
     }
       
     else if(guessNumber > mainNumber){
       alert("Too high buddy, guess again");
     }
       
     else{
       alert("Too low, loser!");
     }

  if (i === 3){
      document.getElementById("guess").innerHTML = mainNumber;
      }
    
}
}