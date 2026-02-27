
const frutas = ["manzana", "plátano", "naranja", "guayaba", "pera", "naranja", "guanabana","sandia", "melón", "papaya", "mandarina", "fresa", "manzana", "plátano", "naranja", "guayaba", "pera", "naranja", "guanabana","sandia", "melón", "papaya", "mandarina", "fresa", "manzana", "plátano", "naranja", "guanabana", "pera", "ciruela"];


const contadorFrutas = {};

for (let i = 0; i < frutas.length; i++) {
  const fruta = frutas[i];

  if (contadorFrutas[fruta]) {
    contadorFrutas[fruta]++;
  } else {
    contadorFrutas[fruta] = 1;
  }
}

console.log("Cantidad de cada tipo de fruta:");

for (let fruta in contadorFrutas) {
    console.log(fruta + ": " + contadorFrutas[fruta]);
    
}

