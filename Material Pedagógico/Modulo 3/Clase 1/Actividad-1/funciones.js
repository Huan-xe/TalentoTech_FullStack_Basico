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