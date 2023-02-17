function calcSquared(num) {
    return num * num;

}
console.log(calcSquared(10));

console.log(Number.MAX_SAFE_INTEGER)

function calcCelsius(fahr) {

    return `Los grados F ${fahr} a C son: ${(fahr - 32) * 5 / 9}`

}

function calcCelsius2(fahr) {
    return "Los grados F" + fahr + "a c son:" + (fahr - 32) * 5 / 9;

}

console.log(calcCelsius2(255));

console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());


// maneras de declarar recursividad

//function calcSquared2(num) {
//    const res = num + num;
//    console.log(res);
//    calcSquared2(res);
//}
//calcSquared2(2);

//function RecString(abc){
//    const res= abc+ abc;
//    console.log(res);
//    RecString(res);
//}
//RecString('f');

// recursividad

//function recursiveData(x) {
 //   const res = x + x;
  //  console.log(res);
   // recursiveData(res);
//}

const recursive = x => {
    recursive(x + x);
}
// const recursive tiene un dato interno,
//hace alusion a flecha para indicar su siuiente paso

//const suma= (a,b) => {
//return a+ b;
const suma = (a,b) => a+ b;
console.log(suma(1,2));

const squared= x => x*x;

