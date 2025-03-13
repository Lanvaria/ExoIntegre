function toggleMenu() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  nav.classList.toggle('open');
  burger.classList.toggle('open');
}

function toggleCard() {
  var person = document.getElementById("person");
  var carte = document.getElementById("carte");
  var personContent = person.querySelector(".person-content");
  
  carte.classList.toggle("show");  // Affiche ou cache la carte
  personContent.classList.toggle("show");  // Cache le contenu de la personne
}


