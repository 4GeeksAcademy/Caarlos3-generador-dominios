import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension =['.com', '.es', '.net']
  for (let i of pronoun){
    for(let a of adj){
      for(let n of noun){
        for(let e of extension){
          console.log(i+a+n+e);
        }
      }
    }
  }

};

  