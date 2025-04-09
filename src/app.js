import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronombres = ["el", "ese", "aquel"];
  const adjetivos = ["valiente", "inteligente", "fuerte"];
  const sustantivos = ["guerrero", "científico", "atleta"];
  
  for (let i = 0; i < pronombres.length; i++) {
      for (let j = 0; j < adjetivos.length; j++) {
          for (let k = 0; k < sustantivos.length; k++) {
              console.log(`${pronombres[i]}${adjetivos[j]}${sustantivos[k]}.com`);
          }
      }
  }  
};
