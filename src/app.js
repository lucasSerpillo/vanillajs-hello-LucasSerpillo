/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function NumRandom(List) {
    let element = "";

    element = List[Math.floor(Math.random() * List.length)];
    return element;
  }

  let generador = document.getElementById("excusa");
  generador.innerHTML =
    NumRandom(who) +
    " " +
    NumRandom(action) +
    " " +
    NumRandom(what) +
    " " +
    NumRandom(when);
};
