const carta1 = document.getElementById("simbolo1");
const carta2 = document.getElementById("simbolo2");
const numero1 = document.getElementById("numcarta1");
const numero2 = document.getElementById("numcarta2");
const puntajeText = document.getElementById("puntos");

let anteriorPalo;
let anteriorValor;
let palo;
let valor;
let confirmar = false;

let puntaje = 0;

const botMay = document.getElementById("btn-mayor");
const botMen = document.getElementById("btn-menor");
const botCon = document.getElementById("btn-siguiente");

botMay.addEventListener("click", () => {
  if (valor > anteriorValor && confirmar == false) {
    mostrarPaloValor2(palo, valor);
    puntaje += 100;
    anteriorPalo = palo;
    anteriorValor = valor;
    puntajeText.innerHTML = "Puntaje:" + puntaje;
    confirmar = true;
    console.log(cartas);
  } else if (valor == anteriorValor && confirmar == false) {
    mostrarPaloValor2(palo, valor);
    puntaje += 100;
    anteriorPalo = palo;
    anteriorValor = valor;
    puntajeText.innerHTML = "Puntaje: " + puntaje;
    confirmar = true;
    console.log(cartas);
  } else if (confirmar == true) {
  } else {
    confirmar = true;
    window.alert("Te equivocaste");
    mostrarPaloValor2(palo, valor);
    puntaje = 0;
    puntajeText.innerHTML = "Puntaje:" + puntaje;
    barajar();
    randomizarAnterior(cartas, anteriorPalo, anteriorValor);
    randomizar(cartas, palo, valor);
    console.log(cartas);
  }
});

botCon.addEventListener("click", () => {
  if (numero2.innerHTML > 0) {
    confirmar = false;
    ocultarPaloValor2();
    mostrarPaloValor1(anteriorPalo, anteriorValor);
    randomizar(cartas, palo, valor);
    console.log(anteriorPalo + anteriorValor);
    console.log(palo + valor);
  }
});

botMen.addEventListener("click", () => {
  if (valor < anteriorValor && confirmar == false) {
    mostrarPaloValor2(palo, valor);
    puntaje += 100;
    anteriorPalo = palo;
    anteriorValor = valor;
    puntajeText.innerHTML = "Puntaje: " + puntaje;
    confirmar = true;
    console.log(cartas);
  } else if (valor == anteriorValor && confirmar == false) {
    mostrarPaloValor2(palo, valor);
    puntaje += 100;
    anteriorPalo = palo;
    anteriorValor = valor;
    puntajeText.innerHTML = "Puntaje: " + puntaje;
    confirmar = true;
    console.log(cartas);
  } else if (confirmar == true) {
  } else {
    confirmar = true;
    window.alert("Te equivocaste");
    mostrarPaloValor2(palo, valor);
    puntaje = 0;
    puntajeText.innerHTML = "Puntaje: " + puntaje;
    barajar();
    randomizarAnterior(cartas, anteriorPalo, anteriorValor);
    randomizar(cartas, palo, valor);
  }
});

let cartas = {
  copa: {},
  espada: {},
  oro: {},
  basto: {},
};

let barajar = () => {
  cartas.copa = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
  };
  cartas.basto = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
  };
  cartas.oro = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
  };
  cartas.espada = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
  };
};

let mostrarPaloValor1 = (antpal, antval) => {
  numero1.innerHTML = antval;
  if (antpal == "oro") {
    carta1.classList.toggle("oro", true);
    carta1.classList.toggle("espada", false);
    carta1.classList.toggle("copa", false);
    carta1.classList.toggle("basto", false);
  } else if (antpal == "espada") {
    carta1.classList.toggle("oro", false);
    carta1.classList.toggle("espada", true);
    carta1.classList.toggle("copa", false);
    carta1.classList.toggle("basto", false);
  } else if (antpal == "copa") {
    carta1.classList.toggle("oro", false);
    carta1.classList.toggle("espada", false);
    carta1.classList.toggle("copa", true);
    carta1.classList.toggle("basto", false);
  } else if (antpal == "basto") {
    carta1.classList.toggle("oro", false);
    carta1.classList.toggle("espada", false);
    carta1.classList.toggle("copa", false);
    carta1.classList.toggle("basto", true);
  }
};

let mostrarPaloValor2 = (pal, val) => {
  numero2.innerHTML = val;
  if (pal == "oro") {
    carta2.classList.toggle("oro", true);
    carta2.classList.toggle("espada", false);
    carta2.classList.toggle("copa", false);
    carta2.classList.toggle("basto", false);
  } else if (pal == "espada") {
    carta2.classList.toggle("oro", false);
    carta2.classList.toggle("espada", true);
    carta2.classList.toggle("copa", false);
    carta2.classList.toggle("basto", false);
  } else if (pal == "copa") {
    carta2.classList.toggle("oro", false);
    carta2.classList.toggle("espada", false);
    carta2.classList.toggle("copa", true);
    carta2.classList.toggle("basto", false);
  } else if (pal == "basto") {
    carta2.classList.toggle("oro", false);
    carta2.classList.toggle("espada", false);
    carta2.classList.toggle("copa", false);
    carta2.classList.toggle("basto", true);
  }
};

let ocultarPaloValor1 = () => {
  numero1.innerText = 0;
  carta1.classList.toggle("oro", true);
  carta1.classList.toggle("espada", false);
  carta1.classList.toggle("copa", false);
  carta1.classList.toggle("basto", false);
};

let ocultarPaloValor2 = () => {
  numero2.innerText = 0;
  carta2.classList.toggle("oro", false);
  carta2.classList.toggle("espada", false);
  carta2.classList.toggle("copa", false);
  carta2.classList.toggle("basto", false);
};

let randomizar = (obj) => {
  if (
    cartas.hasOwnProperty("copa") == false &&
    cartas.hasOwnProperty("oro") == false &&
    cartas.hasOwnProperty("basto") == false &&
    cartas.hasOwnProperty("espada") == false
  ) {
    barajar();
  }

  let keys;
  let values;
  keys = Object.keys(obj);
  palo = keys[Math.floor(Math.random() * keys.length)];
  values = Object.values(obj[palo]);
  valor = values[Math.floor(Math.random() * values.length)];
  delete obj[palo][valor];

  if (cartas.hasOwnProperty("espada") == true) {
    if (Object.keys(cartas.espada).length === 0) {
      delete cartas.espada;
    }
  }
  if (cartas.hasOwnProperty("oro") == true) {
    if (Object.keys(cartas.oro).length === 0) {
      delete cartas.oro;
    }
  }
  if (cartas.hasOwnProperty("basto") == true) {
    if (Object.keys(cartas.basto).length === 0) {
      delete cartas.basto;
    }
  }
  if (cartas.hasOwnProperty("copa") == true) {
    if (Object.keys(cartas.copa).length === 0) {
      delete cartas.copa;
    }
  }
};

let randomizarAnterior = (obj) => {
  let keys;
  let values;
  keys = Object.keys(obj);
  anteriorPalo = keys[Math.floor(Math.random() * keys.length)];
  values = Object.values(obj[anteriorPalo]);
  anteriorValor = values[Math.floor(Math.random() * values.length)];
  delete obj[anteriorPalo][anteriorValor];
};

barajar();

randomizarAnterior(cartas, anteriorPalo, anteriorValor);

console.log(anteriorPalo + anteriorValor);

randomizar(cartas, palo, valor);

mostrarPaloValor1(anteriorPalo, anteriorValor);

console.log(palo + valor);

console.log(cartas);
