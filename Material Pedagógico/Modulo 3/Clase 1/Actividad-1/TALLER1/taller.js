let totalCalorias = 0;

function agregarAlimento(nombre, calorias){
    totalCalorias = totalCalorias + calorias;

    console.log(`Total de calorías:  ${totalCalorias}`);
 
};

function mostrarTotalCalorias() {
    alert(`Total de calorías consumidas: ${totalCalorias}`);
};

agregarAlimento("Manzana", 95);
agregarAlimento("yogurt", 150);
mostrarTotalCalorias();