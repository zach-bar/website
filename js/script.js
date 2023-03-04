function toggleMenu(x) {
    x.classList.toggle("change");
  }

  function changeText(text, b)
  {
    if (b)
      var display = document.getElementById('lang-display');
    if (!b)
      var display = document.getElementById('tool-display');
    display.innerHTML = "";
    display.innerHTML = text;
  }

const nav = document.querySelector("#navbar");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (lastScrollY > window.scrollY){
        nav.classList.remove("nav--hidden");
    }
    else if (window.scrollY > 500){
        nav.classList.add("nav--hidden");
    }
    else {
        nav.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
});

// let projects = {
//   1:{
//       name:"Discrete Structures",
//       description:"Program that takes two propositional inputs, with a boolean value for both. The program then outputs a list of statements with propositions and connectives. Once user chooses statement from list, boolean values of each proposition is placed in the necessary function, and the truth value of said statement is output to user.",
//       image: "./assets/discretestructures.png",
//       language: "C++",
//     },
//   2:{
//       name:"GitBit",
//       description:"Python library that holds the same functions as that of the git command line, such as add, cat-file, checkout, commit, hash-object, init, log, ls-files, ls-tree, merge, rebase, rev-parse, rm, show-ref, and tag.",
//       image: "./assets/git.png",
//       language: "Python",
//     },
//   3:{
//       name:"Stock Evaluation",
//       description:"Program that outsources stock data to give an accurate percentage increase over a variable of time indicated by the user. User is able to choose from a list of companies with consistent and public stock profiles.",
//       image: "./assets/stocks.png",
//       language: "Javascript",
//     },
//   4:{
//       name:"Calculator App",
//       description:"Basic calculator app that can implement basic mathematical functions like addition, subtraction, multiplication, division, and exponents, and can process fractions, decimals, long numbers, and calculates to scientific notation.",
//       image: "./assets/calculator.png",
//       language: "Swift",
//     },
//   5:{
//       name:"My Website",
//       description:"What you're witnessing right now is my official portfolio website, where I combine HTML, CSS, and Javascript to build a fun experience for anyone who stumbled upon it, using my knowledge of UX design. I also used Javscript Object Notation (JSON) to build the project page, which you're looking at right now!",
//       image: "./assets/website.png",
//       language: "HTML, CSS, Javascript",
//     }
// };
// var document : 
// fetch((projects) => {
  // document.getElementById('project').innerText = projects[1].name
// });

// var counter = 1;
// function changeImage(){
//   document.getElementById('cert' + counter).checked = true;
//   counter++;
//   if (counter>5){
//       counter=1;
//   }
//   timer = setTimeout("changeImage()", 5000);
// }
// function stopShow(){
//     clearTimeout(timer);
// }
// function runShow(){
//     changeImage();
// }

var slide = 1;
function changeProject(e){
    slide+=e;
    if (slide>5){
        slide=1;
    }
    if (slide<1){
      slide=5;
    }
    document.getElementById('proj' + slide).checked = true;
}





