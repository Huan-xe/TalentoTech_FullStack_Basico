function calcular(x,y){
    console.log(`El producto de ${x} y ${y} es ${x * y}` )
}
calcular(5,5)

// Funcion anonima.
let calcularValores = (x,y) => {
    console.log(`El producto de ${x} y ${y} es ${x * y}`  )
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
    
}
function mostrarTotalCalorias(){
    //Tu código aquí
}

//Ejemplo de uso
agregarAlimento("Manzana", 95);
agregarAlimento("Yogur", 95);
mostrarTotalCalorias();





