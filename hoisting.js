var miNombre = "Diego";

var miNombre = undefined;

console.log(miNombre + "soy hoisting");

miNombre = "Diego";

hey();

function hey() {
    console.log('Hola ' + miNombre);
};

var miNombre = 'Diego';

function hey() { 
    console.log('Hola ' + miNombre);
};

var miNombre;

hey();

miNombre = 'Diego';