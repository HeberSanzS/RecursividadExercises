//camelcase
//case sensitive
//uppercamelcase
//lowcamelcase
//nombres relevantes
//no se usan guiones


var age =32;
var height = 1.73;

var name ='Heber';
var water = '2';
var meassurement= 'L';
console.log(typeof (water));
//dice que tipo de variable es

var salu2=NaN;
var op1= 'a'- 1;


console.log(op1);
console.log (isNaN(salu2));
//Saber o comprobar si es NaN
var michinames = ['Margarito','kitty pride'];
var personal= ['Heber', 'Sanchez', 31, true , 'Mexico','Ing sistemas'];
console.log (personal[0]);
//para mostrar un elemento de un array

console.log(personal[personal.length-1]);

//diferencias entre var let const

//console.log(greeting);

var greeting='hola';

let goodbye= 'bye';
//console.log(goodbye);
// si se declara despues falla la compilacion

const goodnight='nighty nught'
//console.log(goodnight);
// si se declara despues falla la compilacion
function myfunction(){
var Greetings2='HOla';
}

var greetiing3='hola';
console.log('Lol');

// El Scope para var solo es de forma global o local
// var global = 'hello';

// function myFunction() {
//     var greeting = 'hola';
// }

// console.log(greeting);

//let greeting4= 'hola';
//let count= 4;

//if count> 3){
//let greeting= 'hola de nuevo';
//if (count==4){
//    let greeint='hola en otro bloque';
// }
//console-log(greeting)

// }

//redeclaracion de variables
// var lo permite
// let no puede
// const al ser algo que deberia 
//no cambiar con el tiempo tampoo se puede
var Ladoa=2;
var Ladob=4;

console.log(Ladoa*=Ladob);
