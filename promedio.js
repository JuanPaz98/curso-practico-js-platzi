


const listaUno = [100, 2050, 300, 500, 100, 800];
r = document.getElementById("resultado");

function calcularPromedio(lista){
    /* let sumaTotal = 0;
    for (let sueldo in lista) {
        console.log(lista[sueldo]);
        sumaTotal += lista[sueldo];
    }
    return sumaTotal / lista.length; */
    const sumaLista = lista.reduce(function (valorAcumulado = 0, valorNuevo){
        return valorAcumulado + valorNuevo; 
    })
    return r.innerHTML = sumaLista / lista.length;
}

/* 
function calcularMedia(lista){
    let media = 0;
    lista.sort(function(a, b){
        if (a > b){
            return 1;
        }
        if (a < b){
            return -1;
        }
        return 0;
    })
    if(lista % 2 == 0){
        media = lista.length
    }
} */