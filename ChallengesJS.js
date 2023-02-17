//Secuencia fibonacci

console.log("Secuencia Fibonacci");

function fibonacci(numero) {
    if(numero < 2) {
        return numero;
    }
    else {
        return fibonacci(numero-1) + fibonacci(numero- 2);
    }
}

nVeces=5;

if(nVeces <=0) {
    console.log('No es posible usar 0 o numeros negativos.');
}
else {
    for(let i = 0; i < nVeces; i++) {
        console.log(fibonacci(i));
    }
}
console.log(fibonacci(nVeces));

//Arreglo falso Verdadero

var arreglo= [false,false,true,true];

function CountBool(arreglo){
    return arreglo != false;

}

var ContadorT = arreglo => {

    return arreglo.filter(CountBool).length;
}
console.log(CountBool(arreglo[1]));

//

function mcd(a, b) {
    // Si b es 0, entonces a es el MCD y se devuelve a
    if (b == 0) {
        return a;
    }
    // De lo contrario, llamamos a la función de manera recursiva pasando b y el resto de a/b como parámetros
    return mcd(b, a % b);
}
console.log(mcd(50,120));


// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

const Triangle = n =>{
    let counter= (n + (n+1))/2;
    return counter;
}
console.log(Triangle(12));

//// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

const PercentEarth = (CountryName, portion) =>{
    const WorldTotal= 148940000;

    return `${CountryName} es ${(portion *100 )/ WorldTotal}%`;
}
console.log(PercentEarth('Russia', 17098242 ));


// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit





// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

function countUp(Users) {
    
    
    if (Users==0) {
    return console.log("no hay nadie en linea");
}
    let nextUser = Users - 1;

    if (nextUser > 0) {
        countUp(nextUser);
        return console.log(`el usuario ${nextUser} esta en línea`);

    }
    
}
countUp(0);

