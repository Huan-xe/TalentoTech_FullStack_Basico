function calcular(x,y){
    console.log(`El producto de ${x} y ${y} es ${x * y}` )
}
calcular(5,5)

// funciones anonimas Funcion tipo flecha
let calcularValores = (x,y) => {
    console.log(`El producto de ${x} y ${y} es ${x * y}`)
}

calcularValores(10, 10)



let fun  = function (a, b){
    return a + b;
}
let total = fun(2,3);
console.log(total);



(function (a, b){
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    
}) (3,4);


//Tarea Práctica pseudocódigo
num = 4

if(num % 2 ==0){
    console.log("El numero es par");
}else{console.log("numero es impar");}

//RETO


//Tarea 2
let totalCalorias = 0;

function agregarAlimento(nombre, calorias){

    totalCalorias = totalCalorias + calorias;
    console.log(`Total calorias: ${totalCalorias}`)
}
function mostrarTotalCalorias(){
    alert(`Total calorias: ${totalCalorias}`)
}

//Ejemplo de uso
agregarAlimento("Manzana", 95);
agregarAlimento("Yogur", 95);
mostrarTotalCalorias();





let nombreUsuaio = "Juan";
const estaActivo = true;

let producto = {
    nombre: "Lápiz",
    precio: 20,
    disponible: true

};


let edad = 18;

if(edad >= 18){
    console.log("Es mayor de edad")
}else {
    console.log("No es mayor de edad")
}

const manzana = 1000;
const pera = 1500;

let menorPrecio;
if (manzana < pera ) {
  menorPrecio = manzana;
} else {
  menorPrecio = pera;
}

console.log("El precio más bajo es:", menorPrecio);


//BUCLE FOR

for(let i = 1; i <= 5; i++){
    let contar = i;
    console.log(contar);
}

//BUCLE WHILE
let contar = 0;

while(contar < 5){
    contar = contar + 1;
    console.log(contar)
}


//FUNCIÓN TRADICIONAL
function saludar(nombre) {
    console.log("Bienvenido, " + nombre + "!");
  }
  
saludar("Juan");

//FUNCIÓN FLECHA
const calculoConImpuesto = (precio, impuesto) => {
    return precio + (precio * (impuesto / 100));
};
  
  const precio = 100;
  const impuesto = 19;
  let totalConImpuesto = calculoConImpuesto(precio, impuesto);
  
  console.log("El total con impuesto es:", totalConImpuesto);
  




//FUNCIÓN CON CALLBACK
function procesarCallback(mensaje, callback) {
    console.log("Mensaje recibido: " + mensaje);
    callback();
}

function saludoCallback() {
console.log("¡Callback ejecutado!");
}

procesarCallback("Hola, mundo", saludoCallback);


//OBJETO PARA CONVERTIR

const usuario = {
    nombre: "Juan",
    edad: "32"
};
//CONVERSIÓN A JSON

const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON);

//CONVERSIÓN A JSON

const userJSON ='{"nombre":"Juan","edad":"32"}';
const user = JSON.parse(userJSON);

console.log(user);


//PROMESA SIMPLE

const miPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promesa resuelta!");
    }, 2000);
});

miPromesa.then((mensaje) => {
    console.log(mensaje);
});