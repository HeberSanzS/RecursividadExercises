// Encontrar puntos totales en un juego de basketball 
// Hay valores de 2 puntos por canasta y 3 por canasta  // 

const puntosTotales= (c1,c2)=> c1*2 + c2*3;

console.log(puntosTotales(5,2));

// Encontrar cuantas patas de animales hay en total 
// gallinas = 2 // vacas = 4 // cabras = 4  
const patasTot= (gs, vs, cs) => gs* 2 + vs*4 + cs*4;
console.log(puntosTotales(5,2,3));


// Encontrar cantidad de FPS dados minutos  
//1seg = 60 fps
const calcFPS= (min )=> min * 60 * 60;
console.log(calcFPS(1));


// escribir una funcion que acepte un angulo en radianes y retorne un angulo en grados
const calcdegree= (rad) =>{
const pi= 3.1416;
return rad * 180/pi;

}
console.log(calcdegree(1));

// Encontrar la poblacion de la tierra en 3 decadas a partir de cantidad de personas
// poblacion(3248, 6) y arrojar -> 5408

const calcPoblacion = (pi, numero)=> (30*12*numero) + pi;
console.log(calcPoblacion(5240,3));


const calculatePopulation = (initialPopulation, growthRate) => {
    const growthFactor = 1 + (growthRate / 100);
    const populationIn30Years = initialPopulation * growthFactor ** 3;
    return Math.round(populationIn30Years);
  };
console.log(calculatePopulation(5240,3));






// Conviertan un Array de caracteres en String
// ['z','a','b','d','i','e','l'] -> 'Zabdiel'

// Conviertan un Array de caracteres  -> 'Zabdiel'
const arrayName = ['z','a','b','d','i','e','l'];


const arrayToString = arr => {
    return arr.join('_');
}

console.log(arrayToString(arrayName));

//radio circulo

const circleSquare = (r, a) => {
  const circ = 2 * Math.PI * r;
  const per = Math.sqrt(a) * 4;
  
 return (circ > per)  ? true : false;
}

console.log(circleSquare(16, 625));



// energia cinetica
// Calculate Kinetic Energy
// KE = (1/2) mv^2

// (60, 3) -> 270

// (45, 10) -> 2250

// (63.5, 7.35) -> 1715


const calcKineticE = (m , v) => {
  return (1/2) * m * (v ** 2);
}

console.log(calcKineticE(45, 10));

//Introduccion a objetos
// JSON
// JavaScript
// Object
// Notation


const griselo = {
  name: 'Griselo',
  age: 2,
  color: 'Gris',
  comidaFav: {
      fav1: 'Fresas',
      fav2: 'Platanos',
      fav3: 'Alfalfa',
      fav4: 'Tortillas secas'
  }
}

console.log(griselo.comidaFav.fav3);
