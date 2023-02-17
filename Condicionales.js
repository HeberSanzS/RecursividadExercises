const parImpar = (n) => {
    return (n % 2 == 0 && n != 0) ? true : false;
}

const evenOdd = (n) => {
    if (n % 2 == 0 && n != 0) {
        return true
    } else {
        return false
    }
}

const evenOdd2 = n => {
    let res = false;

    if (n % 2 == 0 && n != 0) {
        res = true;
    }

    return res;
}

console.log(evenOdd2(16));

//Ejercicio2
//Crear un programa para verificar la edad de un usuario
//Debe ser mayor a 18 para un resultado positivo
//Parametro--Año de naciomiento del usuario
//Return--Mensaje


//const verifyage= (birthyear) => {
//const currentYear= new Date().getFullYear();
//let res=false;
//if(currentYear - birthyear >=18{
 //   res=false;
//})

const products = ['Awa', 'Maruchan', 'Pizza Valentina', 'Coquita Rosalia', 'Taquitos', 'Gorditas'];

const findPrice = item => {
    let res = 'No ai sistema';

    switch(item) {
        case 0:
            res = `El producto es ${products[item]} y cuesta: $${20}`;
            break;
        case 1 :
            res = `El producto es ${products[item]} y cuesta: $${16}`;
            break;
        case 2 :
            res = `El producto es ${products[item]} y cuesta: $${150}`;
            break;
        case 3 :
            res = `El producto es ${products[item]} y cuesta: $${29.99}`;
            break;
        case 4 :
            res = `El producto es ${products[item]} y cuesta: $${60}`;
            break;
        case 5 :
            res = `El producto es ${products[item]} y cuesta: $${70}`;
            break;
        default:
            res = `No ai sistema`;
            break;
    }
    return res;
}
console.log(findPrice(4));

const findPrice2 = item => {
    let res;

    switch(item) {
        case 0:
            res = 20;
            break;
        case 1 :
            res = 16;
            break;
        case 2 :
            res = 150;
            break;
        case 3 :
            res = 29.99;
            break;
        case 4 :
            res = 60;
            break;
        case 5 :
            res = 70;
            break;
        default:
            return 'No ai sistema';
            break;
    }
    return `El producto es ${products[item]} y cuesta: $${res}`;
}

console.log(findPrice2(-5));
